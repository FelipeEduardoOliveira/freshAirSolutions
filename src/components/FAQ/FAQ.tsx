import { useLanguage } from '../../hooks/useLanguage'
import { Container } from '../Container/Container'
import { SectionTitle } from '../SectionTitle/SectionTitle'

export function FAQ() { const { content } = useLanguage(); const faq = content.faq; return <section id="faq" className="bg-[#f4f7f7] py-20 sm:py-28"><Container><SectionTitle eyebrow={faq.eyebrow} title={faq.title} center/><div className="mx-auto mt-12 grid max-w-4xl gap-3">{faq.items.map((item, index) => <details key={item.question} className="group rounded-2xl border border-black/10 bg-white shadow-sm" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-extrabold text-brand-ink marker:hidden"><span>{item.question}</span><span className="text-2xl text-brand-green transition group-open:rotate-45">+</span></summary><p className="px-5 pb-5 leading-relaxed text-slate-600">{item.answer}</p></details>)}</div></Container></section> }
