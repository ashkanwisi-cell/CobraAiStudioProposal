import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { screenshots } from "../data/media";
import type { Language, Translation } from "../i18n";
import { SectionHeading } from "./SectionHeading";
import { Lightbox } from "./Lightbox";

export function ScreenshotShowcase({ t, language }: { t: Translation; language: Language }) {
  const [index,setIndex]=useState(0);const [lightbox,setLightbox]=useState(false);const start=useRef(0);
  const items=useMemo(()=>screenshots.map(x=>({src:x.src,title:x[language][0],caption:x[language][1]})),[language]);
  const move=(n:number)=>setIndex((index+n+items.length)%items.length);
  useEffect(()=>{const key=(e:KeyboardEvent)=>{if(document.activeElement?.closest("#screenshots")&&!lightbox){if(e.key==="ArrowRight")move(1);if(e.key==="ArrowLeft")move(-1)}};window.addEventListener("keydown",key);return()=>window.removeEventListener("keydown",key)});
  return <section id="screenshots" className="section-shell"><SectionHeading eyebrow={t.screenshots.eyebrow} title={t.screenshots.title} intro={t.screenshots.intro}/><div className="screenshot-tabs" role="tablist">{items.map((x,i)=><button key={x.title} role="tab" aria-selected={i===index} onClick={()=>setIndex(i)}>{x.title}</button>)}</div><div className="shot-stage reveal" tabIndex={0} onTouchStart={e=>start.current=e.changedTouches[0].clientX} onTouchEnd={e=>{const d=e.changedTouches[0].clientX-start.current;if(Math.abs(d)>45)move(d<0?1:-1)}}><button onClick={()=>move(-1)} aria-label="Previous screenshot"><ChevronLeft/></button><div className="window-frame"><div className="window-bar"><div><i/><i/><i/></div><span>COBRA · {items[index].title}</span><button onClick={()=>setLightbox(true)} aria-label="Open screenshot full screen"><Expand/></button></div><img src={items[index].src} alt={`${items[index].title} — ${items[index].caption}`} loading={index===0?"eager":"lazy"}/><div className="shot-caption"><strong>{items[index].title}</strong><span>{items[index].caption}</span><small>{index+1} / {items.length}</small></div></div><button onClick={()=>move(1)} aria-label="Next screenshot"><ChevronRight/></button></div><div className="shot-thumbs">{items.map((x,i)=><button key={x.src} className={i===index?"active":""} onClick={()=>setIndex(i)} aria-label={x.title}><img src={x.src} alt="" loading="lazy"/></button>)}</div>{lightbox&&<Lightbox items={items} index={index} onIndex={setIndex} onClose={()=>setLightbox(false)}/>}</section>;
}
