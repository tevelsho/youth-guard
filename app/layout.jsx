import React from "react";
import Navbar from "@/app/ui/navbar";
import Chatbot from "@/app/chatbot/chatbot";
import Footer from "@/app/ui/footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Youth Guard</title>
      </head>
      <body>
        <div>
          <Navbar />
          {children}
          <Chatbot />
        </div>
        <Footer className="footer" />
      </body>
    </html>
  );
}
