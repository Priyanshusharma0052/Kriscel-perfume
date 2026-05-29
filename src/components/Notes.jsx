import { motion } from "framer-motion";

function Notes() {
  const notes=[
    {
      title:"Opening",
      items:["Bergamot","Saffron","Pink pepper"],
      copy:"A polished first impression with citrus brightness and dry spice."
    },
    {
      title:"Heart",
      items:["Rose absolute","Iris","Jasmine smoke"],
      copy:"A soft floral center with cosmetic powder and evening warmth."
    },
    {
      title:"Base",
      items:["Oud","Amber resin","White musk"],
      copy:"A deep, lingering finish that settles close to skin and fabric."
    }
  ];

  return (
    <section id="notes" className="section tone-9">

      <div className="container-lux">

        <div className="max-w-3xl mb-14">
          <p className="eyebrow text-[var(--wine)] mb-4">Fragrance architecture</p>
          <h2 className="section-title text-5xl md:text-7xl">
            Built in <span className="highlight">layers</span>, like a room after dusk.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">

          {notes.map((note,index)=>(

            <motion.article
              key={note.title}
              className="border border-[#161412]/12 rounded-lg p-7 bg-[color:rgba(255,255,255,0.62)] luxury-shadow"
              initial={{ opacity:0, y:26 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, amount:0.25 }}
              whileHover={{ y:-6 }}
              transition={{ duration:0.4 }}
            >

              <p className="eyebrow text-[var(--gold)] mb-6">
                0{index+1}
              </p>

              <h3 className="section-title text-4xl mb-5">
                {note.title}
              </h3>

              <ul className="space-y-3 text-xl text-[color:var(--text)] serif">
                {note.items.map((item)=>(
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="mt-8 leading-7 text-muted section-copy">
                {note.copy}
              </p>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Notes;
