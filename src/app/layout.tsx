import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "../app/globals.css";

import "../css/embla.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import StoreProvider from "@/components/StoreProvider";
import Navbar from "@/components/Navbar";
import BottomAppBar from "@/components/BottomAppBar";
import BranchDialog from "@/components/dialogs/BranchDialog";
import AuthDialog from "@/components/dialogs/AuthDialog";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={inter.className}
        style={{ margin: 0, padding: 0, direction: "rtl" }}
      >
        <StoreProvider>
          <Navbar />
          <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}>
            {children}
          </div>
          <BottomAppBar />
          <BranchDialog />
          <AuthDialog />
        </StoreProvider>
      </body>
    </html>
  );
}
