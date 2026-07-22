import { Bot, Boxes, Download, FolderKanban, Gauge, History, Home, Image, Settings, Video } from "lucide-react";
import type { Translation } from "../i18n";
import { SectionHeading } from "./SectionHeading";

const icons=[Home,Image,Video,Boxes,Download,FolderKanban,Bot,Gauge,History,Settings];
export function Capabilities({ t }: { t: Translation }) { return <section id="capabilities" className="section-shell"><SectionHeading eyebrow={t.capabilities.eyebrow} title={t.capabilities.title} intro={t.capabilities.intro}/><div className="capability-list">{t.capabilities.items.map(([title,body]:[string,string],i:number)=>{const Icon=icons[i];return <article className="capability reveal" key={title}><span>{String(i+1).padStart(2,"0")}</span><div className="icon-box"><Icon/></div><div><h3>{title}</h3><p>{body}</p>{i===1&&<div className="preset-strip"><b>{t.capabilities.presets}</b>{t.capabilities.presetList.map((x:string)=><em key={x}>{x}</em>)}</div>}</div></article>})}</div></section> }
