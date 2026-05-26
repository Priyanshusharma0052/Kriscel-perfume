const products = [

  {
    id:"midnight-oud",
    name:"Midnight Oud",
    family:"Woody",
    concentration:"Extrait",
    price:7999,
    label:"Smoky oud and amber",
    notes:["Oud","Amber","Musk"],
    image:"https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop"
  },

  {
    id:"royal-noir",
    name:"Royal Noir",
    family:"Floral",
    concentration:"Parfum",
    price:9499,
    label:"Iris, suede, black tea",
    notes:["Iris","Black tea","Suede musk"],
    image:"https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop"
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

  return (
    <section className="section bg-[#efe6d9]">

      <div className="container-lux">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="eyebrow text-[#5c1f25] mb-4">Most requested</p>
          <h2 className="title text-5xl md:text-7xl">
            Best Sellers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {products.map((item,index)=>(

            <article
              key={index}
              onClick={()=>onPerfumeSelect(item)}
              className="bg-[#f7f3ec] rounded-lg overflow-hidden soft-border luxury-shadow cursor-pointer"
            >

              <img
                src={item.image}
                alt={`${item.name} perfume`}
                className="h-[330px] w-full object-cover image-treatment"
              />

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="title text-4xl">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-muted">
                      {item.label}
                    </p>
                  </div>

                  <p className="gold text-xl font-semibold">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
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
