import { ArrowUp, Check, Monitor } from "lucide-react";
import type { Translation } from "../i18n";
import { SectionHeading } from "./SectionHeading";

export function UseCasesCta({t}:{t:Translation}){const go=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});return <>
  <section id="use-cases" className="section-shell"><SectionHeading eyebrow={t.audiences.eyebrow} title={t.audiences.title}/><div className="audience-grid">{t.audiences.items.map(([title,body]:[string,string],i:number)=><article className="audience reveal" key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="differences reveal"><SectionHeading eyebrow={t.differences.eyebrow} title={t.differences.title}/><div>{t.differences.items.map((x:string)=><span key={x}><Check/>{x}</span>)}</div></div></section>
  <section className="section-shell cta reveal"><img src="./assets/brand/cobra.svg" alt="COBRA"/><h2>{t.cta.title}</h2><p>{t.cta.body}</p><div className="button-row"><button className="primary" onClick={()=>go("workflow")}>{t.cta.primary}</button><button className="secondary" onClick={()=>go("gallery")}>{t.cta.secondary}</button></div><span className="cta-badge"><Monitor/>{t.cta.badge}</span><small>{t.cta.note}</small></section>
  <footer><span>{t.footer}</span><button onClick={()=>go("top")} aria-label="Back to top"><ArrowUp/></button></footer>
  </>}
