import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer'; // We will create this next

// Initialize the Font
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nitikushal.in'), // REPLACE with your actual domain later
  
  title: {
    default: "NitiKushal | Empowering Communities | Niti Kushal",
    template: "%s | Niti Kushal" // e.g., "Projects | Niti Kushal"
  },
  
  description: "Niti Kushal is a non-profit organization dedicated to sustainable development, education, and healthcare in rural India. Join us in creating a better tomorrow.",
  
  keywords: [
    "NGO", 
    "Non-profit", 
    "India", 
    "Rural Development", 
    "Education", 
    "Healthcare", 
    "Women Empowerment", 
    "Niti Kushal", 
    "nitikushal", 
    "Social Work"
  ],

  authors: [{ name: "Nitikushal Team" }],
  
  creator: "Nitikushal",

  // SETTINGS FOR SOCIAL MEDIA SHARING (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nitikushal.in",
    title: "Niti Kushal | Empowering Communities",
    description: "Driving change through education, healthcare, and sustainable livelihood initiatives across India.",
    siteName: "Niti Kushal",
    images: [
      {
        url: "/opengraph-image.png", // We will add this image next
        width: 1200,
        height: 630,
        alt: "Niti Kushal - Building a Better Tomorrow",
      },
    ],
  },

  // SETTINGS FOR TWITTER CARDS
  twitter: {
    card: "summary_large_image",
    title: "Niti Kushal | Empowering Communities",
    description: "Driving change through education, healthcare, and sustainable livelihood initiatives.",
    images: ["/opengraph-image.png"], // Same image as above
  },

  // ICONS (Favicon)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 'scroll-smooth' in the html tag enables the smooth sliding effect 
        when clicking navbar links (e.g., jumping from Home to About).
      */}
      <body className={`${inter.className} bg-slate-50 text-gray-800 antialiased`}>
        
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content Wrapper
           pt-16 (4rem) pushes content down so it starts exactly below the 
           fixed height navbar (h-16).
           min-h-screen ensures footer is pushed to bottom even on empty pages.
        */}
        <main className="pt-16 min-h-screen w-full flex flex-col">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
        
      </body>
    </html>
  );
}