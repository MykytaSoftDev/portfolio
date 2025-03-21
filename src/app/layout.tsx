import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  variable: "--font-poppins-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nick's Portfolio",
  description:
    "Here is my professional portfolio as a Full Stack Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased mx-15`}
      >
        <Header />
        <main className="flex">
          <Image src={"/nick.jpg"} width={500} height={500} alt="Nick" />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
