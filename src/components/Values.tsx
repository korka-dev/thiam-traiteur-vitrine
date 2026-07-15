import Reveal from "./Reveal";

const values = [
  {
    title: "Saveur",
    desc: "Des recettes authentiques, sénégalaises et internationales, préparées avec des produits frais et sélectionnés avec soin.",
  },
  {
    title: "Qualité",
    desc: "Une exigence constante dans le choix des ingrédients, la préparation et la présentation de chaque plat.",
  },
  {
    title: "Excellence",
    desc: "Un service attentionné et professionnel, du premier contact jusqu'au dernier invité servi.",
  },
];

export default function Values() {
  return (
    <section id="valeurs" className="bg-navy text-cream py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center mb-16">
          <p className="font-display tracking-[0.3em] text-gold text-xs sm:text-sm mb-3">
            NOTRE ENGAGEMENT
          </p>
          <h2 className="font-script text-5xl sm:text-6xl">
            Saveur, Qualité, Excellence
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-10 text-center">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.12} className="flex flex-col items-center">
              <span className="font-display text-gold text-sm mb-3">
                0{i + 1}
              </span>
              <h3 className="font-display text-xl mb-3 tracking-wide">{v.title}</h3>
              <div className="h-px w-10 bg-gold mb-4" />
              <p className="text-sm text-cream/75 leading-relaxed max-w-xs">
                {v.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
