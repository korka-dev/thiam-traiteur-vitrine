"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { MenuIcon, CloseIcon, PhoneIcon } from "./icons";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#tournesol", label: "Tournesol" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-gold/30"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-24 sm:h-28">
        <a href="#accueil" className="shrink-0">
          <Logo className="w-24 sm:w-32 h-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-display text-sm tracking-wide uppercase text-navy">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+221338435896"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-navy text-cream px-5 py-2.5 text-sm font-medium hover:bg-gold hover:text-navy transition-colors"
        >
          <PhoneIcon className="w-4 h-4" />
          33 843 58 96
        </a>

        <button
          aria-label="Ouvrir le menu"
          className="md:hidden text-navy"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-cream border-t border-gold/30 px-6 py-4 flex flex-col gap-4 font-display uppercase text-sm tracking-wide text-navy">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1">
              {l.label}
            </a>
          ))}
          <a
            href="tel:+221338435896"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy text-cream px-5 py-3 text-sm font-medium"
          >
            <PhoneIcon className="w-4 h-4" />
            Appeler
          </a>
        </nav>
      )}
    </motion.header>
  );
}
