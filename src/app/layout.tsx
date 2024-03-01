import React from "react";
import "./globals.css";

export const metadata = {
  title: "S-Mall",
  description: "E-commerce social media",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
