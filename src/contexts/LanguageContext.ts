import { createContext } from 'react'
import type { Language, SiteContent } from '../types/content'

export interface LanguageContextValue { language: Language; content: SiteContent; setLanguage: (language: Language) => void }

export const LanguageContext = createContext<LanguageContextValue | null>(null)
