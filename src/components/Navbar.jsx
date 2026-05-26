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
      className="fixed top-0 w-full z-50 bg-[#f7f3ec]/88 backdrop-blur-xl border-b border-[#161412]/10"
    >

      <div className="container-lux flex justify-between items-center px-5 md:px-10 py-4 md:py-5">

        <a href="#home" onClick={goHome} className="text-3xl sm:text-4xl md:text-5xl title text-[#161412]">
          NOIR
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#5f5750]">

          {links.map((link)=>(
            <li key={link.href}>
              <a href={link.href} className="hover:text-[#5c1f25] duration-300">
                {link.label}
              </a>
            </li>
          ))}

        </ul>

        <button
          onClick={()=>setOpen(true)}
          className="md:hidden w-11 h-11 inline-flex items-center justify-center rounded-full border border-[#161412]/10"
          aria-label="Open menu"
        >

          <Menu size={24} />

        </button>

      </div>

      {open && (

        <div className="fixed inset-0 bg-[#f7f3ec] z-50 flex flex-col items-center justify-center gap-6 text-2xl sm:text-3xl title">

          <button
            className="absolute top-6 right-6 w-12 h-12 inline-flex items-center justify-center rounded-full border border-[#161412]/10"
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
