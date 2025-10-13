import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkillDesk - AI-Powered Learning Platform",
  description:
    "Transform your organization with our enterprise-grade AI learning platform. Comprehensive skill assessment, personalized learning paths, and data-driven insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Work+Sans:wght@100..900&display=swap"
          rel="stylesheet"
        />
        {/* Template CSS Files */}
        <link rel="stylesheet" href="/css/fontawesome-5.14.0.min.css" />
        <link rel="stylesheet" href="/css/flaticon.min.css" />
        <link rel="stylesheet" href="/css/slick.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/css/nice-select.min.css" />
        <link rel="stylesheet" href="/css/jquery-ui.min.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
