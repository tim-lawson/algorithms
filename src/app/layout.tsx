import type { Metadata } from "next";
import classnames from "classnames";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tim's Algorithms",
  description: "The algorithms I use for speedcubing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className={classnames(
            "w-screen h-screen overflow-hidden",
            "bg-gradient-to-br from-mauve4 via-mauve2 to-mauve3",
          )}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
