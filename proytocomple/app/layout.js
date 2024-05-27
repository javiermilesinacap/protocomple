import { Montserrat } from "next/font/google";
import "@/css/globals.css";
import "@/css/globalsicons.css";

const typography = Montserrat({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Mi primer Comercio",
  description: "Comercio Electrónico desde NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={typography.className}>{children}</body>
    </html>
  );
}
