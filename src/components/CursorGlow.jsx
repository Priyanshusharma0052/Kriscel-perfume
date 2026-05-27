import { useEffect } from "react";

function CursorGlow() {

  useEffect(()=>{

    const glow=document.getElementById("glow");

    window.addEventListener("mousemove",(e)=>{

      glow.style.left=e.clientX+"px";
      glow.style.top=e.clientY+"px";

    });

  },[]);

  return (
    <div
      id="glow"
      className="fixed w-40 h-40 bg-[color:rgba(154,177,122,0.35)] blur-3xl rounded-full pointer-events-none z-[999]"
    ></div>
  );
}

export default CursorGlow;
