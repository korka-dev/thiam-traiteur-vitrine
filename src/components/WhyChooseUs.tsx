import Reveal from "./Reveal";
import { CheckIcon } from "./icons";

const reasons = [
  "Plus de 20 ans d'expérience",
  "Plus de 30 collaborateurs qualifiés",
  "Une centrale de production moderne",
  "Une forte capacité de production",
  "Des solutions adaptées aux entreprises et collectivités",
  "Un service de livraison performant",
  "Une expertise reconnue dans la restauration collective",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-navy text-cream py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center mb-14">
          <p className="font-display tracking-[0.3em] text-gold text-xs sm:text-sm mb-3">
            POURQUOI NOUS CHOISIR
          </p>
          <h2 className="font-script text-5xl sm:text-6xl">
            Pourquoi choisir Thiam Traiteur ?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <li key={r} className="flex items-center gap-3 rounded-xl bg-cream/5 border border-gold/20 px-5 py-4">
                <span className="shrink-0 w-6 h-6 rounded-full bg-gold text-navy flex items-center justify-center">
                  <CheckIcon className="w-3.5 h-3.5" />
                </span>
                <span className="text-sm text-cream/90">{r}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
