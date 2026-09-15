"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
