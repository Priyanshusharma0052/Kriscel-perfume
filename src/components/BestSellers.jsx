import LineBackdrop from "./LineBackdrop";

const products = [

  {
    id:"midnight-oud",
    name:"Midnight Oud",
    family:"Woody",
    concentration:"Extrait",
    price:7999,
    label:"Smoky oud and amber",
    notes:["Oud","Amber","Musk"],
    image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1200&auto=format&fit=crop"
  },

  {
    id:"royal-noir",
    name:"Royal Noir",
    family:"Floral",
    concentration:"Parfum",
    price:9499,
    label:"Iris, suede, black tea",
    notes:["Iris","Black tea","Suede musk"],
    image:"https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop"
  },

  {
    id:"velvet-amber",
    name:"Velvet Amber",
    family:"Amber",
    concentration:"Extrait",
    price:8299,
    label:"Resin, tonka, vanilla",
    notes:["Resin","Tonka","Vanilla"],
    image:"https://images.unsplash.com/photo-1587304655801-beb15c4dfd25?q=80&w=1200&auto=format&fit=crop"
  }

];

function BestSellers({onPerfumeSelect}) {
  function colorize(label){
    const parts=label.split(/(oud|amber|musk|iris|suede|vanilla|tonka)/i);
    return parts.map((part,index)=>{
      const lower=part.toLowerCase();
      if(["oud","amber","musk","vanilla","tonka"].includes(lower)) return <span key={index} className="highlight">{part}</span>;
      if(["iris","suede"].includes(lower)) return <span key={index} className="highlight-2">{part}</span>;
      return <span key={index}>{part}</span>;
    });
  }

  return (
    <section className="section tone-8 relative overflow-hidden">
      <LineBackdrop variant="panel" className="opacity-16 mix-blend-multiply" />
      <div className="container-lux relative">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="eyebrow text-[var(--wine)] mb-4">Most requested</p>
          <h2 className="section-title text-5xl md:text-7xl">
            Best <span className="highlight">Sellers</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {products.map((item,index)=>(

            <article
              key={index}
              onClick={()=>onPerfumeSelect(item)}
              className="bg-[color:rgba(251,232,206,0.75)] rounded-lg overflow-hidden soft-border luxury-shadow cursor-pointer"
            >

              <img
                src={item.image}
                alt={`${item.name} perfume`}
                className="h-[330px] w-full object-cover image-treatment hover-zoom"
              />

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="section-title text-4xl">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-muted section-copy">
                      {colorize(item.label)}
                    </p>
                  </div>

                </div>

                <button
                  onClick={(e)=>{
                    e.stopPropagation();
                    onPerfumeSelect(item);
                  }}
                  className="mt-7 w-full bg-[#161412] text-white px-7 py-4 rounded-full font-semibold"
                >
                  View Details
                </button>
              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default BestSellers;
