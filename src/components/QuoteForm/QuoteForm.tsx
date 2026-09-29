import { useLanguage } from "../../hooks/useLanguage";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Field } from "../Field/Field";
import { useQuoteForm } from "../../hooks/useQuoteForm";

export function QuoteForm() {
  const { content } = useLanguage();
  const { handleSubmit, status } = useQuoteForm();
  const f = content.form;
  return (
    <section id="quote" className="bg-[#eafaff] py-20 sm:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <SectionTitle eyebrow={f.eyebrow} title={f.title} text={f.text} />
        <form
          onSubmit={handleSubmit}
          className="grid gap-5 rounded-3xl bg-white p-6 shadow-2xl sm:grid-cols-2 sm:p-9"
        >
          <Field label={f.name} id="name">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="input "
            />
          </Field>
          <Field label={f.email} id="email">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="input"
            />
          </Field>
          <Field label={f.phone} id="phone">
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className="input"
            />
          </Field>
          <Field label={f.message} id="message" full>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="input resize-y"
            />
          </Field>
          <fieldset className="sm:col-span-2">
            <legend className="text-sm font-extrabold text-brand-ink">
              {f.contactMethod}
            </legend>
            <div className="mt-3 flex flex-wrap gap-5">
              <label className="flex items-center gap-2 font-medium">
                <input
                  type="radio"
                  name="contact-method"
                  value="phone"
                  defaultChecked
                  className="accent-brand-green"
                />
                {f.phoneOption}
              </label>
              <label className="flex items-center gap-2 font-medium">
                <input
                  type="radio"
                  name="contact-method"
                  value="email"
                  className="accent-brand-green"
                />
                {f.emailOption}
              </label>
            </div>
          </fieldset>
          <Button
            type="submit"
            size="lg"
            className="sm:col-span-2"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : f.submit}
          </Button>
        </form>
      </Container>
    </section>
  );
}
