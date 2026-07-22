import { AlertTriangle, ArrowRight, Check, Code2, Cpu, HardDrive, Layers3, LockKeyhole, RefreshCw, ShieldCheck } from "lucide-react";
import type { Translation } from "../i18n";
import { SectionHeading } from "./SectionHeading";

const flowIcons=[Layers3,HardDrive,Cpu,HardDrive,ShieldCheck,Code2,RefreshCw,Layers3,Check];
export function WorkflowTechnology({t}:{t:Translation}){return <>
  <section id="workflow" className="section-shell"><SectionHeading eyebrow={t.workflow.eyebrow} title={t.workflow.title}/><div className="workflow-rail">{t.workflow.steps.map((x:string,i:number)=>{const Icon=flowIcons[i];return <div className="flow-step reveal" key={x}><span>{i+1}</span><Icon/><p>{x}</p>{i<t.workflow.steps.length-1&&<ArrowRight className="flow-arrow"/>}</div>})}</div></section>
  <section id="technology" className="section-shell"><SectionHeading eyebrow={t.technology.eyebrow} title={t.technology.title}/><div className="tech-grid"><article className="tech-simple reveal"><div className="icon-box"><LockKeyhole/></div><h3>{t.technology.productTitle}</h3><p>{t.technology.productBody}</p><div className="tech-orbit"><span>Models</span><span>Runtimes</span><b>COBRA</b><span>Queue</span><span>Outputs</span></div></article><article className="tech-detail reveal"><div className="icon-box"><Code2/></div><h3>{t.technology.technicalTitle}</h3><ul>{t.technology.technical.map((x:string)=><li key={x}><Check/>{x}</li>)}</ul><aside><AlertTriangle/>{t.technology.caveat}</aside></article></div></section>
  </>}
