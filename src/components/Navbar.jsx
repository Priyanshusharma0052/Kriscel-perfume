import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links=[
  {label:"Home",href:"#home"},
  {label:"Collection",href:"#collection"},
  {label:"3D Showcase",href:"#showcase"},
  {label:"Finder",href:"#finder"},
  {label:"Options",href:"#options"},
  {label:"Reviews",href:"#reviews"}
];

function Navbar() {

  const [open,setOpen]=useState(false);

  function goHome(e){
    e.preventDefault();
    window.scrollTo({top:0,behavior:"smooth"});
    window.location.hash="home";
    setOpen(false);
  }

  return (
    <motion.nav
      initial={{ y:-24, opacity:0 }}
      animate={{ y:0, opacity:1 }}
      transition={{ duration:0.45 }}
      className="fixed top-0 w-full z-50 bg-[color:color-mix(in_srgb,var(--palette-mint)_55%,white)] border-b border-[color:rgba(20,16,24,0.12)] shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
    >

      <div className="container-lux flex justify-between items-center px-5 md:px-10 py-4 md:py-5">

        <a href="#home" onClick={goHome} className="text-2xl sm:text-3xl md:text-4xl title font-bold text-[color:var(--text)] tracking-[0.08em] uppercase">
          KRISCEL PERFUMES
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">

          {links.map((link)=>(
            <li key={link.href}>
              <a href={link.href} className="hover:text-[var(--wine)] duration-300">
                {link.label}
              </a>
            </li>
          ))}

        </ul>

        <button
          onClick={()=>setOpen(true)}
          className="md:hidden w-11 h-11 inline-flex items-center justify-center rounded-full border border-[color:var(--border)]"
          aria-label="Open menu"
        >

          <Menu size={24} />

        </button>

      </div>

      {open && (

        <div className="fixed inset-0 tone-1 z-50 flex flex-col items-center justify-center gap-6 text-2xl sm:text-3xl title">

          <button
            className="absolute top-6 right-6 w-12 h-12 inline-flex items-center justify-center rounded-full border border-[color:var(--border)]"
            onClick={()=>setOpen(false)}
            aria-label="Close menu"
          >

            <X size={28} />

          </button>

          {links.map((link)=>(
            <a key={link.href} href={link.href} onClick={()=>setOpen(false)}>
              {link.label}
            </a>
          ))}

        </div>

      )}

    </motion.nav>
  );
}

export default Navbar;
