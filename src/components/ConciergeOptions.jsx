const options=[
  {
    id:"discovery-kit",
    title:"Discovery Kit",
    copy:"Five 2ml extrait samples tailored to your note profile.",
    price:1499
  },
  {
    id:"gift-wrap",
    title:"Signature Gift Wrap",
    copy:"Lacquered box, silk ribbon, and handwritten card.",
    price:699
  },
  {
    id:"scent-consult",
    title:"1:1 Scent Consultation",
    copy:"15-minute online session with a fragrance specialist.",
    price:999
  }
];

function ConciergeOptions() {
  return (
    <section id="options" className="section bg-[#f3e9db]">
      <div className="container-lux">
        <div className="max-w-3xl">
          <p className="eyebrow text-[#5c1f25] mb-4">More options</p>
          <h2 className="title text-4xl sm:text-5xl md:text-7xl">Concierge Services & Gifting</h2>
          <p className="mt-6 md:mt-7 text-base sm:text-lg md:text-xl text-muted leading-7 md:leading-8">
            Build a complete luxury experience with sampling, gifting, and one-on-one fragrance guidance.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {options.map((item)=>(
            <article key={item.id} className="bg-[#f7f3ec] soft-border rounded-lg p-6 luxury-shadow">
              <h3 className="title text-3xl sm:text-4xl">{item.title}</h3>
              <p className="mt-4 text-muted leading-7">{item.copy}</p>
              <p className="mt-5 text-2xl font-semibold gold">₹{item.price.toLocaleString("en-IN")}</p>
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
