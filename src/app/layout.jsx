import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={poppins.className}>

        <header> <Header/> </header>

        {children}

        <footer> <Footer/>  </footer>

      </body>
    </html>
  );
}