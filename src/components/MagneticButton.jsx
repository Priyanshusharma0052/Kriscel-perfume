import { useRef } from "react";

function MagneticButton({children,className="",...props}) {

  const ref=useRef();

  const move=(e)=>{

    const rect=ref.current.getBoundingClientRect();

    const x=e.clientX-rect.left-rect.width/2;
    const y=e.clientY-rect.top-rect.height/2;

    ref.current.style.transform=`translate(${x*0.2}px,${y*0.2}px)`;

  }

  const reset=()=>{

    ref.current.style.transform=`translate(0px,0px)`;

  }

  return (
    <button
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      className={`duration-300 ${className || "bg-black text-white px-10 py-5 rounded-full text-xl"}`}
      {...props}
    >

      {children}

    </button>
  );
}

export default MagneticButton;
