import Reveal from "./Reveal";

const commitments = [
  {
    title: "Qualité",
    desc: "Nous sélectionnons avec soin nos produits et appliquons des procédures rigoureuses à chaque étape de la production.",
  },
  {
    title: "Fiabilité",
    desc: "Nous garantissons des prestations régulières et un respect strict des délais de livraison.",
  },
  {
    title: "Hygiène",
    desc: "Nos équipes appliquent les meilleures pratiques en matière de sécurité alimentaire.",
  },
  {
    title: "Satisfaction client",
    desc: "Nous construisons des relations durables fondées sur l'écoute, la proximité et la confiance.",
  },
];

export default function Commitments() {
  return (
    <section className="bg-cream py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <p className="font-display tracking-[0.3em] text-gold text-xs sm:text-sm mb-3">
            NOS ENGAGEMENTS
          </p>
          <h2 className="font-script text-5xl sm:text-6xl text-navy">
            Une exigence à chaque étape
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {commitments.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="rounded-2xl border border-gold/30 bg-white/60 p-4 sm:p-7 text-center h-full">
              <div className="mx-auto mb-2 sm:mb-4 h-px w-10 bg-gold" />
              <h3 className="font-display text-sm sm:text-lg text-navy mb-1 sm:mb-2">{c.title}</h3>
              <p className="text-xs sm:text-sm text-navy/70 leading-relaxed hidden sm:block">{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
