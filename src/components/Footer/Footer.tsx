import { IoLogoInstagram } from "react-icons/io";
import { useLanguage } from "../../hooks/useLanguage";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";

export function Footer() {
  const { content } = useLanguage();
  const f = content.footer;
  const n = content.navigation;

  const socialLinks = [
    {
      name: "Instagram",
      href: "#",
      icon: <IoLogoInstagram size={40}/>,
    },
  ];

  return (
    <footer className="bg-[#101415] pt-16 text-slate-300">
      <Container>
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {f.description}
            </p>
            <div className="mt-5 flex gap-2" aria-label={f.social}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="grid p-1 place-items-center rounded-full border border-white/20  font-bold hover:border-brand-cyan hover:text-brand-cyan"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-extrabold text-white">{f.contactTitle}</h3>
            <p className="mt-4 text-sm">
              <a href="tel:+17745483614">774 548 3614</a>
              <br />
              <a href="https://www.freshairsolutions.org">
                www.freshairsolutions.org
              </a>
            </p>
            <Button
              href="#quote"
              variant="secondary"
              size="sm"
              className="mt-5"
            >
              {n.quote}
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/10 py-5 text-xs text-slate-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Fresh Air Solutions. {f.rights}
          </span>
          <span>
            <a href="#">{f.privacy}</a> · <a href="#">{f.terms}</a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
