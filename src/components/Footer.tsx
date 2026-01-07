import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, otherLangPath, otherLang } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl mb-3">CA-MEC22</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about-us"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  {t.nav.aboutus}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg mb-4">{t.nav.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+41275652226"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  +41 27 565 22 26
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@ca-mec22.ch"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  contact@ca-mec22.ch
                </a>
              </li>
              <li className="text-primary-foreground/80">
                Rue des Artisans 9
                <br />
                3960 Sierre
              </li>
            </ul>
          </motion.div>

          {/* Language */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg mb-4">Sprache / Langue</h4>
            <Link
              to={otherLangPath}
              className="inline-block text-primary-foreground/80 hover:text-white transition-colors text-sm mb-4"
            >
              {otherLang === "fr"
                ? "Français 🇫🇷"
                : "Deutsch 🇩🇪"}
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70"
        >
          <p>
            © {currentYear} CA-MEC22 Sàrl. {t.footer.copyright}
          </p>
          <p className="text-xs mt-4 md:mt-0">
            Rue des Artisans 9, 3960 Sierre, CH
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
