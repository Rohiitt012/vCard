import { Outfit, Poppins, Quicksand, Montserrat, Raleway, Merriweather_Sans, Rubik } from 'next/font/google';
import type { Viewport } from 'next';
import './globals.css';
import "flatpickr/dist/flatpickr.css";
import { LanguageProvider } from '@/context/LanguageContext';
import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { UserProvider } from '@/context/UserContext';
import { VCardsProvider } from '@/context/VCardsContext';

const outfit = Outfit({
  subsets: ["latin"],
});

/* Dennis Tailwind template – Poppins for font-poppins utility (Medical Practice / portfolio) */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins-next",
});

/* Borox template – Quicksand (headings) & Montserrat (body) */
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-borox-quicksand",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-borox-montserrat",
});

/* Geeky template – Medical vCard (Raleway + Merriweather Sans) */
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geeky-primary",
});
const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geeky-secondary",
});

/* LaslesVPN – Minimal vCard */
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lasles-rubik",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`overflow-x-hidden ${poppins.variable} ${quicksand.variable} ${montserrat.variable} ${raleway.variable} ${merriweatherSans.variable} ${rubik.variable}`}>
      <body className={`${outfit.className} bg-slate-50 dark:bg-gray-900 overflow-x-hidden min-w-0`}>
        <ThemeProvider>
          <LanguageProvider>
            <UserProvider>
              <VCardsProvider>
                <SidebarProvider>{children}</SidebarProvider>
              </VCardsProvider>
            </UserProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
