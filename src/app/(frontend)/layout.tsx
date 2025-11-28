import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { QueryProvider } from "@/components/providers/QueryProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Point Network",
  description:
    "A Point Network é uma empresa especializada em soluções de gestão condominial, controle de acesso e automação financeira.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} antialiased`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
