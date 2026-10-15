import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";


export const metadata: Metadata = {
  title: "케이오더",
  description: "케이오더 소개 사이트",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <div className='w-full sm:max-w-160 md:max-w-3xl lg:max-w-5xl max-w-306 mcenter'>
          <Header />
        </div>
        <main>
          {children}
        </main>
        <div className='w-full'>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div>
//       <Header />
//       <main>{children}</main>
//       {/* <footer>Footer</footer> */}
//     </div>
//   );
// }