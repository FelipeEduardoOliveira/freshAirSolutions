import { useLanguage } from '../../hooks/useLanguage'
import { Container } from '../Container/Container'

export function Stats() { const { content } = useLanguage(); return <section className="pb-20 sm:pb-28"><Container><div className="grid overflow-hidden rounded-3xl bg-gradient-to-r from-brand-green-dark to-brand-green text-white shadow-2xl sm:grid-cols-2 lg:grid-cols-4">{content.stats.map((stat, index) => <div key={stat.label} className={`p-8 text-center ${index < 3 ? 'border-b border-white/20 sm:border-r lg:border-b-0' : ''}`}><strong className="block text-4xl font-black tracking-tight sm:text-5xl">{stat.value}</strong><span className="mt-2 block text-sm font-bold text-white/80">{stat.label}</span></div>)}</div></Container></section> }
