import { useState } from "react";

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
    image:"https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop",
    family:"Amber Floral",
    concentration:"Extrait",
    notes:["Rose smoke","Oud","Amber","Vanilla","Musk"],
    description:"A luxurious fragrance crafted with rose smoke, oud, amber, vanilla, and a velvet-soft musk that wears close after midnight.",
    price:selectedPrice
  };

  return (
    <section id="shop" className="section bg-[#f7f3ec]">

      <div className="container-lux grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div className="relative">
          <div className="absolute inset-6 border border-[#a77f37]/30"></div>
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop"
            alt="Velvet Noir perfume bottle"
            className="relative w-full aspect-[4/5] object-cover image-treatment"
          />
        </div>

        <div>

          <p className="eyebrow text-[#5c1f25] mb-4">Featured extrait</p>

          <h2 className="title text-4xl sm:text-5xl md:text-7xl">

            Velvet Noir

          </h2>

          <p className="mt-6 md:mt-7 text-base sm:text-xl md:text-2xl text-muted leading-7 sm:leading-9 md:leading-10">

            A luxurious fragrance crafted with rose smoke, oud, amber, vanilla, and a velvet-soft musk that wears close after midnight.

          </p>

          <div className="mt-8 md:mt-9 grid grid-cols-3 border-y border-[#161412]/12">
            {["Extrait","Unisex","Refillable"].map((item)=>(
              <p key={item} className="py-3.5 md:py-4 text-[11px] sm:text-sm font-semibold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-muted border-r border-[#161412]/12 last:border-r-0 text-center">
                {item}
              </p>
            ))}
          </div>

          <h3 className="text-4xl sm:text-5xl mt-8 md:mt-9 gold title">₹{selectedPrice.toLocaleString("en-IN")}</h3>

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
              className="w-full sm:w-auto bg-[#5c1f25] text-white px-7 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold"
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
