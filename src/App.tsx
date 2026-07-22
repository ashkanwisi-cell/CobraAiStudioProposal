import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectDirectory } from "./components/ProjectDirectory";
import { OverviewBenefits } from "./components/OverviewBenefits";
import { Capabilities } from "./components/Capabilities";
import { SpecializedApps } from "./components/SpecializedApps";
import { ScreenshotShowcase } from "./components/ScreenshotShowcase";
import { Gallery } from "./components/Gallery";
import { WorkflowTechnology } from "./components/WorkflowTechnology";
import { UseCasesCta } from "./components/UseCasesCta";
import { en, fa, type Language } from "./i18n";

function initialLanguage():Language{const saved=localStorage.getItem("cobra-language");if(saved==="fa"||saved==="en")return saved;return navigator.language.toLowerCase().startsWith("fa")?"fa":"en"}
export function App(){const [language,setLanguage]=useState<Language>(initialLanguage);const [active,setActive]=useState("overview");const t=language==="fa"?fa:en;
  useEffect(()=>{document.documentElement.lang=language;document.documentElement.dir=language==="fa"?"rtl":"ltr";document.title=t.metaTitle;localStorage.setItem("cobra-language",language)},[language,t.metaTitle]);
  useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting)x.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));return()=>observer.disconnect()},[language]);
  useEffect(()=>{const ids=en.nav.map(x=>x[0]);const spy=new IntersectionObserver(entries=>{const visible=entries.filter(x=>x.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setActive(visible.target.id)},{rootMargin:"-25% 0px -65%",threshold:[0,.2,.6]});ids.forEach(id=>{const el=document.getElementById(id);if(el)spy.observe(el)});return()=>spy.disconnect()},[]);
  return <><div className="scroll-progress"/><Header t={t} language={language} setLanguage={setLanguage} active={active}/><main><Hero t={t}/><OverviewBenefits t={t}/><ProjectDirectory language={language}/><Capabilities t={t}/><SpecializedApps t={t}/><ScreenshotShowcase t={t} language={language}/><Gallery t={t} language={language}/><WorkflowTechnology t={t}/><UseCasesCta t={t}/></main></>}
