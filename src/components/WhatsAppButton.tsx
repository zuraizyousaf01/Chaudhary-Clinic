"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const waLink = `https://wa.me/923368775530?text=I%20would%20like%20to%20book%20an%20appointment`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={waLink} 
        target="_blank" 
        rel="noopener noreferrer"
        title="Chat with Clinic Attendant (+92 336 8775530)"
        className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:hidden"></span>
        <MessageCircle className="h-7 w-7 relative z-10" />
      </motion.a>
    </div>
  );
}
