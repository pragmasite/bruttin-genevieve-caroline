import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-3">Bruttin</h3>
            <p className="text-primary-foreground/80 text-sm">{t.footer.tagline}</p>
            <p className="text-primary-foreground/60 text-sm mt-2">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#a-propos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#prestations" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galerie" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#horaires" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">{t.contact.label}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+41788348082" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +41 78 834 80 82
                </a>
              </li>
              <li>
                <a href="mailto:genevieve.bruttin@hotmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all">
                  genevieve.bruttin@hotmail.com
                </a>
              </li>
              <li className="text-primary-foreground/80">
                Grand-Rue 4<br />
                1180 Rolle, CH
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/60">
            © {currentYear} Geneviève-Caroline Bruttin. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
