"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { dishes } from "@/lib/images";

export default function Gallery() {
  return (
    <section id="galerie" className="bg-cream py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <p className="font-display tracking-[0.3em] text-gold text-xs sm:text-sm mb-3">
            NOTRE CARTE
          </p>
          <h2 className="font-script text-5xl sm:text-6xl text-navy">
            Un aperçu de nos plats
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {dishes.map((d, i) => (
            <Reveal
              key={d.name}
              delay={i * 0.08}
              className={i >= 4 ? "hidden sm:block" : ""}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-2xl border border-gold/20 hover:border-gold hover:shadow-xl hover:shadow-navy/15 transition-all"
              >
                <div className="relative aspect-square overflow-hidden bg-cream">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 400px"
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <p className="bg-white/70 py-2 sm:py-3 text-center font-display text-navy text-xs sm:text-base tracking-wide px-2">
                  {d.name}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
