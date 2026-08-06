"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Calendar, User, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function QuickWidget() {
  const [tab, setTab] = useState<"book" | "whatsapp">("book");

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-900">
      <div className="flex gap-2 mb-6 p-1 bg-slate-100 rounded-lg">
        <button 
          onClick={() => setTab("book")}
          className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${tab === "book" ? "bg-white shadow text-primary" : "text-slate-600 hover:text-slate-700"}`}
        >
          Book Online
        </button>
        <button 
          onClick={() => setTab("whatsapp")}
          className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${tab === "whatsapp" ? "bg-[#25D366] shadow text-white" : "text-slate-600 hover:text-slate-700"}`}
        >
          WhatsApp
        </button>
      </div>

      {tab === "book" ? (
        <div>
          <h3 className="text-xl font-bold mb-2">Online Consultation</h3>
          <p className="text-slate-600 mb-6 text-sm">Fast-track your appointment with our specialists.</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Select Specialist</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <select className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none appearance-none bg-white">
                  <option value="">Choose Doctor...</option>
                  <option value="laparoscopic">Dr. Waseem Abbas Chaudhary (Laparoscopic)</option>
                  <option value="gynecology">Dr. Sehar Waseem Abbas Chaudhary (Gynecology)</option>
                </select>
              </div>
            </div>
            
            <Link href="/appointments" className="block w-full">
              <Button className="w-full mt-2" size="lg">Continue Booking <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-bold mb-2">Chat with Attendant</h3>
          <p className="text-slate-600 mb-6 text-sm">Have a quick question or need urgent help? Message us directly.</p>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
              <p className="text-sm text-green-800 mb-2 font-medium">Average Response Time:</p>
              <p className="text-2xl font-bold text-green-600">&lt; 5 mins</p>
            </div>
            <a href="https://wa.me/923368775530?text=I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button className="w-full mt-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white border-0" size="lg">
                Open WhatsApp <MessageCircle className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
