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
    <Main />
  );
}
