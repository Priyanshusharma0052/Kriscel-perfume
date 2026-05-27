import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center pt-24 pb-12">
      <img
        src="https://images.unsplash.com/photo-1598187619306-4e713a7fee10?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Perfume bottle on a modern vanity"
        className="absolute inset-0  w-full h-full object-cover image-treatment aurora-bg"
      />

      <div className="absolute inset-0 bg-[#120d0a]/74"></div>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#120d0a]/88 to-transparent"></div>

      <div className="relative z-10 container-lux w-full px-5 md:px-10">

        <div className="max-w-4xl text-[#f7f3ec]">

          <p className="eyebrow mb-6 text-[color:rgba(195,204,155,0.95)]">
            Modern perfume studio
          </p>

          <motion.h1
          
            initial={{ opacity:0, y:80 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:1 }}
            className="hero-text title text-5xl sm:text-6xl md:text-8xl lg:text-9xl max-w-4xl [text-shadow:0_10px_32px_rgba(0,0,0,0.45)]"
          >

            Sculpted
            <br />
            In <span className="highlight">Scent</span>
            <br />
            And Shadow

          </motion.h1>

          <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-2xl text-[#f0e9de] max-w-2xl leading-8 md:leading-9 [text-shadow:0_4px_18px_rgba(0,0,0,0.55)]">
            Warm <span className="highlight">oud</span>, soft <span className="highlight">rose</span>, a touch of <span className="highlight">saffron</span>, and skin-close <span className="highlight">amber</span>—made for nights you’ll remember.
          </p>

          <motion.div
            initial={{ opacity:0, y:24 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.35, duration:0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >

            <MagneticButton
              onClick={()=>{window.location.hash="collection";}}
              className="bg-[color:rgba(251,232,206,0.92)] text-[#161412] px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg border border-white/10"
            >

              Explore Collection

            </MagneticButton>

            <a href="#atelier" className="inline-flex items-center justify-center border border-white/35 text-white px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg backdrop-blur-sm">
              Visit Atelier
            </a>

          </motion.div>

        </div>

        <motion.div
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:0.5, duration:0.9 }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 text-[#f7f3ec]"
        >
          {[
            ["28%","Extrait concentration"],
            ["16 hrs","Long wear trail"],
            ["04","Limited accords"],
            ["192","Hand-filled bottles"]
          ].map(([value,label])=>(
            <motion.div
              key={label}
              whileHover={{ y:-5, scale:1.01 }}
              transition={{ duration:0.2 }}
              className="py-4 md:py-5 px-3 sm:px-4 md:px-5 rounded-lg border border-white/30 bg-black/34 backdrop-blur-md soft-pulse"
            >
              <p className="title text-3xl sm:text-4xl text-white">{value}</p>
              <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.12em] text-[#efe4d5]">{label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;
