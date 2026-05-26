import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FEATURED_OCCASIONAL_IDS, PERFUMES } from "../data/perfumes";

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
          className={`text-sm ${state==="empty" ? "text-[#c8beb1]" : "text-[#a77f37]"}`}
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

  return (
    <section className="section bg-[#e8dfd3]">
      <div className="container-lux">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <p className="eyebrow text-[#5c1f25] mb-4">Occasional edit</p>
            <h2 className="title text-5xl md:text-7xl">
              Objects of desire.
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <p className="max-w-xl text-lg leading-8 text-muted">
              Heavy glass, precise atomizers, and quiet labels designed to belong on a marble console.
            </p>
            <label className="text-sm font-semibold uppercase tracking-[0.12em] text-[#5f5750]">
              Occasion
              <select
                value={selectedOccasion}
                onChange={(e)=>setSelectedOccasion(e.target.value)}
                className="ml-3 bg-[#f7f3ec] border border-[#161412]/20 rounded-full px-4 py-2 text-sm font-semibold"
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
              className="bg-[#f7f3ec] rounded-lg overflow-hidden soft-border luxury-shadow cursor-pointer"
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, amount:0.22 }}
              whileHover={{ y:-8 }}
              transition={{ duration:0.45 }}
            >
              <img
                src={item.image}
                alt={`${item.name} perfume`}
                className="h-[390px] w-full object-cover image-treatment"
              />

              <div className="p-7">
                <h3 className="title text-4xl">
                  {item.name}
                </h3>

                <p className="mt-3 text-muted">
                  {item.mood || item.note}
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
                    <p className="gold font-semibold text-lg">
                      ₹{item.price.toLocaleString("en-IN")}
                      {item.mrp && (
                        <span className="ml-2 text-sm text-[#7a6e61] line-through">
                          ₹{item.mrp.toLocaleString("en-IN")}
                        </span>
                      )}
                    </p>
                    {item.emi && (
                      <p className="mt-1 text-xs text-[#6c635b]">
                        or <span className="font-semibold text-[#2a2623]">₹{item.emi.toLocaleString("en-IN")}</span>/month
                      </p>
                    )}
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
