import { About } from "./components/About/About";
import { CTA } from "./components/CTA/CTA";
import { Footer } from "./components/Footer/Footer";
import { Guarantee } from "./components/Guarantee/Guarantee";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { QuickHelp } from "./components/QuickHelp/QuickHelp";
import { QuoteForm } from "./components/QuoteForm/QuoteForm";
import { LanguageProvider } from "./contexts/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Guarantee />
        <CTA />
        <QuoteForm />tsc -b && vite build
        <QuickHelp />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
