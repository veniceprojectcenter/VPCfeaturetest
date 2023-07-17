import './globals.css'
import { Inter } from 'next/font/google'
import {Navbar} from './components/nav/Navbar'
import React from "react";
import {Sidebar} from "@/app/components/nav/Sidebar";
import {Footer} from "@/app/components/Footer";
import { Analytics } from '@vercel/analytics/react';
import {SessionProvider} from "next-auth/react";
import {session} from "next-auth/core/routes";
import Provider from "@/app/components/auth/Provider";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Venice Project center',
  description: 'the website for the venice project center',
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
              <Provider>
                  <div className = {"pageLayout"}>
                      <Navbar/>
                      <Sidebar/>
                      <div className = {"pageContent w-full"}>
                          {children}
                          <Footer/>
                      </div>
                  </div>
                  <Analytics></Analytics>
              </Provider>
          </main>
      </body>
    </html>
  )
}
