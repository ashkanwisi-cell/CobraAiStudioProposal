import { ArrowDown, CheckCircle2, Database, MonitorCog, RotateCcw, ShieldCheck } from "lucide-react";
import type { Translation } from "../i18n";

const icons = [ShieldCheck, CheckCircle2, RotateCcw, Database];
export function Hero({ t }: { t: Translation }) {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return <section id="top" className="hero section-shell">
    <div className="hero-copy reveal"><span className="eyebrow"><i />{t.hero.eyebrow}</span><img className="hero-mark" src="./assets/brand/cobra.svg" alt="COBRA logo" /><h1><span>COBRA</span> — {t.hero.title}</h1><p>{t.hero.lead}</p><div className="button-row"><button className="primary" onClick={() => go("overview")}>{t.hero.primary}<ArrowDown size={17} /></button><button className="secondary" onClick={() => go("gallery")}>{t.hero.secondary}</button></div></div>
    <div className="hero-visual reveal">
      <div className="ambient" /><div className="window-frame"><div className="window-bar"><div><i/><i/><i/></div><span><MonitorCog size={13} /> COBRA AI Studio</span></div><img src="./assets/screenshots/home.png" alt="COBRA Home dashboard" fetchPriority="high" /></div>
      <div className="status-grid">{t.hero.chips.map((item: string, i: number) => { const Icon=icons[i]; return <div className="status-card" key={item}><Icon size={16}/><span>{item}</span><i/></div>; })}</div>
    </div>
  </section>;
}
