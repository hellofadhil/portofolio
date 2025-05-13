import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fadhil Rabbani",
  description:
    "Sebagai siswa SMK jurusan Sistem & Aplikasi Informasi Jaringan, saya memiliki antusiasme yang tinggi terhadap pemrograman web dan inovasi digital.",
};

// export default function RootLayout({
//   children,
//   params
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        <meta
          name="google-site-verification"
          content="iFO3waheOPytZSv7UcSrXaGLjgEP2LtQahNwRFt5ARA"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
