import { Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Great_Vibes({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: `Happy Vietnamese Woman's Day`,
  description: `Do something awesome for my love`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
