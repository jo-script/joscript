import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Link from "next/link";
import logo from '@/app/components/nav/icon/jologo.svg' 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "joscript",
  description: "Generated by create next app",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
