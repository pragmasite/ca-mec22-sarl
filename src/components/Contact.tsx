import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 27 565 22 26",
      href: "tel:+41275652226",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "contact@ca-mec22.ch",
      href: "mailto:contact@ca-mec22.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Rue des Artisans 9, 3960 Sierre",
      href: "https://maps.google.com/?q=46.290689,7.548464",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-6">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.icon === MapPin ? "_blank" : undefined}
                  rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-start gap-6 rounded-lg bg-background p-6 shadow-soft hover:shadow-medium transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-primary mb-1">
                      {info.label}
                    </h3>
                    <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-8 border-t"
            >
              <Button asChild size="lg" className="w-full gap-2">
                <a href="tel:+41275652226">
                  <Phone className="h-5 w-5" />
                  {t.contact.callNow}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-medium h-96 lg:h-full min-h-96"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.019076859046!2d7.548464!3d46.290689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x489300d7b1f1f1f1%3A0x0!2sCA-MEC22%20S%C3%A0rl!5e0!3m2!1sde!2sch!4v1234567890"
              title="CA-MEC22 Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
