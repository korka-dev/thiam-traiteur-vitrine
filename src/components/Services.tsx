"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { services } from "@/lib/images";

export default function Services() {
  return (
    <section id="services" className="bg-cream py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <p className="font-display tracking-[0.3em] text-gold text-xs sm:text-sm mb-3">
            NOS PRESTATIONS ÉVÉNEMENTIELLES
          </p>
          <h2 className="font-script text-5xl sm:text-6xl text-navy">
            Un traiteur pour chaque occasion
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 items-start">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-2xl border border-gold/30 bg-white/60 hover:border-gold hover:shadow-xl hover:shadow-navy/15 transition-all"
              >
                <div className="overflow-hidden">
                  <motion.div whileHover={{ scale: 1.12 }} transition={{ duration: 0.5, ease: "easeOut" }}>
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={s.width}
                      height={s.height}
                      sizes="(max-width: 768px) 50vw, 400px"
                      className="w-full h-auto block"
                    />
                  </motion.div>
                </div>
                <div className="p-3 sm:p-7 text-center">
                  <div className="mx-auto mb-2 sm:mb-4 h-px w-10 bg-gold hidden sm:block" />
                  <h3 className="font-display text-xs sm:text-lg text-navy mb-0 sm:mb-2 leading-tight">{s.title}</h3>
                  <p className="text-sm text-navy/70 leading-relaxed hidden sm:block">{s.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
