import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Boxes,
  FolderKanban,
  Grid3X3,
  Layers3,
  LayoutDashboard,
  Map,
  Search,
  Settings,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import type { Language } from "../i18n";
import { directoryStats, localize, projectDirectory, type DirectoryCategory } from "../data/projectDirectory";

const icons: Record<string, LucideIcon> = {
  map: Map,
  layout: LayoutDashboard,
  sparkles: Sparkles,
  boxes: Boxes,
  folder: FolderKanban,
  projects: FolderKanban,
  apps: Grid3X3,
  settings: Settings,
};

const copy = {
  en: {
    eyebrow: "Complete product map",
    title: "Introduction to All Sections",
    overview: "Explore every page, workspace, tool, supporting surface, and guide found in the audited COBRA project. Use the categories below to understand how the product fits together, search for a specific capability, or jump to the proposal section that explains it.",
    categories: "Categories",
    groups: "Subcategories",
    sections: "Sections",
    search: "Search every section and tool",
    searchLabel: "Search the complete COBRA project directory",
    jumps: "Jump to category",
    open: "Open related section",
    showing: "matching sections",
    empty: "No matching sections found.",
    emptyHint: "Try a broader term or clear the search.",
    clear: "Clear search",
  },
  fa: {
    eyebrow: "نقشه کامل محصول",
    title: "معرفی همه بخش‌ها",
    overview: "تمام صفحه‌ها، فضاهای کاری، ابزارها، بخش‌های پشتیبان و راهنماهای موجود در پروژه بررسی‌شده کبرا را یک‌جا ببینید. با دسته‌بندی‌ها ساختار محصول را بشناسید، قابلیت موردنظر را جست‌وجو کنید یا مستقیماً به بخش مرتبط در این معرفی بروید.",
    categories: "دسته اصلی",
    groups: "زیردسته",
    sections: "بخش و ابزار",
    search: "جست‌وجو در همه بخش‌ها و ابزارها",
    searchLabel: "جست‌وجو در فهرست کامل پروژه کبرا",
    jumps: "رفتن به دسته",
    open: "مشاهده بخش مرتبط",
    showing: "بخش مطابق جست‌وجو",
    empty: "بخشی مطابق جست‌وجو پیدا نشد.",
    emptyHint: "عبارت کلی‌تری وارد کنید یا جست‌وجو را پاک کنید.",
    clear: "پاک‌کردن جست‌وجو",
  },
};

function categoryMatches(category: DirectoryCategory, language: Language, query: string) {
  const categoryText = `${localize(category.title, language)} ${localize(category.intro, language)}`.toLocaleLowerCase(language);
  const categoryHit = categoryText.includes(query);
  const groups = category.groups.flatMap((group) => {
    const groupHit = localize(group.title, language).toLocaleLowerCase(language).includes(query);
    const items = categoryHit || groupHit
      ? group.items
      : group.items.filter((entry) => `${localize(entry.name, language)} ${localize(entry.description, language)} ${entry.status ? localize(entry.status, language) : ""}`.toLocaleLowerCase(language).includes(query));
    return items.length ? [{ ...group, items }] : [];
  });
  return groups.length ? { ...category, groups } : null;
}

export function ProjectDirectory({ language }: { language: Language }) {
  const [query, setQuery] = useState("");
  const ui = copy[language];
  const stats = directoryStats();
  const normalized = query.trim().toLocaleLowerCase(language);
  const filtered = useMemo(() => normalized ? projectDirectory.map((category) => categoryMatches(category, language, normalized)).filter((category): category is DirectoryCategory => Boolean(category)) : projectDirectory, [language, normalized]);
  const visibleCount = filtered.reduce((total, category) => total + category.groups.reduce((sum, group) => sum + group.items.length, 0), 0);

  return <section id="directory" className="section-shell directory" aria-labelledby="directory-title">
    <div className="directory-overview">
      <div className="directory-intro">
        <span className="eyebrow"><i />{ui.eyebrow}</span>
        <h2 id="directory-title">{ui.title}</h2>
        <p>{ui.overview}</p>
      </div>
      <dl className="directory-stats" aria-label={ui.title}>
        <div><dt>{ui.categories}</dt><dd>{stats.categories}</dd></div>
        <div><dt>{ui.groups}</dt><dd>{stats.groups}</dd></div>
        <div><dt>{ui.sections}</dt><dd>{stats.sections}</dd></div>
      </dl>
    </div>

    <div className="directory-toolbar">
      <label className="directory-search">
        <span className="sr-only">{ui.searchLabel}</span>
        <Search aria-hidden="true" />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={ui.search} type="search" />
        {query && <button type="button" onClick={() => setQuery("")} aria-label={ui.clear}><X /></button>}
      </label>
      <nav className="directory-jumps" aria-label={ui.jumps}>
        {projectDirectory.map((category, index) => {
          const Icon = icons[category.icon] ?? Layers3;
          return <a key={category.id} href={`#directory-${category.id}`}><Icon aria-hidden="true" /><span>{String(index + 1).padStart(2, "0")}</span>{localize(category.title, language)}</a>;
        })}
      </nav>
    </div>

    {normalized && <p className="directory-result-count" aria-live="polite"><strong>{visibleCount}</strong> {ui.showing}</p>}

    <div className="directory-categories">
      {filtered.map((category, categoryIndex) => {
        const Icon = icons[category.icon] ?? Layers3;
        return <article id={`directory-${category.id}`} className="directory-category" key={category.id}>
          <header className="directory-category-head">
            <div className="directory-category-icon"><Icon aria-hidden="true" /></div>
            <span>{String(projectDirectory.findIndex((entry) => entry.id === category.id) + 1).padStart(2, "0")}</span>
            <h3>{localize(category.title, language)}</h3>
            <p>{localize(category.intro, language)}</p>
          </header>
          <div className="directory-groups">
            {category.groups.map((group, groupIndex) => <section className="directory-group" key={`${category.id}-${groupIndex}`} aria-labelledby={`${category.id}-group-${groupIndex}`}>
              <h4 id={`${category.id}-group-${groupIndex}`}><span>{String(groupIndex + 1).padStart(2, "0")}</span>{localize(group.title, language)}</h4>
              <div className="directory-items">
                {group.items.map((entry, itemIndex) => <a className="directory-card" href={`#${entry.target}`} key={`${localize(entry.name, "en")}-${itemIndex}`} aria-label={`${ui.open}: ${localize(entry.name, language)}`}>
                  <div className="directory-card-title">
                    <h5>{localize(entry.name, language)}</h5>
                    {entry.status && <span>{localize(entry.status, language)}</span>}
                  </div>
                  <p>{localize(entry.description, language)}</p>
                  <span className="directory-card-link">{ui.open}<ArrowUpRight aria-hidden="true" /></span>
                </a>)}
              </div>
            </section>)}
          </div>
        </article>;
      })}
      {!filtered.length && <div className="directory-empty"><Search aria-hidden="true" /><h3>{ui.empty}</h3><p>{ui.emptyHint}</p><button className="secondary" type="button" onClick={() => setQuery("")}>{ui.clear}</button></div>}
    </div>
  </section>;
}
