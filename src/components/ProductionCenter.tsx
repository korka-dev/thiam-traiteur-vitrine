"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { productionImage } from "@/lib/images";

const points = [
  "Produire de grands volumes de repas chaque jour",
  "Assurer une qualité constante",
  "Respecter les normes d'hygiène et de sécurité alimentaire",
  "Répondre efficacement aux besoins des entreprises et collectivités",
];

export default function ProductionCenter() {
  return (
    <section className="bg-navy text-cream py-14 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-6 sm:gap-10 items-center">
        <Reveal className="order-2 lg:order-1">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-2xl"
          >
            <Image
              src={productionImage.src}
              alt="Centrale de production de Thiam Traiteur"
              width={productionImage.width}
              height={productionImage.height}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="w-full h-auto block"
            />
          </motion.div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <p className="font-display tracking-[0.3em] text-gold text-xs sm:text-sm mb-3">
            NOTRE INFRASTRUCTURE
          </p>
          <h2 className="font-script text-4xl sm:text-5xl mb-6">
            Une centrale de production moderne
          </h2>
          <p className="text-cream/80 leading-relaxed mb-6">
            Afin de garantir qualité, régularité et capacité de production,
            Thiam Traiteur dispose d&apos;une centrale de production dédiée à
            la préparation des repas.
          </p>
          <ul className="space-y-3 hidden sm:block">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-cream/90">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
