import { Menu, Monitor, X } from "lucide-react";
import { useState } from "react";
import type { Language, Translation } from "../i18n";

export function Header({ t, language, setLanguage, active }: { t: Translation; language: Language; setLanguage: (value: Language) => void; active: string }) {
  const [open, setOpen] = useState(false);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  return <header className="site-header">
    <div className="header-inner">
      <button className="brand" onClick={() => go("top")} aria-label="COBRA home"><img src="./assets/brand/cobra.svg" alt="" /><span><strong>COBRA</strong><small>{t.brandSub}</small></span></button>
      <nav className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        {t.nav.map(([id, label]: [string, string]) => <button key={id} onClick={() => go(id)} className={active === id ? "active" : ""} aria-current={active === id ? "page" : undefined}>{label}</button>)}
      </nav>
      <div className="header-actions">
        <span className="desktop-badge"><Monitor size={13} />{t.status}</span>
        <button className="language" onClick={() => setLanguage(language === "en" ? "fa" : "en")} aria-label={language === "en" ? "Switch to Persian" : "تغییر زبان به انگلیسی"}>{t.language}</button>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? t.close : t.menu}>{open ? <X /> : <Menu />}</button>
      </div>
    </div>
  </header>;
}
