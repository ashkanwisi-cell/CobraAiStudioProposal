import { Expand } from "lucide-react";
import { useMemo, useState } from "react";
import { gallery } from "../data/media";
import type { Language, Translation } from "../i18n";
import { SectionHeading } from "./SectionHeading";
import { Lightbox } from "./Lightbox";

export function Gallery({ t, language }: { t: Translation; language: Language }) {
  const [index,setIndex]=useState<number|null>(null);const items=useMemo(()=>gallery.map(x=>({src:x.src,title:x[language][0],category:x[language][1],caption:x[language][2]})),[language]);
  return <section id="gallery" className="section-shell"><SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} intro={t.gallery.intro}/><div className="gallery-grid">{items.map((x,i)=><button className="gallery-item reveal" key={x.src} onClick={()=>setIndex(i)} aria-label={`${x.title}. Open full size`}><img src={x.src} alt={x.title} loading="lazy"/><span><em>{x.category}</em><strong>{x.title}</strong><p>{x.caption}</p></span><i><Expand/></i></button>)}</div>{index!==null&&<Lightbox items={items} index={index} onIndex={setIndex} onClose={()=>setIndex(null)}/>}</section>;
}
