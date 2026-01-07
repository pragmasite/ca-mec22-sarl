import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about-us" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.about.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.about.title1}
            <br />
            <span className="text-accent">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80">{t.about.p1}</p>
            <p className="text-lg text-foreground/80">{t.about.p2}</p>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-serif text-accent">15+</div>
                <div className="text-sm text-muted-foreground">
                  {t.about.stat1}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-accent">500+</div>
                <div className="text-sm text-muted-foreground">
                  {t.about.stat2}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-accent">98%</div>
                <div className="text-sm text-muted-foreground">
                  {t.about.stat3}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {t.about.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg bg-background p-6 shadow-soft hover:shadow-medium transition-shadow"
              >
                <h3 className="font-serif text-lg text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/70">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
