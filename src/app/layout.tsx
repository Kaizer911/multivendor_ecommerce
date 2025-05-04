// Next.js
import type { metadata } from "next";
import { Inter, Barlow } from "next/font/google";

// Global css
import "./globals.css";

// Theme provider
import { ThemeProvider } from "next-themes";

// Fonts
const interFont = Inter({ subsets: ["latin"] });
const barlowFont = Inter({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-barlow",
});

// Metadata
export const metadata: Metadata = {
  title: "GoShop",
  description:
    "Welcome to GoShop, your ultimate destination for seamless online shopping. Discover a vast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className} ${barlowFont.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
