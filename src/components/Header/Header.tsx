import { useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'
import { Logo } from '../Logo/Logo'

export function Header() {
  const { content } = useLanguage()
  const [open, setOpen] = useState(false)
  const links = [[content.navigation.about, '#about'], [content.navigation.reviews, '#reviews'], [content.navigation.faq, '#faq'], [content.navigation.contact, '#contact']]
  return <header className="sticky top-0 z-50 border-b border-black/8 bg-white/95 backdrop-blur-xl"><Container><div className="flex min-h-20 items-center justify-between gap-4"><Logo /><nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">{links.map(([label, href]) => <a key={href} href={href} className="text-sm font-bold text-slate-600 transition hover:text-brand-green-dark">{label}</a>)}</nav><div className="hidden items-center gap-3 sm:flex"><LanguageSwitcher /><Button href="#quote" size="sm">{content.navigation.quote}</Button></div><button type="button" className="grid size-11 place-items-center rounded-xl border border-black/10 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><span className="text-xl">{open ? '×' : '☰'}</span></button></div>{open && <div className="grid gap-2 border-t border-black/8 py-4 lg:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 font-bold hover:bg-brand-green/8">{label}</a>)}<div className="mt-2 flex flex-wrap items-center gap-3 sm:hidden"><LanguageSwitcher /><Button href="#quote" size="sm">{content.navigation.quote}</Button></div></div>}</Container></header>
}
