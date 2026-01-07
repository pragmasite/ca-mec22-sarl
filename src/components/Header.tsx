import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about-us", label: t.nav.aboutus },
    { href: "#services", label: t.nav.services },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#hours", label: t.nav.hours },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex flex-col">
          <span
            className={`font-serif text-xl font-semibold transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            CA-MEC22
          </span>
          <span
            className={`text-xs tracking-widest transition-colors ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-accent"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent"
            }`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          <Button asChild size="sm" className="gap-2">
            <a href="tel:+41275652226">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X
              className={`h-6 w-6 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            />
          ) : (
            <Menu
              className={`h-6 w-6 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-border pt-4">
              <Link
                to={otherLangPath}
                className="flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors mb-4"
              >
                <Globe className="h-4 w-4" />
                {otherLang.toUpperCase()}
              </Link>
              <Button asChild size="sm" className="w-full gap-2">
                <a href="tel:+41275652226">
                  <Phone className="h-4 w-4" />
                  {t.nav.call}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
