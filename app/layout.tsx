import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Automatez AI",
  description: "Custom AI systems for businesses ready to cut costs, streamline ops, and scale fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
