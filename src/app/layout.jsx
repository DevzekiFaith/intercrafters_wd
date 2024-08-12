import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
// import NavigationPath from "@/component/Header/NavigationPath";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800"],
  variable: "--font-poppins",
});

const montserrat_init = Montserrat({
subsets: ["latin"],
weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
variable: "--font-montserrat",
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat_init.variable}`}>
        {/* <NavigationPath/> */}
        {children}</body>
    </html>
  );
}
