'use client';


import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'
// import '../styles/globals.css';
import {Providers} from "@/app/redux/provider";  // adjust the path if you have global styles

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Providers>
    <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </Providers>

    </html>
  )
}
  