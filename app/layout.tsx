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
        {children}
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