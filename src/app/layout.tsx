import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Choudhury Clinic",
    default: "Choudhury Clinic - Advanced Laparoscopic & Gynecological Care in Multan",
  },
  description: "Advanced Laparoscopic & Gynecological Care by Dr. Waseem Abbas Chaudhary and Dr. Sehar Waseem. Specializing in minimally invasive surgery, maternity care, and general gynecology in Multan.",
  keywords: ["Laparoscopic Surgery", "Gynecologist", "Maternity Clinic Multan", "Gallbladder Removal", "Hernia Repair", "Dr. Waseem Abbas", "Dr. Sehar Waseem"],
  authors: [{ name: "Choudhury Clinic" }],
  creator: "Choudhury Clinic",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://choudhuryclinic.com",
    siteName: "Choudhury Clinic",
    title: "Choudhury Clinic - Advanced Laparoscopic & Gynecological Care",
    description: "Advanced Laparoscopic & Gynecological Care in Multan. Providing state-of-the-art surgical facilities and compassionate maternity care.",
    images: [
      {
        url: "/images/doctors/opd.webp",
        width: 1200,
        height: 630,
        alt: "Choudhury Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Choudhury Clinic - Advanced Laparoscopic & Gynecological Care",
    description: "Advanced Laparoscopic & Gynecological Care in Multan. Providing state-of-the-art surgical facilities and compassionate maternity care.",
    images: ["/images/doctors/opd.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Choudhury Clinic",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ground Floor, Khan Medical City, Hall # 1, Nishtar Rd, Al Rahim Colony",
                "addressLocality": "Multan",
                "postalCode": "60000",
                "addressCountry": "PK"
              },
              "telephone": "+923368775530",
              "url": "https://choudhuryclinic.com",
              "medicalSpecialty": [
                "Laparoscopic Surgery",
                "Gynecology",
                "Maternity Care",
                "General Surgery"
              ],
              "employee": [
                {
                  "@type": "Physician",
                  "name": "Dr. Waseem Abbas Chaudhary",
                  "medicalSpecialty": "General and Laparoscopic Surgery"
                },
                {
                  "@type": "Physician",
                  "name": "Dr. Sehar Waseem Abbas Chaudhary",
                  "medicalSpecialty": "Obstetrics & Gynecology"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
