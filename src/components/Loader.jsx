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

      <motion.h1
        initial={{ scale:0.8, opacity:0 }}
        animate={{ scale:1, opacity:1 }}
        transition={{ duration:1 }}
        className="title text-8xl gold"
      >

        KRISCEL PERFUMES

      </motion.h1>

    </motion.div>
  );
}

export default Loader;
