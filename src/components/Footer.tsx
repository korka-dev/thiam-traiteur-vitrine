import { LogoBadge } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-cream/70 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-8">
        <LogoBadge width={150} />

        <div className="divider-leaf text-gold w-full max-w-xs" />

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-display text-xs tracking-[0.2em] uppercase">
          <a href="#accueil" className="hover:text-gold">Accueil</a>
          <a href="#apropos" className="hover:text-gold">À propos</a>
          <a href="#services" className="hover:text-gold">Services</a>
          <a href="#tournesol" className="hover:text-gold">Tournesol</a>
          <a href="#galerie" className="hover:text-gold">Galerie</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </nav>

        <p className="text-xs text-cream/40 text-center">
          Point E, Rue de Kaolack, Villa N°9 — Dakar &nbsp;•&nbsp;
          thiamtraiteur@gmail.com
        </p>

        <p className="text-xs text-cream/30">
          © {new Date().getFullYear()} Thiam Traiteur. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
