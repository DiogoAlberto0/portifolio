import { ThemeButton } from "@/components/ThemeButton/ThemeButton";
import "./globals.css";

//next
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portifólio Diogo",
  description: "Created By Diogo",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className +' bg-gray-200 dark:bg-neutral-900 dark:text-white'}>
        <ThemeButton />
        {children}
      </body>
    </html>
  );
}
