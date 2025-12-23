import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Trinayana Solution | Engineering & IT Services",
  description: "Engineering the Physical World & Building the Digital Future. Civil Engineering and IT Services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="selection:bg-accent selection:text-primary">
      <body className={`${inter.className} antialiased`}>
        <div className="noise-overlay" />
        <CustomCursor />
        <Navbar />
        <SmoothScroll>
          <main>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
