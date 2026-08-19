import type { Metadata } from "next";
import { Inter, Prata } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const prata = Prata({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://choudharyclinic.com"),
  title: {
    template: "%s | Choudhary Clinic",
    default: "Choudhary Clinic - Advanced Laparoscopic & Gynecological Care in Multan",
  },
  description: "Advanced Laparoscopic & Gynecological Care by Dr. Waseem Abbas Chaudhary and Dr. Sehar Waseem. Specializing in minimally invasive surgery, maternity care, and general gynecology in Multan.",
  authors: [{ name: "Choudhary Clinic" }],
  creator: "Choudhary Clinic",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Choudhary Clinic",
    title: "Choudhary Clinic - Advanced Laparoscopic & Gynecological Care",
    description: "Advanced Laparoscopic & Gynecological Care in Multan. Providing state-of-the-art surgical facilities and compassionate maternity care.",
    images: [
      {
        url: "/images/doctors/opd.webp",
        width: 1200,
        height: 630,
        alt: "Choudhary Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Choudhary Clinic - Advanced Laparoscopic & Gynecological Care",
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
      className={`${inter.variable} ${prata.variable} font-sans h-full antialiased scroll-smooth`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-slate-50">
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
              "name": "Choudhary Clinic",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ground Floor, Khan Medical City, Hall # 1, Nishtar Rd, Al Rahim Colony",
                "addressLocality": "Multan",
                "postalCode": "60000",
                "addressCountry": "PK"
              },
              "telephone": "+923368775530",
              "url": "https://choudharyclinic.com",
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
