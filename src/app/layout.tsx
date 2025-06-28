import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Game Done",
  description: "Game Done is a game shop in iran.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="rtl"
        className={`antialiased`}
      >
        <Layout>
          {children}
        </Layout>
        {/* <ToastContainer /> */}
      </body>
    </html>
  );
}
