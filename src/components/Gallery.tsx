import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/images/img-1.jpg", alt: lang === "de" ? "Handgelenk-Verdichter" : "Compresseur portable" },
    { src: "/images/img-2.jpg", alt: lang === "de" ? "Benzin-Gebläse" : "Souffleur essence" },
    { src: "/images/img-3.jpg", alt: lang === "de" ? "Werkstatt-Reparatur" : "Réparation en atelier" },
    { src: "/images/img-4.jpg", alt: lang === "de" ? "Mitarbeiter-Beratung" : "Conseil professionnel" },
    { src: "/images/img-5.jpg", alt: lang === "de" ? "Gartenmaschine-Service" : "Service de tondeuse" },
    { src: "/images/img-6.jpg", alt: lang === "de" ? "Motorsägen-Wartung" : "Entretien tronçonneuse" },
    { src: "/images/img-7.jpg", alt: lang === "de" ? "Schneeräumer-Reparatur" : "Réparation chasse-neige" },
    { src: "/images/img-8.jpg", alt: lang === "de" ? "Rasentraktor-Service" : "Service tondeuse autoportée" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-background shadow-medium"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-video"
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <p className="text-white font-medium text-lg">
                    {images[currentIndex].alt}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 p-3 text-white hover:bg-white/30 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 p-3 text-white hover:bg-white/30 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>

          {/* Indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-border w-2 hover:bg-muted-foreground"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-sm text-muted-foreground">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
