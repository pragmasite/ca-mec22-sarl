import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.services.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
            {t.services.title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl bg-card p-8 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-accent" />
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
