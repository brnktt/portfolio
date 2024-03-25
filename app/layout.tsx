import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import React from "react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  
  title: "Alessandro Branchetti",
  authors: {
    name: "Alessandro Branchetti | brnktt",
  },
  
  description:
    "Based in Poland. I'm a Fullstack developer passionate about building a modern web applications that users love.",
  openGraph: {
    title: "Alessandro Branchetti",
    description:
      "Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app.",
    url: "http://localhost:3000",
    siteName: "Alessandro Branchetti",
    images: "/og.png",
    type: "website",
  },
  keywords: ["daily web coding", "Alessandro Branchetti", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
