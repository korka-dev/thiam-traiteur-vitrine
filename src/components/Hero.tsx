"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import { heroImages } from "@/lib/images";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const SLIDE_DURATION = 5500;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-black text-cream"
    >
      {/* rotating background photos with crossfade + slow ken-burns zoom */}
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
          >
            <div
              className="absolute inset-0 transition-transform ease-linear"
              style={{
                transform: i === index ? "scale(1.1)" : "scale(1)",
                transitionDuration: `${SLIDE_DURATION + 1200}ms`,
              }}
            >
              <Image
                src={img.src}
                alt="Photo Thiam Traiteur"
                fill
                priority={i === 0}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/80" />

      {/* slide indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((img, i) => (
          <button
            key={img.src}
            aria-label={`Photo ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-gold" : "w-1.5 bg-cream/40"
            }`}
          />
        ))}
      </div>

      <motion.div
        className="relative mx-auto max-w-5xl px-6 py-16 sm:py-32 flex flex-col items-center text-center gap-5 sm:gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="contents">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-5 sm:gap-8"
          >
            <h1 className="max-w-2xl font-display text-2xl sm:text-4xl leading-tight">
              L&apos;excellence de la restauration au service des entreprises
              et des collectivités
            </h1>

            <p className="max-w-xl text-cream/85 text-sm sm:text-lg">
              <span className="sm:hidden">
                Restauration d&apos;entreprise, collectivités et événements à
                Dakar.
              </span>
              <span className="hidden sm:inline">
                Depuis plus de 20 ans, Thiam Traiteur accompagne entreprises,
                administrations, écoles et organisations dans leurs besoins de
                restauration quotidienne, tout en sublimant vos mariages,
                anniversaires et événements avec des mets raffinés.
              </span>
            </p>
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="tel:+221338435896"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold text-navy px-8 py-3.5 font-medium hover:bg-gold-light hover:scale-105 transition-all"
          >
            <PhoneIcon className="w-4 h-4" />
            Appeler maintenant
          </a>
          <a
            href="https://wa.me/221776041603"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold text-cream px-8 py-3.5 font-medium hover:bg-cream/10 hover:scale-105 transition-all"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
