import { useLanguage } from "../../hooks/useLanguage";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export function CTA() {
  const { content } = useLanguage();
  const c = content.cta;
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 sm:py-28">
      <span className="absolute -right-20 -top-28 size-80 rounded-full border-2 border-brand-cyan/25" />
      <Container className="relative">
        <SectionTitle eyebrow={c.eyebrow} title={c.title} text={c.text} light />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#quote" variant="secondary" size="lg">
            {c.primary}
          </Button>
          <Button href="tel:17745483614" variant="light" size="lg">
            {c.secondary}
          </Button>
        </div>
      </Container>
    </section>
  );
}
