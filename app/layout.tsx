import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/next";


export const metadata: Metadata = {
  title: "케이오더",
  description: "케이오더 소개 사이트",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className="h-full"
    >
      <body className="w-screen h-screen flex flex-col justify-start select-none pt-7 space-y-7">
        <div className='w-full sm:max-w-160 md:max-w-3xl lg:max-w-5xl max-w-306 mcenter'>
          <Header />
        </div>
        <main>
          {children}
          <Analytics />
        </main>
        <div className='w-full'>
          <Footer />
        </div>
      </body>
    </html>
  );
}