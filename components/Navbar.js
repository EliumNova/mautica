"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/config";

const USE_LOGO = true; // poné true cuando tengas el logo

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
      `}>
      <div className="bg-black/55 backdrop-blur-xl border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-5 md:px-8 h-14 md:h-16 flex items-center justify-center">
          <a href="#inicio">
            <img
              src="/img/logo.png"
              alt="Mautica"
              className="h-9 md:h-10 w-auto"
            />
          </a>
        </nav>
      </div>
    </header>
  );
}
