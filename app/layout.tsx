import Gallery from "./Components/gallery/page";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Block Block x Polygon NFT",
  description: "Generate your NFT with blockblock & polygon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="m-auto w-2/3 bg-white">
          <Gallery />
          {children}
        </div>
      </body>
    </html>
  );
}
