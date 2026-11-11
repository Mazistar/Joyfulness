import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joyfulness — פחות להחזיק. יותר להרגיש.",
  description: "מגזין אישי וחושי על גוף, רצון, גבולות, עונג והדרך לחזור אלייך.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
