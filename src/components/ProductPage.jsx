import { useState } from "react";
import LineBackdrop from "./LineBackdrop";

function ProductPage({onPerfumeSelect,onRequestAvailability}) {
  const [size,setSize]=useState("50ml");
  const prices={
    "50ml":8999,
    "100ml":12999
  };

  const selectedPrice=prices[size];
  const featuredPerfume={
    id:`velvet-noir-${size}`,
    name:"Velvet Noir",
    image:"https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1200&auto=format&fit=crop",
    family:"Amber Floral",
    concentration:"Extrait",
    notes:["Rose smoke","Oud","Amber","Vanilla","Musk"],
    description:"Rose and oud up front, amber underneath, and a smooth vanilla-musk finish that stays close all night.",
    price:selectedPrice
  };

  return (
    <section id="shop" className="section tone-5 relative overflow-hidden">
      <LineBackdrop variant="panel" className="opacity-16 mix-blend-multiply" />
      <div className="container-lux relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div className="relative">
          <div className="absolute inset-6 border border-[color:rgba(255,255,255,0.55)]"></div>
          <img
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop"
            alt="Velvet Noir perfume bottle"
            className="relative w-full aspect-[4/5] object-cover image-treatment hover-zoom"
          />
        </div>

        <div>

          <p className="eyebrow text-[var(--wine)] mb-4">Featured extrait</p>

          <h2 className="section-title text-4xl sm:text-5xl md:text-7xl">

            Velvet <span className="highlight">Noir</span>

          </h2>

          <p className="mt-6 md:mt-7 text-base sm:text-xl md:text-2xl text-muted leading-7 sm:leading-9 md:leading-10 section-copy">
            Think <span className="highlight">rose</span> wrapped in <span className="highlight">oud</span>, warmed by <span className="highlight">amber</span>, finished with vanilla and a clean musk.

          </p>

          <div className="mt-8 md:mt-9 grid grid-cols-3 border-y border-[#161412]/12">
            {["Extrait","Unisex","Refillable"].map((item)=>(
              <p key={item} className="py-3.5 md:py-4 text-[11px] sm:text-sm font-semibold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-muted border-r border-[#161412]/12 last:border-r-0 text-center">
                {item}
              </p>
            ))}
          </div>

          <p className="mt-8 md:mt-9 text-sm sm:text-base text-muted section-copy">
            Want availability for your city? Tap <span className="highlight-2">Request Availability</span> and we’ll reply with details.
          </p>

          <div className="flex flex-wrap gap-3 mt-7 md:mt-8">

            <button
              onClick={()=>setSize("50ml")}
              className={`px-5 sm:px-7 py-3 rounded-full font-semibold border text-sm sm:text-base ${
                size==="50ml"
                  ? "border-[#161412] bg-[#161412] text-white"
                  : "border-[#161412]/25 text-[#161412]"
              }`}
            >

              50ml

            </button>

            <button
              onClick={()=>setSize("100ml")}
              className={`px-5 sm:px-7 py-3 rounded-full font-semibold border text-sm sm:text-base ${
                size==="100ml"
                  ? "border-[#161412] bg-[#161412] text-white"
                  : "border-[#161412]/25 text-[#161412]"
              }`}
            >

              100ml

            </button>

          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-7 md:mt-8">
            <button
              onClick={()=>onPerfumeSelect(featuredPerfume)}
              className="w-full sm:w-auto bg-[#161412] text-white px-7 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold"
            >
              View Full Details
            </button>
            <button
              onClick={()=>onRequestAvailability(featuredPerfume)}
              className="w-full sm:w-auto bg-[var(--wine)] text-white px-7 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold"
            >
            Request Availability
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductPage;
