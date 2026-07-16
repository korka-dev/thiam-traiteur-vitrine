"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { LogoBadge } from "./Logo";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import { heroImage } from "@/lib/images";

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

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-navy text-cream"
    >
      {/* background photo: fade + zoom entrance, then slow continuous ken-burns drift */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{
          opacity: { duration: 1.4, ease: "easeOut" },
          scale: { duration: 2.2, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
        >
          <Image
            src={heroImage}
            alt="Plat gastronomique dressé par Thiam Traiteur"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/55 to-navy-dark/90" />

      <motion.div
        className="relative mx-auto max-w-5xl px-6 py-16 sm:py-32 flex flex-col items-center text-center gap-5 sm:gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          animate={{ y: [0, -8, 0] }}
          transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        >
          <LogoBadge width={190} />
        </motion.div>

        <motion.div variants={item} className="divider-leaf text-gold w-full max-w-xs" />

        <motion.p variants={item} className="font-display tracking-[0.3em] text-gold text-xs sm:text-sm">
          SAVEUR &nbsp;•&nbsp; QUALITÉ &nbsp;•&nbsp; EXCELLENCE
        </motion.p>

        <motion.h1 variants={item} className="max-w-2xl font-display text-2xl sm:text-4xl leading-tight">
          L&apos;excellence de la restauration au service des entreprises et
          des collectivités
        </motion.h1>

        <motion.p variants={item} className="max-w-xl text-cream/85 text-sm sm:text-lg">
          <span className="sm:hidden">
            Restauration d&apos;entreprise, collectivités et événements à Dakar.
          </span>
          <span className="hidden sm:inline">
            Depuis plus de 20 ans, Thiam Traiteur accompagne entreprises,
            administrations, écoles et organisations dans leurs besoins de
            restauration quotidienne, tout en sublimant vos mariages,
            anniversaires et événements avec des mets raffinés.
          </span>
        </motion.p>

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
