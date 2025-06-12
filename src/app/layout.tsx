import type { Metadata } from "next";
import { Lalezar } from "next/font/google";

const lalezar = Lalezar({
  subsets: ["arabic"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | احراز هویت", 
    default: "سیستم احراز هویت",
  },
  description: "پروژه نمونه برای سیستم احراز هویت با Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={lalezar.className}>
        {children}
      </body>
    </html>
  );
}
