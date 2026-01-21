import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sell",
  description: "Minimal Next.js app without Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' style={{ overflowX: "hidden" }}>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#000",
          overflowX: "hidden",
          width: "100vw",
        }}
      >
        {children}
      </body>
    </html>
  );
}
