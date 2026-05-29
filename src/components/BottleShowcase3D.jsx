import { useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import bottle from "../assets/original-bottle.png";
import LineBackdrop from "./LineBackdrop";

function BottleShowcase3D() {
  const [zoom, setZoom] = useState(1);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 20, mass: 0.7 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 20, mass: 0.7 });
  const springScale = useSpring(zoom, { stiffness: 200, damping: 18, mass: 0.65 });

  const bottleStyle = useMemo(() => ({
    rotateX: springX,
    rotateY: springY,
    scale: springScale,
    translateZ: 70
  }), [springScale, springX, springY]);

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const pointerX = (event.clientX - rect.left) / rect.width;
    const pointerY = (event.clientY - rect.top) / rect.height;

    rotateY.set((pointerX - 0.5) * 18);
    rotateX.set((0.5 - pointerY) * 14);
  }

  function handleEnter() {
    setZoom((value) => clamp(Number((value + 0.04).toFixed(2)), 0.92, 1.16));
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
    setZoom(1);
  }

  function handleWheel(event) {
    event.preventDefault();
    setZoom((value) => clamp(Number((value + (event.deltaY < 0 ? 0.05 : -0.05)).toFixed(2)), 0.92, 1.22));
  }

  return (
    <section id="showcase" className="section tone-2 relative overflow-hidden">
      <LineBackdrop variant="panel" className="opacity-16 mix-blend-multiply" />
      <div className="container-lux relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div>
          <p className="eyebrow text-[var(--wine)] mb-4">Signature bottle</p>
          <h2 className="section-title text-4xl sm:text-5xl md:text-7xl text-center lg:text-left">
            Your <span className="highlight">icon</span> on the vanity.
          </h2>
          <p className="mt-6 md:mt-7 text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-muted max-w-xl section-copy text-center lg:text-left mx-auto lg:mx-0">
            Clean blue glass, crisp edges, and a weighted cap. Move your cursor to tilt it, use the wheel to zoom it, and it will feel closer to a real object.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
            <div className="bg-[color:rgba(255,255,255,0.55)] rounded-lg soft-border p-4">
              <p className="eyebrow text-[var(--gold)]">Look</p>
              <p className="mt-2 text-lg font-semibold">Glass shine + clean edges</p>
            </div>
            <div className="bg-[color:rgba(255,255,255,0.55)] rounded-lg soft-border p-4">
              <p className="eyebrow text-[var(--gold)]">Feel</p>
              <p className="mt-2 text-lg font-semibold">Cursor-led motion only</p>
            </div>
          </div>
        </div>

        <div className="relative h-[300px] sm:h-[420px] md:h-[560px] rounded-lg overflow-hidden soft-border luxury-shadow bg-[radial-gradient(circle_at_28%_20%,color-mix(in_srgb,var(--palette-sky)_62%,white)_0%,color-mix(in_srgb,var(--palette-lilac)_44%,white)_52%,color-mix(in_srgb,var(--palette-violet)_18%,transparent)_100%)]">
          <LineBackdrop variant="panel" className="opacity-35 sm:opacity-55 mix-blend-multiply" />

          <div
            className="relative h-full w-full grid place-items-center p-3 sm:p-6 tilt-stage"
            onMouseMove={handleMove}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onWheel={handleWheel}
          >
            <motion.div
              className="relative w-full h-full max-w-[520px] grid place-items-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.8), rgba(255,255,255,0) 55%)",
                  mixBlendMode: "soft-light",
                  opacity: 0.75,
                  transform: "translateZ(65px)"
                }}
              />

              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 44%, rgba(255,255,255,0) 70%)",
                  mixBlendMode: "screen",
                  opacity: 0.35,
                  transform: "translateZ(80px) rotateZ(-8deg)"
                }}
                animate={{ x: ["-22%", "22%", "-22%"] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="relative flex items-center justify-center w-full h-full"
                style={bottleStyle}
                whileHover={{ filter: "saturate(1.03) contrast(1.04)" }}
                transition={{ duration: 0.25 }}
              >
                <img
                  src={bottle}
                  alt="Perfume bottle"
                  className="w-full max-w-[300px] sm:max-w-[420px] h-auto object-contain drop-shadow-[0_34px_90px_rgba(0,0,0,0.22)] select-none"
                  draggable={false}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width="900"
                  height="1200"
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[82%] h-14 blur-2xl rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(closest-side, rgba(0,0,0,0.30), rgba(0,0,0,0))",
                  opacity: 0.5
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottleShowcase3D;
