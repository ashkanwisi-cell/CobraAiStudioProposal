import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";

type Item = { src: string; title: string; caption: string; category?: string };
export function Lightbox({ items, index, onIndex, onClose }: { items: Item[]; index: number; onIndex: (n:number)=>void; onClose:()=>void }) {
  const closeRef=useRef<HTMLButtonElement>(null); const before=useRef<HTMLElement|null>(null);
  const move=(delta:number)=>onIndex((index+delta+items.length)%items.length);
  useEffect(()=>{before.current=document.activeElement as HTMLElement;document.body.classList.add("modal-open");closeRef.current?.focus();return()=>{document.body.classList.remove("modal-open");before.current?.focus();}},[]);
  useEffect(()=>{const key=(e:KeyboardEvent)=>{if(e.key==="Escape")onClose();if(e.key==="ArrowRight")move(1);if(e.key==="ArrowLeft")move(-1);if(e.key==="Tab"){const controls=[...document.querySelectorAll<HTMLElement>(".lightbox button")];if(!controls.length)return;const first=controls[0],last=controls[controls.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}};window.addEventListener("keydown",key);return()=>window.removeEventListener("keydown",key)});
  const item=items[index];
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onMouseDown={(e)=>e.target===e.currentTarget&&onClose()}><button ref={closeRef} className="lightbox-close" onClick={onClose} aria-label="Close"><X/></button><button className="lightbox-prev" onClick={()=>move(-1)} aria-label="Previous image"><ChevronLeft/></button><figure><img src={item.src} alt={item.title}/><figcaption><span>{index+1} / {items.length}</span><strong>{item.title}</strong><small>{item.category ? `${item.category} — ${item.caption}` : item.caption}</small></figcaption></figure><button className="lightbox-next" onClick={()=>move(1)} aria-label="Next image"><ChevronRight/></button></div>;
}
