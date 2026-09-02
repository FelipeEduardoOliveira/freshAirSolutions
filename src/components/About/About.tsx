import { useLanguage } from '../../hooks/useLanguage'
import { Container } from '../Container/Container'
import { SectionTitle } from '../SectionTitle/SectionTitle'

export function About() { const { content } = useLanguage(); return <section id="about" className="py-20 sm:py-28"><Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"><div className="relative"><img className="min-h-[430px] rounded-3xl object-cover shadow-2xl" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1100&q=85" alt={content.about.imageAlt}/><span className="absolute -bottom-4 -right-4 -z-10 h-1/2 w-1/2 rounded-br-3xl bg-brand-cyan" /></div><div><SectionTitle eyebrow={content.about.eyebrow} title={content.about.title}/><div className="mt-7 space-y-4 text-base leading-relaxed text-slate-600">{content.about.paragraphs.map(text => <p key={text}>{text}</p>)}</div></div></Container></section> }
