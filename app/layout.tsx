import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photo Wall Art",
  description: "Photo Wall Art by PME",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/perpetua-titling-mt" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />

        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
