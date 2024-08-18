import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header/page';
import { CartContextProvider } from "@/context/Cart";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartContextProvider>
          <Toaster />
          <Header />
          <main className="bg-gray-900 h-full">{children}</main>
        </CartContextProvider>
      </body>
    </html>
  );
}
