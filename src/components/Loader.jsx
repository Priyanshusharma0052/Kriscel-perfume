import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Loader() {
  const [visible,setVisible]=useState(true);

  useEffect(()=>{
    const timer=setTimeout(()=>setVisible(false),3200);

    return ()=>clearTimeout(timer);
  },[]);

  if(!visible) return null;

  return (
    <motion.div
      initial={{ opacity:1 }}
      animate={{ opacity:0 }}
      transition={{ delay:2, duration:1 }}
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
    >

      <div className="text-center">
        <motion.h1
          initial={{ opacity:0, y:16 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.85 }}
          className="title text-6xl sm:text-7xl gold tracking-[0.06em]"
        >
          KRISCEL PERFUMES
        </motion.h1>
        <motion.div
          initial={{ scaleX:0, opacity:0 }}
          animate={{ scaleX:1, opacity:1 }}
          transition={{ delay:0.35, duration:0.65 }}
          className="mx-auto mt-5 h-px w-40 bg-[color:rgba(251,232,206,0.8)] origin-center"
        />
      </div>

    </motion.div>
  );
}

export default Loader;
