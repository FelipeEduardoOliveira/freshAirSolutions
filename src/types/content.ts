export type Language = 'en' | 'pt-BR'

export interface SiteContent {
  navigation: { about: string; reviews: string; faq: string; contact: string; quote: string }
  hero: { eyebrow: string; title: string; highlight: string; text: string; primary: string; secondary: string; badge: string; badgeText: string; imageAlt: string }
  trust: string[]
  about: { eyebrow: string; title: string; paragraphs: string[]; imageAlt: string }
  stats: { value: string; label: string }[]
  testimonials: { eyebrow: string; title: string; text: string; items: { quote: string; name: string; meta: string }[] }
  reviews: { eyebrow: string; title: string; score: string; label: string; total: string; recommendation: string }
  guarantee: { eyebrow: string; title: string; text: string; note: string }
  cta: { eyebrow: string; title: string; text: string; primary: string; secondary: string }
  form: { eyebrow: string; title: string; text: string; name: string; email: string; phone: string; service: string; property: string; message: string; contactMethod: string; phoneOption: string; emailOption: string; submit: string; services: string[]; properties: string[]; select: string }
  contact: { eyebrow: string; title: string; phone: string; website: string; hours: string; hoursValue: string; area: string; areaValue: string }
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] }
  quickHelp: { title: string; text: string; button: string }
  footer: { description: string; navigation: string; servicesTitle: string; contactTitle: string; privacy: string; terms: string; rights: string; social: string }
}
