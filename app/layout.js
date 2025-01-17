'use client';

import { Inter } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    console.log(
      document.getElementsByTagName("head")[0].appendChild(threeScript)
    );
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
