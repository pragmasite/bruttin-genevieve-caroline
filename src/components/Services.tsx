import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="prestations" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">{t.services.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">{t.services.title}</h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">{t.services.description}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background border border-border rounded-lg p-8 hover:shadow-soft transition-shadow"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
