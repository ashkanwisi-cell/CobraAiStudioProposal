export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="section-heading reveal"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{intro && <p>{intro}</p>}</div>;
}
