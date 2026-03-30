import type { Metadata } from "next";
import { Sora, DM_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "ZAN IMPEX LIMITED — Building Tomorrow Today",
  description:
    "Ghana's integrated development partner — trade, construction, civil engineering, electrical works, and real estate.",
  keywords: [
    "ZAN IMPEX",
    "Ghana construction",
    "civil engineering Ghana",
    "real estate Accra",
    "electrical engineering Ghana",
    "import export Ghana",
  ],
  openGraph: {
    title: "ZAN IMPEX LIMITED",
    description: "Building Tomorrow Today",
    locale: "en_GH",
    type: "website",
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
      className={`${sora.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
