import Image from "next/image";
import Reveal from "./Reveal";
import { teamImage } from "@/lib/images";

const stats = [
  { value: "20+", label: "ans d'expérience" },
  { value: "30+", label: "collaborateurs qualifiés" },
  { value: "1", label: "centrale de production moderne" },
];

const savoirFaire = [
  "La restauration d'entreprise",
  "La restauration collective",
  "La livraison de repas",
  "Les prestations traiteur pour événements",
  "La gestion de restaurants d'entreprise",
  "La production et la distribution de repas à grande échelle",
];

export default function About() {
  return (
    <section id="apropos" className="bg-cream py-16 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="font-display tracking-[0.3em] text-gold text-xs sm:text-sm mb-3">
            À PROPOS
          </p>
          <h2 className="font-script text-5xl sm:text-6xl text-navy mb-6">
            Notre histoire
          </h2>
          <p className="text-navy/80 leading-relaxed">
            Depuis plus de 20 ans, Thiam Traiteur accompagne les entreprises,
            administrations, établissements scolaires et organisations dans
            leurs besoins de restauration quotidienne.
          </p>
          <p className="text-navy/80 leading-relaxed mt-4 hidden sm:block">
            Grâce à une équipe de plus de 30 collaborateurs et à une centrale
            de production moderne, nous préparons chaque jour des repas
            savoureux, équilibrés et conformes aux plus hauts standards de
            qualité et d&apos;hygiène. Notre mission est de fournir des
            solutions de restauration fiables, adaptées aux besoins de nos
            clients et capables d&apos;accompagner leur croissance.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden mb-10 sm:mb-14">
          <Image
            src={teamImage}
            alt="L'équipe Thiam Traiteur"
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-10 sm:mb-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl sm:text-4xl text-navy">{s.value}</p>
              <p className="text-xs sm:text-sm text-navy/60 mt-1">{s.label}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="hidden sm:block">
          <div className="rounded-2xl bg-navy text-cream p-8 sm:p-10">
            <p className="font-display tracking-[0.3em] text-gold text-xs sm:text-sm mb-6 text-center">
              NOTRE SAVOIR-FAIRE
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {savoirFaire.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <p className="text-sm text-cream/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
