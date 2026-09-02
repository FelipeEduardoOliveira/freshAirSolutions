import { useMemo, useState, type ReactNode } from 'react'
import { translations } from '../i18n'
import type { Language } from '../types/content'
import { LanguageContext } from './LanguageContext'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const value = useMemo(() => ({ language, content: translations[language], setLanguage }), [language])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
