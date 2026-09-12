import "./globals.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>

         <Header/> 

        {children}

        <Footer/>  

      </body>
    </html>
  );
}