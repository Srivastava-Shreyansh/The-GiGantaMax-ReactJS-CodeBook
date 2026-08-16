import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./BMB.jpeg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [["Home", "/"], ["About", "/about"], ["Cohort", "/cohort"], ["Product", "/product"], ["Contact", "/contact"]];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07070b]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="BMB logo" className="size-11 rounded-2xl object-cover ring-2 ring-fuchsia-500/70 transition duration-300 group-hover:rotate-6 group-hover:ring-cyan-300" />
          <span className="text-lg font-black tracking-tight sm:text-xl">B<span className="text-fuchsia-400">M</span>B <span className="hidden text-sm font-medium text-white/55 sm:inline">/ Baad Mein Bataunga</span></span>
        </Link>
        <button type="button" className="grid size-10 place-items-center rounded-xl border border-white/15 text-xl md:hidden" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Toggle navigation">{isOpen ? "×" : "☰"}</button>
        <div className={`${isOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-2 border-b border-white/10 bg-[#0d0d16] px-5 py-5 md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0`}>
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={() => setIsOpen(false)} className={({ isActive }) => `rounded-xl px-4 py-2 text-sm font-bold transition ${isActive ? "bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/25" : "text-white/65 hover:bg-white/8 hover:text-white"}`}>{label}</NavLink>
          ))}
          <Link to="/cohort" onClick={() => setIsOpen(false)} className="mt-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 text-center text-sm font-black text-[#090911] transition hover:scale-105 md:mt-0 md:ml-2">Join BMB</Link>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
