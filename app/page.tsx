"use client";

import { useEffect } from "react";
import Header from "./components/header";
import { checkMobile } from "./store/persist";
import Main from "./components/main";

export default function Home() {
  const setIsMobile = checkMobile((state) => state.setMobile);

  useEffect(() => {
    const width = window.screen.width;

    if (width >= 912) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }

  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-start select-none pt-7 space-y-7">
      <div className='w-full sm:max-w-160 md:max-w-3xl lg:max-w-5xl max-w-306 mcenter'>
        <Header />
      </div>
      <Main />
      <div className='w-full'>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
