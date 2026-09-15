import "./globals.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export const metadata = {
  title: "Finsweet Agency",
  description: "A modern agency website built with Next.js and Tailwind CSS.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Header />

        <main className="pt-[92]">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
