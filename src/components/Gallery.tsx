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
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square overflow-hidden rounded-2xl"
              >
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                <p className="absolute bottom-3 sm:bottom-5 inset-x-0 text-center font-display text-cream text-xs sm:text-base tracking-wide px-2">
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
