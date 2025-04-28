import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apt - Algo Infrastructure for Indian Brokers",
  description: "Apt. Trading Platform",
  icons: {
    icon: [
      { url: "/images/darkmodelogo.png" },
      { url: "/images/darkmodelogo.png", sizes: "40x20", type: "image/png" },
    ],
    apple: {
      url: "/images/darkmodelogo.png",
      sizes: "40x20",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.variable}>
        <main className="font-sans antialiased">{children}</main>
        <Script id="grammarly-handler" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined') {
              const removeGrammarlyAttributes = () => {
                const body = document.querySelector('body');
                if (body) {
                  body.removeAttribute('data-new-gr-c-s-check-loaded');
                  body.removeAttribute('data-gr-ext-installed');
                }
              };
              removeGrammarlyAttributes();
              const observer = new MutationObserver(removeGrammarlyAttributes);
              observer.observe(document.body, { attributes: true });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
