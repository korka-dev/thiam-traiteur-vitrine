"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/221776041603"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <WhatsAppIcon className="relative w-7 h-7" />
    </motion.a>
  );
}
