import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

import { PERFUMES } from "../data/perfumes";
import LineBackdrop from "./LineBackdrop";

function Stars({rating}) {
  const full=Math.floor(rating);
  const hasHalf=rating-full>=0.5;
  const stars=[0,1,2,3,4].map((i)=>{
    if(i<full) return "full";
    if(i===full && hasHalf) return "half";
    return "empty";
  });

  return (
    <div className="flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
      {stars.map((state,index)=>(
        <span
          key={index}
          className={`text-sm ${state==="empty" ? "text-[color:rgba(27,26,20,0.28)]" : "text-[var(--gold)]"}`}
        >
          {state==="half" ? "⯨" : "★"}
        </span>
      ))}
    </div>
  );
}

function Collection({onPerfumeSelect}) {
  const [selectedFamily,setSelectedFamily]=useState("All");
  const [selectedConcentration,setSelectedConcentration]=useState("All");

  const filteredPerfumes=useMemo(()=>{
    return PERFUMES.filter((item)=>{
      const familyOkay=selectedFamily==="All" || item.family===selectedFamily;
      const concentrationOkay=selectedConcentration==="All" || item.concentration===selectedConcentration;
      return familyOkay && concentrationOkay;
    });
  },[selectedFamily,selectedConcentration]);

  return (
    <section id="collection" className="section tone-1 relative overflow-hidden">
      <LineBackdrop variant="panel" className="opacity-18 mix-blend-multiply" />

      <div className="container-lux relative">

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-end mb-14 text-center lg:text-left">

          <div>
            <p className="eyebrow text-[var(--wine)] mb-4">The collection</p>
            <h2 className="section-title text-5xl md:text-7xl">
              Signature <span className="highlight">fragrances</span> for rooms, rituals, and evenings.
            </h2>
          </div>

          <p className="section-copy text-lg md:text-xl leading-8 text-muted max-w-2xl mx-auto lg:mx-0">
            Each scent is built like a story: an opening, a heart, and a finish that lingers on skin and fabric.
          </p>

        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:items-center md:justify-end mb-8">
          <label className="text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)]">
            Family
            <select
              value={selectedFamily}
              onChange={(e)=>setSelectedFamily(e.target.value)}
              className="mt-2 md:mt-0 md:ml-3 w-full md:w-auto bg-[color:rgba(255,255,255,0.75)] border border-[#161412]/20 rounded-full px-4 py-2 text-sm font-semibold"
            >
              <option value="All">All</option>
              <option value="Amber">Amber</option>
              <option value="Woody">Woody</option>
              <option value="Fresh">Fresh</option>
              <option value="Floral">Floral</option>
            </select>
          </label>

          <label className="text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)]">
            Concentration
            <select
              value={selectedConcentration}
              onChange={(e)=>setSelectedConcentration(e.target.value)}
              className="mt-2 md:mt-0 md:ml-3 w-full md:w-auto bg-[color:rgba(255,255,255,0.75)] border border-[#161412]/20 rounded-full px-4 py-2 text-sm font-semibold"
            >
              <option value="All">All</option>
              <option value="Parfum">Parfum</option>
              <option value="Extrait">Extrait</option>
              <option value="Elixir">Elixir</option>
            </select>
          </label>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay:2200,
            disableOnInteraction:false,
            pauseOnMouseEnter:true
          }}
          loop
          speed={850}
          spaceBetween={20}
          slidesPerView={1.05}
          breakpoints={{
            768:{slidesPerView:2},
            1200:{slidesPerView:3}
          }}
        >

          {filteredPerfumes.map((item,index)=>(
            <SwiperSlide key={item.id}>
              <motion.article
                onClick={()=>onPerfumeSelect(item)}
                className="bg-[color:rgba(255,255,255,0.62)] soft-border rounded-lg overflow-hidden hover:-translate-y-2 duration-500 luxury-shadow cursor-pointer"
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, amount:0.25 }}
                whileHover={{ y:-10 }}
                transition={{ duration:0.5 }}
              >
                <div className="aspect-[4/5] bg-[radial-gradient(circle_at_35%_15%,color-mix(in_srgb,var(--palette-sky)_55%,white)_0%,color-mix(in_srgb,var(--palette-lilac)_35%,white)_48%,rgba(255,255,255,0.6)_100%)]">
                  <img
                    src={item.image}
                    alt={`${item.name} perfume bottle`}
                    className="w-full h-full object-cover image-treatment hover-zoom"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="eyebrow text-[var(--gold)] mb-3 text-[11px] sm:text-xs">
                    0{index+1} / {item.concentration}
                  </p>

                  <h3 className="text-3xl sm:text-4xl section-title">
                    {item.name}
                  </h3>

                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted leading-6 sm:leading-7">
                    {item.mood}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Stars rating={item.rating} />
                      <p className="text-xs sm:text-sm text-[#6c635b]">
                        {item.reviews} reviews
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm uppercase tracking-[0.13em] text-[#6c635b]">{item.family}</p>
                  </div>

                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs sm:text-sm uppercase tracking-[0.12em] text-muted font-semibold">
                        Availability on request
                      </p>
                    </div>
                    <button
                      onClick={(e)=>{
                        e.stopPropagation();
                        onPerfumeSelect(item);
                      }}
                      className="rounded-full bg-[#161412] text-white px-4 py-2 text-sm font-semibold"
                    >
                      View
                    </button>
                  </div>

                  <div className="mt-4 space-y-2 text-xs sm:text-sm text-[color:var(--muted)]">
                    <p><span className="font-semibold text-[color:var(--text)]">Top:</span> <span className="highlight">{item.topNotes[0]}</span>{item.topNotes.slice(1).length ? `, ${item.topNotes.slice(1).join(", ")}` : ""}</p>
                    <p><span className="font-semibold text-[color:var(--text)]">Heart:</span> <span className="highlight-2">{item.heartNotes[0]}</span>{item.heartNotes.slice(1).length ? `, ${item.heartNotes.slice(1).join(", ")}` : ""}</p>
                    <p><span className="font-semibold text-[color:var(--text)]">Base:</span> <span className="highlight">{item.baseNotes[0]}</span>{item.baseNotes.slice(1).length ? `, ${item.baseNotes.slice(1).join(", ")}` : ""}</p>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="rounded-md bg-[color:rgba(255,255,255,0.55)] px-2 py-2 text-center">
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[color:var(--muted)]">Longevity</p>
                      <p className="text-xs font-semibold mt-1">{item.longevity}</p>
                    </div>
                    <div className="rounded-md bg-[color:rgba(255,255,255,0.55)] px-2 py-2 text-center">
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[color:var(--muted)]">Sillage</p>
                      <p className="text-xs font-semibold mt-1">{item.sillage}</p>
                    </div>
                    <div className="rounded-md bg-[color:rgba(255,255,255,0.55)] px-2 py-2 text-center">
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[color:var(--muted)]">Best For</p>
                      <p className="text-xs font-semibold mt-1">{item.bestFor}</p>
                    </div>
                  </div>

                  <div className="mt-5"></div>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}

export default Collection;
