import { PinIcon, PhoneIcon, MailIcon } from "./icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-10 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-6 sm:mb-16">
          <p className="font-display tracking-[0.3em] text-gold text-xs sm:text-sm mb-2 sm:mb-3">
            CONTACT
          </p>
          <h2 className="font-script text-3xl sm:text-6xl text-navy">
            Parlons de votre projet
          </h2>
          <p className="text-navy/70 text-sm mt-2 sm:mt-4 hidden sm:block">
            Demandez votre devis et découvrez nos solutions de restauration
            adaptées à votre organisation.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-stretch">
          <Reveal className="rounded-2xl bg-navy text-cream p-5 sm:p-10 flex flex-col gap-4 sm:gap-8 justify-center">
            <div className="flex items-start gap-4">
              <span className="shrink-0 w-11 h-11 rounded-full border border-gold flex items-center justify-center text-gold">
                <PinIcon className="w-5 h-5" />
              </span>
              <div>
                <p className="font-display tracking-wide">
                  Point E, Rue de Kaolack
                </p>
                <p className="text-cream/70 text-sm">Villa N°9 — Dakar</p>
                <p className="text-cream/50 text-xs mt-1 hidden sm:block">
                  Tournesol Restaurant : Point E, en face de la Piscine
                  Olympique
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 w-11 h-11 rounded-full border border-gold flex items-center justify-center text-gold">
                <PhoneIcon className="w-5 h-5" />
              </span>
              <div>
                <p className="text-gold text-xs tracking-[0.2em] mb-1">
                  NUMÉROS
                </p>
                <p className="text-cream/90 text-sm space-x-2">
                  <a href="tel:+221338435896" className="hover:text-gold">33 843 58 96</a>
                  <span className="text-cream/40">|</span>
                  <a href="tel:+221776041603" className="hover:text-gold">77 604 16 03</a>
                  <span className="text-cream/40">|</span>
                  <a href="tel:+221784686363" className="hover:text-gold">78 468 63 63</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 w-11 h-11 rounded-full border border-gold flex items-center justify-center text-gold">
                <MailIcon className="w-5 h-5" />
              </span>
              <div>
                <p className="text-gold text-xs tracking-[0.2em] mb-1">MAIL</p>
                <a
                  href="mailto:thiamtraiteur@gmail.com"
                  className="text-cream/90 text-sm hover:text-gold"
                >
                  thiamtraiteur@gmail.com
                </a>
              </div>
            </div>

            <div className="divider-leaf text-gold hidden sm:flex" />

            <a
              href="https://wa.me/221776041603"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold text-navy px-6 py-3 font-medium hover:bg-gold-light transition-colors"
            >
              Écrire sur WhatsApp
            </a>
          </Reveal>

          <Reveal delay={0.15} className="rounded-2xl overflow-hidden border border-gold/30 min-h-[320px] hidden sm:block">
            <iframe
              title="Localisation Thiam Traiteur - Point E, Dakar"
              src="https://www.google.com/maps?q=Point+E,+Rue+de+Kaolack,+Dakar,+Senegal&output=embed"
              className="w-full h-full min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
