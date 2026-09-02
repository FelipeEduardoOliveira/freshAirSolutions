import { useLanguage } from '../../hooks/useLanguage'
import { Container } from '../Container/Container'

export function TrustBar() { const { content } = useLanguage(); return <section className="bg-brand-ink text-white" aria-label="Areas of expertise"><Container><div className="grid grid-cols-2 divide-white/15 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">{content.trust.map((item, index) => <div key={item} className={`px-3 py-5 text-center text-xs font-extrabold uppercase tracking-wide ${index === content.trust.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}>{item}</div>)}</div></Container></section> }
