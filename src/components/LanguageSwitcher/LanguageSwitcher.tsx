import { useLanguage } from '../../hooks/useLanguage'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  return <div className="flex items-center rounded-full border border-black/10 bg-white p-1 shadow-sm" aria-label="Language selector"><button type="button" onClick={() => setLanguage('en')} aria-pressed={language === 'en'} className={`rounded-full px-2.5 py-1.5 text-xs font-bold transition ${language === 'en' ? 'bg-brand-ink text-white' : 'text-slate-600 hover:bg-slate-100'}`}><span aria-hidden="true">🇺🇸</span> EN</button><button type="button" onClick={() => setLanguage('pt-BR')} aria-pressed={language === 'pt-BR'} className={`rounded-full px-2.5 py-1.5 text-xs font-bold transition ${language === 'pt-BR' ? 'bg-brand-ink text-white' : 'text-slate-600 hover:bg-slate-100'}`}><span aria-hidden="true">🇧🇷</span> PT</button></div>
}
