import { AppFooter, AppHeader } from "@/components/interface";
import { ReduxProvider } from "@/context/provider";
import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieDB",
  description: "MovieDB example app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <ReduxProvider>
        <body
          className={`flex flex-col justify-between min-h-screen w-full ${inter.className}`}
        >
          <AppHeader />
          <main className="mb-auto">{children}</main>
          <AppFooter />
        </body>
      </ReduxProvider>
    </html>
  );
}
