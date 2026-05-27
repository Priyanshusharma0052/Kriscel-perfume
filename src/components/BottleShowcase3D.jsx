import { useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import bottle from "../assets/original-bottle.png";

function BottleShowcase3D() {
  const [zoom, setZoom] = useState(1);
  const [imageFailed, setImageFailed] = useState(false);
  const rotate = 0;

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rX = useSpring(rotateX, { stiffness: 220, damping: 18, mass: 0.55 });
  const rY = useSpring(rotateY, { stiffness: 220, damping: 18, mass: 0.55 });

  const transform = useMemo(() => {
    return {
      rotateX: rX,
      rotateY: rY,
      rotateZ: 0,
      scale: zoom,
      translateZ: 90
    };
  }, [rX, rY, zoom]);

  function clamp(value,min,max){
    return Math.min(max,Math.max(min,value));
  }

  function handleMove(e){
    const rect=e.currentTarget.getBoundingClientRect();
    const px=(e.clientX-rect.left)/rect.width;
    const py=(e.clientY-rect.top)/rect.height;
    rotateY.set((px-0.5)*18 + rotate);
    rotateX.set((0.5-py)*14);
  }

  function handleEnter(){
    setZoom((z)=>clamp(Number((z+0.06).toFixed(2)),0.9,1.35));
  }

  function handleLeave(){
    rotateX.set(0);
    rotateY.set(rotate);
    setZoom(1);
  }

  return (
    <section id="showcase" className="section tone-2">
      <div className="container-lux grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p className="eyebrow text-[var(--wine)] mb-4">Signature bottle</p>
          <h2 className="section-title text-4xl sm:text-5xl md:text-7xl">
            Your <span className="highlight">icon</span> on the vanity.
          </h2>
          <p className="mt-6 md:mt-7 text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-muted max-w-xl section-copy">
            A clean blue glass bottle with sharp edges, soft reflections, and a cap that catches light the moment you move.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            <div className="bg-[color:rgba(255,255,255,0.55)] rounded-lg soft-border p-4">
              <p className="eyebrow text-[var(--gold)]">Look</p>
              <p className="mt-2 text-lg font-semibold">Glass shine + clean edges</p>
            </div>
            <div className="bg-[color:rgba(255,255,255,0.55)] rounded-lg soft-border p-4">
              <p className="eyebrow text-[var(--gold)]">Feel</p>
              <p className="mt-2 text-lg font-semibold">Studio-finished presence</p>
            </div>
          </div>
        </div>

        <div className="h-[360px] sm:h-[420px] md:h-[560px] rounded-lg overflow-hidden soft-border luxury-shadow bg-[radial-gradient(circle_at_28%_20%,color-mix(in_srgb,var(--palette-sky)_62%,white)_0%,color-mix(in_srgb,var(--palette-lilac)_44%,white)_52%,color-mix(in_srgb,var(--palette-violet)_18%,transparent)_100%)]">
          <div className="relative h-full w-full grid place-items-center p-6 tilt-stage">
            <motion.div
              className="relative w-full h-full max-w-[520px] grid place-items-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative grid place-items-center select-none"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: [0, 6, 0, -6, 0], rotateX: [0, -3, 0, 3, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                onMouseMove={handleMove}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.8), rgba(255,255,255,0) 55%)",
                    mixBlendMode: "soft-light",
                    opacity: 0.85,
                    transform: "translateZ(70px)"
                  }}
                />

                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.65) 44%, rgba(255,255,255,0) 70%)",
                    mixBlendMode: "screen",
                    opacity: 0.55,
                    transform: "translateZ(85px) rotateZ(-8deg)"
                  }}
                  animate={{ x: ["-32%", "32%", "-32%"] }}
                  transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative flex items-center justify-center w-full h-full">
                  {!imageFailed ? (
                    <motion.img
                      src={bottle}
                      alt="Perfume bottle"
                      className="w-full max-w-[420px] h-auto object-contain drop-shadow-[0_34px_90px_rgba(0,0,0,0.28)]"
                      style={transform}
                      whileHover={{ filter: "saturate(1.05) contrast(1.06)" }}
                      transition={{ duration: 0.35 }}
                      draggable={false}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      width="900"
                      height="1200"
                      onError={() => setImageFailed(true)}
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="w-full max-w-[420px] aspect-[3/4] rounded-[2.5rem] border border-white/40 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.8),rgba(255,255,255,0)_46%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.18))] shadow-[0_34px_90px_rgba(0,0,0,0.18)]"
                    />
                  )}
                </div>

                <motion.div
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[82%] h-14 blur-2xl rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(closest-side, rgba(0,0,0,0.30), rgba(0,0,0,0))",
                    opacity: 0.55
                  }}
                  animate={{ scale: [0.98, 1.05, 0.98] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottleShowcase3D;
