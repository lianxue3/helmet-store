import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "./components/LanguageProvider";
import SiteChrome from "./components/SiteChrome";

export const metadata = {
  title: "XVEX Helmets | Premium Motorcycle Helmets",
  description:
    "Premium motorcycle helmets for urban riders, racers, and adventure seekers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900">
        <LanguageProvider>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
