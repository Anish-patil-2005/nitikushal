import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer'; // We will create this next

// Initialize the Font
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Nitikushal NGO | Empowering Communities",
  description: "Nitikushal is dedicated to sustainable development, community welfare, and environmental action.",
  keywords: ["NGO", "Nitikushal", "Charity", "Social Work", "Green Initiative"],
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