import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider.context";
import Header from "@/components/header/Header";
import useServerSession from "@/hooks/useServerSession";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Spizzichouse",
  description: "Game manager for Spizzico game",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = useServerSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {!!user ? (
            <>
              <Header />
              <main className="w-full mx-auto flex py-8 max-w-7xl">{children}</main>
            </>
          ) : (
            children
          )}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
