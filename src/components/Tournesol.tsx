"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { tournesolImage } from "@/lib/images";

const points = [
  "Des repas sur place",
  "Des plats à emporter",
  "Un service de livraison",
  "Une cuisine généreuse inspirée des saveurs locales et internationales",
];

export default function Tournesol() {
  return (
    <section id="tournesol" className="bg-cream py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-6 sm:gap-10 items-center">
        <Reveal>
          <p className="font-display tracking-[0.3em] text-gold text-xs sm:text-sm mb-3">
            NOTRE RESTAURANT
          </p>
          <h2 className="font-script text-4xl sm:text-5xl text-navy mb-6">
            Tournesol Restaurant
          </h2>
          <p className="text-navy/80 leading-relaxed mb-4">
            Tournesol est l&apos;établissement de restauration exploité par
            Thiam Traiteur au Point E, en face de la Piscine Olympique.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6 hidden sm:block">
            Ouvert au grand public, il propose :
          </p>
          <ul className="space-y-3 mb-6 hidden sm:block">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-navy/80">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <p className="text-sm text-navy/60 italic hidden sm:block">
            Tournesol bénéficie directement de l&apos;expertise et du
            savoir-faire développés par Thiam Traiteur depuis plus de deux
            décennies.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-2xl border border-gold/20"
          >
            <Image
              src={tournesolImage.src}
              alt="Tournesol Restaurant, Point E, Dakar"
              width={tournesolImage.width}
              height={tournesolImage.height}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="w-full h-auto block"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
