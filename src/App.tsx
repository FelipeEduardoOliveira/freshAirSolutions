import { About } from './components/About/About'
import { CTA } from './components/CTA/CTA'
import { Contact } from './components/Contact/Contact'
import { FAQ } from './components/FAQ/FAQ'
import { Footer } from './components/Footer/Footer'
import { Guarantee } from './components/Guarantee/Guarantee'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { QuickHelp } from './components/QuickHelp/QuickHelp'
import { QuoteForm } from './components/QuoteForm/QuoteForm'
import { ReviewsSummary } from './components/ReviewsSummary/ReviewsSummary'
import { Stats } from './components/Stats/Stats'
import { Testimonials } from './components/Testimonials/Testimonials'
import { TrustBar } from './components/TrustBar/TrustBar'
import { LanguageProvider } from './contexts/LanguageProvider'

function App() {
  return <LanguageProvider><a href="#main-content" className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-lg bg-brand-ink px-4 py-2 text-white focus:translate-y-0">Skip to content</a><Header/><main id="main-content"><Hero/><TrustBar/><About/><Stats/><Testimonials/><ReviewsSummary/><Guarantee/><CTA/><QuoteForm/><Contact/><FAQ/><QuickHelp/></main><Footer/></LanguageProvider>
}

export default App
