import { Boxes, Check, Layers3, RefreshCcw, Shield, SlidersHorizontal, Workflow } from "lucide-react";
import type { Translation } from "../i18n";
import { SectionHeading } from "./SectionHeading";

const icons = [Shield, Layers3, Boxes, Check, RefreshCcw, SlidersHorizontal];
export function OverviewBenefits({ t }: { t: Translation }) {
  return <>
    <section id="overview" className="section-shell"><SectionHeading eyebrow={t.overview.eyebrow} title={t.overview.title} /><div className="overview-grid reveal"><div className="overview-copy"><p>{t.overview.body}</p><aside>{t.overview.note}</aside></div><div className="comparison">{t.overview.split.map((group: any, i: number) => <div key={group.title} className={i ? "positive" : ""}><h3><Workflow size={18}/>{group.title}</h3>{group.items.map((item:string)=><p key={item}><Check size={14}/>{item}</p>)}</div>)}</div></div></section>
    <section id="benefits" className="section-shell"><SectionHeading eyebrow={t.benefits.eyebrow} title={t.benefits.title}/><div className="card-grid benefits-grid">{t.benefits.items.map(([title, body]: [string,string], i:number)=>{const Icon=icons[i];return <article className="panel reveal" key={title}><div className="icon-box"><Icon/></div><h3>{title}</h3><p>{body}</p></article>})}</div></section>
  </>;
}
