import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";
import RegisterModal from './components/modals/RegisterModal';
const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Where",
  description: "The app used for travel around, and real-time location share, sharing the fabulous view in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <Navbar/>
        <Modal actionLabel = 'Submit' title="qewads" isOpen />
        {children}
      </body>
    </html>
  );
}
