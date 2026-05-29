import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FEATURED_OCCASIONAL_IDS, PERFUMES } from "../data/perfumes";
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

function LuxurySlider({onPerfumeSelect}) {
  const [selectedOccasion,setSelectedOccasion]=useState("All Occasions");

  const occasionOptions=[
    "All Occasions",
    "Work & Professional Events",
    "Casual Days & Outdoor Activities",
    "Romantic Dates & Intimate Evenings",
    "Night Outs & Parties",
    "Weddings & Formal Celebrations"
  ];

  const filteredPerfumes=useMemo(()=>{
    const featured=PERFUMES.filter((p)=>FEATURED_OCCASIONAL_IDS.includes(p.id));
    if(selectedOccasion==="All Occasions") return featured;
    return featured.filter((item)=>item.occasions?.includes(selectedOccasion));
  },[selectedOccasion]);

  function colorize(text){
    const parts=String(text || "").split(/(oud|amber|rose|iris|musk|saffron|vanilla)/i);
    return parts.map((part,index)=>{
      const lower=part.toLowerCase();
      if(["oud","amber","musk","vanilla"].includes(lower)) return <span key={index} className="highlight">{part}</span>;
      if(["rose","iris","saffron"].includes(lower)) return <span key={index} className="highlight-2">{part}</span>;
      return <span key={index}>{part}</span>;
    });
  }

  return (
    <section className="section tone-7 relative overflow-hidden">
      <LineBackdrop variant="panel" className="opacity-16 mix-blend-multiply" />
      <div className="container-lux relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <p className="eyebrow text-[var(--wine)] mb-4">Occasional edit</p>
            <h2 className="section-title text-5xl md:text-7xl">
              Objects of <span className="highlight">desire</span>.
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <p className="section-copy max-w-xl text-lg leading-8 text-muted">
              Heavy glass, precise <span className="highlight-2">atomizers</span>, and quiet labels designed to belong on a marble console.
            </p>
            <label className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)]">
              Occasion
              <select
                value={selectedOccasion}
                onChange={(e)=>setSelectedOccasion(e.target.value)}
                className="ml-3 bg-[color:rgba(255,255,255,0.7)] border border-[#161412]/20 rounded-full px-4 py-2 text-sm font-semibold"
              >
                {occasionOptions.map((item)=>(
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPerfumes.map((item)=>(
            <motion.article
              key={item.id}
              onClick={()=>onPerfumeSelect(item)}
              className="bg-[color:rgba(251,232,206,0.75)] rounded-lg overflow-hidden soft-border luxury-shadow cursor-pointer"
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, amount:0.22 }}
              whileHover={{ y:-8 }}
              transition={{ duration:0.45 }}
            >
              <img
                src={item.image}
                alt={`${item.name} perfume`}
                className="h-[390px] w-full object-cover image-treatment hover-zoom"
              />

              <div className="p-7">
                <h3 className="title text-4xl">
                  {item.name}
                </h3>

                <p className="mt-3 text-muted section-copy">
                  {colorize(item.mood || item.note)}
                </p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Stars rating={item.rating} />
                    <p className="text-xs sm:text-sm text-[#6c635b]">{item.reviews} reviews</p>
                  </div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.13em] text-[#6c635b]">{item.family}</p>
                </div>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs sm:text-sm uppercase tracking-[0.12em] text-muted font-semibold">
                      Ask concierge for availability
                    </p>
                  </div>
                  <button
                    onClick={(e)=>{
                      e.stopPropagation();
                      onPerfumeSelect(item);
                    }}
                    className="rounded-full bg-[#161412] text-white px-4 py-2 text-sm font-semibold"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LuxurySlider;
