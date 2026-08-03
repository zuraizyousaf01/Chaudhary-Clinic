import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const waLink = `https://wa.me/923001775530?text=Hello%20Chaudhary%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20the%20available%20OPD%20time%20slots.`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href={waLink} 
        target="_blank" 
        rel="noopener noreferrer"
        title="Chat with Clinic Attendant (+92 300 1775530)"
        className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:hidden"></span>
        <MessageCircle className="h-7 w-7 relative z-10" />
      </a>
    </div>
  );
}
