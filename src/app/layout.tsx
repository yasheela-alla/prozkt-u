import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideBarNav } from "@/components/SideBar";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "prozkt",
  description: "Modern project management tool for task tracking and collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex h-screen flex-col">
            <div className="flex flex-1 overflow-hidden">
              <SideBarNav />
              <main className="flex-1 overflow-auto">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
