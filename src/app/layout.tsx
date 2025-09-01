import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/main.scss";


// Initialize Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "SkillDesk - AI-Powered Learning Platform",
  description: "Transform your organization with our enterprise-grade AI learning platform. Comprehensive skill assessment, personalized learning paths, and data-driven insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
