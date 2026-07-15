"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { services } from "@/lib/images";

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-display tracking-[0.3em] text-gold text-xs sm:text-sm mb-3">
            NOS PRESTATIONS ÉVÉNEMENTIELLES
          </p>
          <h2 className="font-script text-5xl sm:text-6xl text-navy">
            Un traiteur pour chaque occasion
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-2xl border border-gold/30 bg-white/60 hover:border-gold hover:shadow-xl hover:shadow-navy/10 transition-all h-full"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                </div>
                <div className="p-7 text-center">
                  <div className="mx-auto mb-4 h-px w-10 bg-gold" />
                  <h3 className="font-display text-lg text-navy mb-2">{s.title}</h3>
                  <p className="text-sm text-navy/70 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
