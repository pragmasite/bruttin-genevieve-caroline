import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
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
    <section id="a-propos" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">{t.about.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.about.title1}
            <br />
            <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">{t.about.p1}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.about.p2}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <div className="font-serif text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">{t.about.stat1}</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <div className="font-serif text-3xl font-bold text-primary mb-2">1000+</div>
              <p className="text-sm text-muted-foreground">{t.about.stat2}</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <div className="font-serif text-3xl font-bold text-primary mb-2">★★★★★</div>
              <p className="text-sm text-muted-foreground">{t.about.stat3}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {t.about.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-soft transition-shadow"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
