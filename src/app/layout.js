import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

// import Nav from "./components/navbar";
// import Footer from "./components/footer";

export const metadata = {
  title: "joscript",
  description: "joscript أكاديمية لتعليم البرمجة نهدف إلى نشر المعرفة البرمجية ومساعدة الآخرين على تعلمها نسعى لتوفير بيئة تعليمية إيجابية وداعمة للطلاب من جميع المستويات، من المبتدئين إلى المتقدمين",
};
export default function RootLayout({ children }) {
  return (
    <html lang="ar" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="icon" href="/jo.svg" />
      </head>
      <body className={`${inter.className} `} style={{ direction: "rtl" }}>
        {/* <Nav /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
