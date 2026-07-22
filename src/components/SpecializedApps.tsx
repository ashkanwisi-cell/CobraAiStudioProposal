import { AlertCircle, Check, Dna, Package, WandSparkles } from "lucide-react";
import type { Translation } from "../i18n";
import { SectionHeading } from "./SectionHeading";

const icons=[Dna,Package,WandSparkles];
export function SpecializedApps({ t }: { t: Translation }) { return <section id="apps" className="section-shell"><SectionHeading eyebrow={t.apps.eyebrow} title={t.apps.title} intro={t.apps.intro}/><div className="apps-list">{t.apps.items.map((app:any,i:number)=>{const Icon=icons[i];return <article className={`app-feature reveal app-${app.id}`} key={app.id}><div className="app-image"><img src={app.image} alt={app.title} loading="lazy"/><span><Icon size={15}/>{app.label}</span></div><div className="app-copy"><div className="app-kicker"><Icon/>COBRA APP {String(i+1).padStart(2,"0")}</div><h3>{app.title}</h3><p>{app.body}</p><ul>{app.features.map((x:string)=><li key={x}><Check/>{x}</li>)}</ul><aside><AlertCircle/>{app.note}</aside></div></article>})}</div><div className="angles reveal"><h3>{t.apps.anglesTitle}</h3><div>{t.apps.angles.map((x:string,i:number)=><span key={x}><b>{String(i+1).padStart(2,"0")}</b>{x}</span>)}</div></div></section> }
