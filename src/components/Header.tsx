import { useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header({ dark, setDark }: { dark:boolean, setDark: (v:boolean)=>void }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between bg-white/60 dark:bg-gray-900/60 backdrop-blur rounded-full py-2 shadow">
        
        {/* Left: logo */}
        <div className="flex items-center gap-4">
          <Logo />
        </div>

        {/* Right: links + toggle */}
        <div className="flex items-center gap-4">
          
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#portfolio" className="text-sm">Portfolio</a>
            <a href="#about" className="text-sm">À propos</a>
            <a href="#services" className="text-sm">Services</a>
            <a href="#contact" className="text-sm">Contact</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* Dark mode toggle */}
          <ThemeToggle dark={dark} setDark={setDark} />
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 mx-4 bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex flex-col gap-2">
          <a href="#portfolio" className="text-sm">Portfolio</a>
          <a href="#about" className="text-sm">À propos</a>
          <a href="#services" className="text-sm">Services</a>
          <a href="#contact" className="text-sm">Contact</a>
        </div>
      )}
    </nav>
  );
}
