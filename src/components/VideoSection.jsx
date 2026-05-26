function VideoSection() {
  return (
    <section id="atelier" className="section bg-[#f7f3ec]">
      <div className="container-lux grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1600&auto=format&fit=crop"
            alt="Atelier perfume composition"
            className="w-full aspect-[4/5] object-cover rounded-lg soft-border image-treatment luxury-shadow"
          />
          <div className="absolute inset-4 border border-white/45 rounded-lg pointer-events-none"></div>
        </div>

        <div>
          <p className="eyebrow text-[#5c1f25] mb-5">Inside the atelier</p>

          <h2 className="title text-5xl sm:text-6xl md:text-7xl max-w-3xl">
            Crafted
            <br />
            With Quiet Precision
          </h2>

          <p className="mt-7 max-w-2xl text-lg md:text-xl leading-8 text-muted">
            Every bottle is macerated in small batches, checked by hand, and finished with weighty glass made to sit beautifully in a designed space.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
