import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Where",
  description: "The app used for travel around, and real-time location share, sharing the fabulous view in the world.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <RentModal/>
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser = {currentUser}/>
        <Modal actionLabel = 'Submit' title="qewads" isOpen={false} />
        {children}
      </body>
    </html>
  );
}
