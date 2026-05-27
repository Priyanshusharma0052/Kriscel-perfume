import { motion } from "framer-motion";

function Testimonials() {
  const reviews=[
    ["The drydown is rich without being loud. It feels like wearing a tailored black jacket.","Aarav M."],
    ["The bottle looks beautiful on my console, and the amber lasts through the whole evening.","Meera K."],
    ["Elegant, warm, and memorable. The oud is polished, never harsh.","Rhea S."]
  ];

  function colorize(quote){
    const parts=quote.split(/(drydown|amber|oud)/i);
    return parts.map((part,index)=>{
      const lower=part.toLowerCase();
      if(lower==="drydown") return <span key={index} className="highlight-2">{part}</span>;
      if(lower==="amber" || lower==="oud") return <span key={index} className="highlight">{part}</span>;
      return <span key={index}>{part}</span>;
    });
  }

  return (
    <section id="reviews" className="section tone-4">

      <div className="container-lux">

        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10">

          <div>
            <p className="eyebrow text-[var(--wine)] mb-4">Client notes</p>
            <h2 className="section-title text-5xl md:text-7xl">
              Worn, <span className="highlight">noticed</span>, remembered.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {reviews.map(([quote,name])=>(

              <motion.article
                key={name}
                className="border border-[#161412]/12 rounded-lg p-6 bg-[color:rgba(255,255,255,0.62)] luxury-shadow"
                initial={{ opacity:0, y:26 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, amount:0.24 }}
                whileHover={{ y:-6 }}
                transition={{ duration:0.4 }}
              >

                <p className="text-lg text-[color:var(--text)] leading-8 section-copy">

                  {colorize(quote)}

                </p>

                <h3 className="section-title text-3xl mt-9 text-[var(--gold)]">

                  {name}

                </h3>

              </motion.article>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
