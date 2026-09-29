import { useLanguage } from "../../hooks/useLanguage";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";

export function Header() {
  const { content } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/95 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Logo />

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3 sm:flex">
              <Button href="#quote" size="sm">
                {content.navigation.quote}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
