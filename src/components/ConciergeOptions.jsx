import LineBackdrop from "./LineBackdrop";

const options=[
  {
    id:"discovery-kit",
    title:"Discovery Kit",
    copy:"Five 2ml extrait samples picked around the notes you actually like.",
    price:1499
  },
  {
    id:"gift-wrap",
    title:"Signature Gift Wrap",
    copy:"A clean gift box, ribbon, and a short handwritten note.",
    price:699
  },
  {
    id:"scent-consult",
    title:"1:1 Scent Consultation",
    copy:"A quick 15‑minute call to narrow down what suits you.",
    price:999
  }
];

function ConciergeOptions() {
  return (
    <section id="options" className="section tone-11 relative overflow-hidden">
      <LineBackdrop variant="panel" className="opacity-16 mix-blend-multiply" />
      <div className="container-lux relative">
        <div className="max-w-3xl">
          <p className="eyebrow text-[var(--wine)] mb-4">More options</p>
          <h2 className="section-title text-4xl sm:text-5xl md:text-7xl">Concierge <span className="highlight">Services</span> & <span className="highlight-2">Gifting</span></h2>
          <p className="mt-6 md:mt-7 text-base sm:text-lg md:text-xl text-muted leading-7 md:leading-8 section-copy">
            Sampling, gifting, and one-on-one <span className="highlight">fragrance</span> help—simple, quick, and personal.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {options.map((item)=>(
            <article key={item.id} className="bg-[color:rgba(251,232,206,0.75)] soft-border rounded-lg p-6 luxury-shadow">
              <h3 className="title text-3xl sm:text-4xl">{item.title}</h3>
              <p className="mt-4 text-muted leading-7">{item.copy}</p>
              <p className="mt-5 text-sm text-muted">
                Pricing shared on request.
              </p>
              <button className="mt-5 w-full rounded-full bg-[#161412] text-white py-3 font-semibold">
                Learn More
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConciergeOptions;
