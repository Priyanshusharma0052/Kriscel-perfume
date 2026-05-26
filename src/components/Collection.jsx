import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

import { PERFUMES } from "../data/perfumes";

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
    <section id="collection" className="section bg-[#f7f3ec]">

      <div className="container-lux">

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-end mb-14">

          <div>
            <p className="eyebrow text-[#5c1f25] mb-4">The collection</p>
            <h2 className="title text-5xl md:text-7xl">
              Signature fragrances for rooms, rituals, and evenings.
            </h2>
          </div>

          <p className="text-lg md:text-xl leading-8 text-muted max-w-2xl">
            Inspired by the restraint of luxury interiors, each scent is composed like a finished room: texture first, light second, memory last.
          </p>

        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:items-center md:justify-end mb-8">
          <label className="text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[#5f5750]">
            Family
            <select
              value={selectedFamily}
              onChange={(e)=>setSelectedFamily(e.target.value)}
              className="mt-2 md:mt-0 md:ml-3 w-full md:w-auto bg-white border border-[#161412]/20 rounded-full px-4 py-2 text-sm font-semibold"
            >
              <option value="All">All</option>
              <option value="Amber">Amber</option>
              <option value="Woody">Woody</option>
              <option value="Fresh">Fresh</option>
              <option value="Floral">Floral</option>
            </select>
          </label>

          <label className="text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[#5f5750]">
            Concentration
            <select
              value={selectedConcentration}
              onChange={(e)=>setSelectedConcentration(e.target.value)}
              className="mt-2 md:mt-0 md:ml-3 w-full md:w-auto bg-white border border-[#161412]/20 rounded-full px-4 py-2 text-sm font-semibold"
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
                className="bg-white soft-border rounded-lg overflow-hidden hover:-translate-y-2 duration-500 luxury-shadow cursor-pointer"
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, amount:0.25 }}
                whileHover={{ y:-10, rotate:-0.3 }}
                transition={{ duration:0.5 }}
              >
                <div className="aspect-[4/5] bg-[#eee5d9]">
                  <img
                    src={item.image}
                    alt={`${item.name} perfume bottle`}
                    className="w-full h-full object-cover image-treatment"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="eyebrow text-[#a77f37] mb-3 text-[11px] sm:text-xs">
                    0{index+1} / {item.concentration}
                  </p>

                  <h3 className="text-3xl sm:text-4xl title">
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
                      View
                    </button>
                  </div>

                  <div className="mt-4 space-y-2 text-xs sm:text-sm text-[#5f5750]">
                    <p><span className="font-semibold text-[#2a2623]">Top:</span> {item.topNotes.join(", ")}</p>
                    <p><span className="font-semibold text-[#2a2623]">Heart:</span> {item.heartNotes.join(", ")}</p>
                    <p><span className="font-semibold text-[#2a2623]">Base:</span> {item.baseNotes.join(", ")}</p>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="rounded-md bg-[#f1e8da] px-2 py-2 text-center">
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#756d66]">Longevity</p>
                      <p className="text-xs font-semibold mt-1">{item.longevity}</p>
                    </div>
                    <div className="rounded-md bg-[#f1e8da] px-2 py-2 text-center">
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#756d66]">Sillage</p>
                      <p className="text-xs font-semibold mt-1">{item.sillage}</p>
                    </div>
                    <div className="rounded-md bg-[#f1e8da] px-2 py-2 text-center">
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#756d66]">Best For</p>
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
