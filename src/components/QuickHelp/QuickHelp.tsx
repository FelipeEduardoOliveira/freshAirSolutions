import { useLanguage } from '../../hooks/useLanguage'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'

export function QuickHelp() { const { content } = useLanguage(); const q = content.quickHelp; return <aside className="bg-brand-green py-6 text-white" aria-label={q.title}><Container className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"><div><strong className="text-xl">{q.title}</strong><p className="mt-1 text-white/80">{q.text}</p></div><Button href="tel:+15086154433" variant="secondary">{q.button}</Button></Container></aside> }
