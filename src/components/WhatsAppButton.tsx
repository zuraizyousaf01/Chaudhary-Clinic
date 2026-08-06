import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const waLink = `https://wa.me/923368775530?text=I%20would%20like%20to%20book%20an%20appointment`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href={waLink} 
        target="_blank" 
        rel="noopener noreferrer"
        title="Chat with Clinic Attendant (+92 336 8775530)"
        className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:hidden"></span>
        <MessageCircle className="h-7 w-7 relative z-10" />
      </a>
    </div>
  );
}
