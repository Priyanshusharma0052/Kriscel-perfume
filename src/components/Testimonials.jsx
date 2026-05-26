import { motion } from "framer-motion";

function Testimonials() {
  const reviews=[
    ["The drydown is rich without being loud. It feels like wearing a tailored black jacket.","Aarav M."],
    ["The bottle looks beautiful on my console, and the amber lasts through the whole evening.","Meera K."],
    ["Elegant, warm, and memorable. The oud is polished, never harsh.","Rhea S."]
  ];

  return (
    <section id="reviews" className="section bg-[#f7f3ec]">

      <div className="container-lux">

        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10">

          <div>
            <p className="eyebrow text-[#5c1f25] mb-4">Client notes</p>
            <h2 className="title text-5xl md:text-7xl">
              Worn, noticed, remembered.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {reviews.map(([quote,name])=>(

              <motion.article
                key={name}
                className="border border-[#161412]/12 rounded-lg p-6 bg-white luxury-shadow"
                initial={{ opacity:0, y:26 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, amount:0.24 }}
                whileHover={{ y:-6 }}
                transition={{ duration:0.4 }}
              >

                <p className="text-lg text-[#2a2623] leading-8">

                  {quote}

                </p>

                <h3 className="title text-3xl mt-9 text-[#a77f37]">

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
