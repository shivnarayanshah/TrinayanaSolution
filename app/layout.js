import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Trinayana Solution | Engineering & IT Services in Nepal",
  description: "Trinayana Solution delivers top-tier Civil Engineering and Digital Technology solutions. Specialized in structural design, municipal drawings, and web development.",
  keywords: ["Civil Engineering Nepal", "IT Services Kathmandu", "Structural Design", "Web Development Nepal", "Trinayana Solution"],
  authors: [{ name: "Trinayana Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Trinayana Solution | Engineering & IT Services",
    description: "Building the Physical World & the Digital Future.",
    url: "https://trinayana.com",
    siteName: "Trinayana Solution",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="selection:bg-accent selection:text-primary">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="noise-overlay" />
          <CustomCursor />
          <Navbar />
          <SmoothScroll>
            <main>
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
