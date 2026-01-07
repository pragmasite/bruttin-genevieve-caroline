import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">{t.contact.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">{t.contact.description}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-start mb-16"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">{t.contact.cta}</h3>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-primary mt-1" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t.contact.phone}</p>
                <a href="tel:+41788348082" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                  +41 78 834 80 82
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-primary mt-1" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t.contact.email}</p>
                <a
                  href="mailto:genevieve.bruttin@hotmail.com"
                  className="text-lg font-bold text-foreground hover:text-primary transition-colors break-all"
                >
                  genevieve.bruttin@hotmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary mt-1" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t.contact.address}</p>
                <p className="text-lg font-bold text-foreground">
                  Grand-Rue 4
                  <br />
                  1180 Rolle
                  <br />
                  Suisse
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="tel:+41788348082">{t.contact.callNow}</a>
              </Button>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div variants={itemVariants} className="h-96 rounded-lg overflow-hidden shadow-soft">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.7463449825935!2d6.341403!3d46.460638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e7c4e4e4e4e4d%3A0x0!2sGrand-Rue%204%2C%201180%20Rolle!5e0!3m2!1sfr!2sch!4v1234567890"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
