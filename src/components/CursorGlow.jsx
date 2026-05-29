import { useEffect } from "react";

function CursorGlow() {

  useEffect(()=>{
    const glow=document.getElementById("glow");
    const isFinePointer=window.matchMedia("(pointer:fine)").matches;
    if(!glow || !isFinePointer) return;

    const move=(event)=>{
      glow.style.left=`${event.clientX}px`;
      glow.style.top=`${event.clientY}px`;
    };

    const hide=()=>{
      glow.style.opacity="0";
    };

    const show=()=>{
      glow.style.opacity="1";
    };

    window.addEventListener("pointermove",move);
    window.addEventListener("pointerdown",show);
    window.addEventListener("pointerup",show);
    window.addEventListener("mouseleave",hide);

    return ()=>{
      window.removeEventListener("pointermove",move);
      window.removeEventListener("pointerdown",show);
      window.removeEventListener("pointerup",show);
      window.removeEventListener("mouseleave",hide);
    };

  },[]);

  return (
    <div
      id="glow"
      className="fixed w-32 h-32 sm:w-40 sm:h-40 bg-[color:rgba(215,183,255,0.18)] blur-3xl rounded-full pointer-events-none z-[999] opacity-0 transition-opacity duration-300"
    ></div>
  );
}

export default CursorGlow;
