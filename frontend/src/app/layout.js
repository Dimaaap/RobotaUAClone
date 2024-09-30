import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["cyrillic"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800", 
    "900", "1000"
  ]
})

export const metadata = {
  title: "Robota.UA",
  description: "Robota Ua Clone App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  );
}
