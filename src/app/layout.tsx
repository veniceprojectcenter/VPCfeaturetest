import './globals.css'
import { Inter } from 'next/font/google'
import {Navbar} from './components/nav/Navbar'
import React from "react";
import {Sidebar} from "@/app/components/nav/Sidebar";
import {Footer} from "@/app/components/Footer";
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <main>
              <div className = {"pageLayout"}>
                  <Navbar/>
                  <Sidebar/>
                  <div className = {"pageContent w-full"}>
                      {children}
                      <Footer/>
                  </div>
              </div>
              <Analytics></Analytics>
          </main>
      </body>
    </html>
  )
}
