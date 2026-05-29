import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { NOTE_PYRAMID, PERFUMES } from "../data/perfumes";
import LineBackdrop from "./LineBackdrop";

function Stars({rating=0}) {
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
          className={`text-sm ${state==="empty" ? "text-[color:rgba(20,16,24,0.28)]" : "text-[var(--gold)]"}`}
        >
          {state==="half" ? "⯨" : "★"}
        </span>
      ))}
    </div>
  );
}

function FragranceFinder({onPerfumeSelect}) {
  const [selection,setSelection]=useState({
    top:"Saffron",
    heart:"Rose",
    base:"Amber"
  });

  const bestMatch=useMemo(()=>{
    const exact=PERFUMES.find((perfume)=>(
      perfume.topNotes?.includes(selection.top) &&
      perfume.heartNotes?.includes(selection.heart) &&
      perfume.baseNotes?.includes(selection.base)
    ));
    if(exact) return exact;

    const ranked=PERFUMES
      .map((perfume)=>{
        let score=0;
        if(perfume.topNotes?.includes(selection.top)) score+=1;
        if(perfume.heartNotes?.includes(selection.heart)) score+=1;
        if(perfume.baseNotes?.includes(selection.base)) score+=1;
        return { perfume, score };
      })
      .sort((a,b)=>b.score-a.score);

    return ranked[0]?.perfume || null;
  },[selection]);

  return (
    <section id="finder" className="section tone-10 relative overflow-hidden">
      <LineBackdrop variant="panel" className="opacity-25 mix-blend-multiply" />
      <div className="container-lux relative">
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          <p className="eyebrow text-[var(--wine)] mb-4">Smart recommendation</p>
          <h2 className="section-title text-4xl sm:text-5xl md:text-7xl">Find Your <span className="highlight">Perfume</span> By Note Pyramid</h2>
          <p className="mt-6 md:mt-7 text-base sm:text-lg md:text-xl text-muted leading-7 md:leading-8 section-copy">
            Choose one note from each layer: <span className="highlight">Top</span>, <span className="highlight">Heart</span>, and <span className="highlight">Base</span>. The finder recommends one perfume where these notes fit logically.
          </p>
        </div>

        <div className="mt-10 grid gap-7 items-start lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:gap-10">
          <motion.div
            className="relative bg-[color:rgba(255,255,255,0.62)] rounded-lg soft-border p-5 sm:p-6 md:p-7 luxury-shadow overflow-hidden self-start"
            initial={{ opacity:0, x:-26 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, amount:0.25 }}
            transition={{ duration:0.5 }}
          >
            <div className="space-y-6 relative z-10">
              <motion.div
                initial={{ opacity:0, y:18 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, amount:0.3 }}
                transition={{ delay:0.05, duration:0.4 }}
              >
                <div className="flex items-center justify-between mb-3 gap-3 flex-col sm:flex-row">
                  <p className="section-title text-2xl sm:text-4xl text-[var(--wine)]">Top Notes (The Opening)</p>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)]">Duration: 0-15 mins</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {NOTE_PYRAMID.top.map((note)=>{
                    const active=selection.top===note;
                    return (
                      <motion.button
                        key={note}
                        onClick={()=>setSelection((prev)=>({...prev,top:note}))}
                        className={`px-4 py-2.5 rounded-full border text-xs sm:text-sm font-semibold duration-200 ${
                          active
                            ? "bg-[#161412] text-white border-[#161412]"
                            : "bg-[color:rgba(255,255,255,0.6)] text-[color:var(--text)] border-[#161412]/20 hover:border-[#161412]/45"
                        }`}
                        whileHover={{ y:-3, scale:1.03 }}
                        whileTap={{ scale:0.97 }}
                        transition={{ duration:0.18 }}
                      >
                        {note}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity:0, y:18 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, amount:0.3 }}
                transition={{ delay:0.12, duration:0.4 }}
              >
                <div className="flex items-center justify-between mb-3 gap-3 flex-col sm:flex-row">
                  <p className="section-title text-2xl sm:text-4xl text-[var(--wine)]">Middle Notes (The Heart)</p>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)]">Duration: 15 mins-4 hrs</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {NOTE_PYRAMID.heart.map((note)=>{
                    const active=selection.heart===note;
                    return (
                      <motion.button
                        key={note}
                        onClick={()=>setSelection((prev)=>({...prev,heart:note}))}
                        className={`px-4 py-2.5 rounded-full border text-xs sm:text-sm font-semibold duration-200 ${
                          active
                            ? "bg-[#161412] text-white border-[#161412]"
                            : "bg-[color:rgba(255,255,255,0.6)] text-[color:var(--text)] border-[#161412]/20 hover:border-[#161412]/45"
                        }`}
                        whileHover={{ y:-3, scale:1.03 }}
                        whileTap={{ scale:0.97 }}
                        transition={{ duration:0.18 }}
                      >
                        {note}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity:0, y:18 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, amount:0.3 }}
                transition={{ delay:0.2, duration:0.4 }}
              >
                <div className="flex items-center justify-between mb-3 gap-3 flex-col sm:flex-row">
                  <p className="section-title text-2xl sm:text-4xl text-[var(--wine)]">Base Notes (The Soul)</p>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)]">Duration: 4-12 hrs</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {NOTE_PYRAMID.base.map((note)=>{
                    const active=selection.base===note;
                    return (
                      <motion.button
                        key={note}
                        onClick={()=>setSelection((prev)=>({...prev,base:note}))}
                        className={`px-4 py-2.5 rounded-full border text-xs sm:text-sm font-semibold duration-200 ${
                          active
                            ? "bg-[#161412] text-white border-[#161412]"
                            : "bg-[color:rgba(255,255,255,0.6)] text-[color:var(--text)] border-[#161412]/20 hover:border-[#161412]/45"
                        }`}
                        whileHover={{ y:-3, scale:1.03 }}
                        whileTap={{ scale:0.97 }}
                        transition={{ duration:0.18 }}
                      >
                        {note}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative bg-[#161412] rounded-lg border border-[#161412] p-4 md:p-5 text-[#f7f3ec] overflow-hidden h-fit self-start lg:justify-self-end w-full"
            initial={{ opacity:0, x:26 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, amount:0.25 }}
            transition={{ duration:0.5 }}
          >
            <p className="eyebrow text-[#d9c39a]">Recommended perfume</p>
            <p className="mt-2 text-sm text-[#d3c9bc] leading-6 max-w-[42ch]">
              One match based on your Top, Heart, and Base selections.
            </p>

            {bestMatch && (
              <motion.article
                onClick={()=>onPerfumeSelect?.(bestMatch)}
                className="mt-5 rounded-lg border border-white/14 p-4 sm:p-5 bg-white/[0.03] relative z-10 cursor-pointer"
                initial={{ opacity:0, y:18 }}
                animate={{ opacity:1, y:0 }}
                whileHover={{ y:-6 }}
                transition={{ duration:0.25 }}
              >
                <div className="rounded-lg overflow-hidden border border-white/10">
                  <img
                    src={bestMatch.image}
                    alt={`${bestMatch.name} perfume`}
                    className="w-full h-36 sm:h-44 object-cover image-treatment hover-zoom"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="title text-2xl sm:text-3xl leading-[1.05]">{bestMatch.name}</h3>
                    <p className="mt-2 text-[#d3c9bc]">
                      {bestMatch.family} • {bestMatch.concentration || "Signature"}
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-[#d3c9bc] leading-6">
                  {bestMatch.mood || bestMatch.bestFor || bestMatch.description}
                </p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Stars rating={bestMatch.rating} />
                    <p className="text-xs text-[#b8aea2]">{bestMatch.reviews || 0} reviews</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#b8aea2]">
                    {bestMatch.longevity || "Long wear"}
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-full bg-white/[0.08] px-3 py-2 text-center">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-[#b8aea2]">Top</p>
                    <p className="mt-1 text-xs font-semibold text-[#f0ddba] leading-4">{selection.top}</p>
                  </div>
                  <div className="rounded-full bg-white/[0.08] px-3 py-2 text-center">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-[#b8aea2]">Heart</p>
                    <p className="mt-1 text-xs font-semibold text-[#f0ddba] leading-4">{selection.heart}</p>
                  </div>
                  <div className="rounded-full bg-white/[0.08] px-3 py-2 text-center">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-[#b8aea2]">Base</p>
                    <p className="mt-1 text-xs font-semibold text-[#f0ddba] leading-4">{selection.base}</p>
                  </div>
                </div>

                <div className="mt-4 grid sm:grid-cols-3 gap-2">
                  <div className="rounded-md bg-white/[0.08] p-3">
                    <p className="text-xs uppercase tracking-[0.1em] text-[#b8aea2]">Top Notes</p>
                    <p className="mt-2 text-sm text-[#f0ddba]">{bestMatch.topNotes?.join(", ")}</p>
                  </div>
                  <div className="rounded-md bg-white/[0.08] p-3">
                    <p className="text-xs uppercase tracking-[0.1em] text-[#b8aea2]">Heart Notes</p>
                    <p className="mt-2 text-sm text-[#f0ddba]">{bestMatch.heartNotes?.join(", ")}</p>
                  </div>
                  <div className="rounded-md bg-white/[0.08] p-3">
                    <p className="text-xs uppercase tracking-[0.1em] text-[#b8aea2]">Base Notes</p>
                    <p className="mt-2 text-sm text-[#f0ddba]">{bestMatch.baseNotes?.join(", ")}</p>
                  </div>
                </div>

                <button
                  onClick={(e)=>{
                    e.stopPropagation();
                    onPerfumeSelect?.(bestMatch);
                  }}
                  className="mt-4 w-full rounded-full bg-[#f4d89b] text-[#161412] py-2.5 font-semibold"
                >
                  Open Details
                </button>
              </motion.article>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FragranceFinder;
