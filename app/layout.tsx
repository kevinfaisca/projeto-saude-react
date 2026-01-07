"use client"

import { useState } from "react"
import {Header} from "@/components/layout/Header"
import {Sidebar} from "@/components/layout/Sidebar"
import "./globals.css";

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}/>
        <div className="flex min-h-screen">
          <Sidebar open={sidebarOpen}/>
          <main className="flex-1 bg-white p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
