import type { Metadata } from "next";
import SmokeyCursor from "@/components/lightswind/smokey-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lightswind Smokey Cursor",
  description: "Next.js setup with the real Lightswind Smokey Cursor component.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-white">
        <SmokeyCursor />
        {children}
      </body>
    </html>
  );
}
