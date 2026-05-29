import LineBackdrop from "./LineBackdrop";

function VideoSection() {
  return (
    <section id="atelier" className="section tone-6 relative overflow-hidden">
      <LineBackdrop variant="panel" className="opacity-20 mix-blend-multiply" />
      <div className="container-lux relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-center text-center lg:text-left">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1600&auto=format&fit=crop"
            alt="Atelier perfume composition"
            className="w-full aspect-[4/5] object-cover rounded-lg soft-border image-treatment luxury-shadow hover-zoom"
          />
          <div className="absolute inset-4 border border-white/45 rounded-lg pointer-events-none"></div>
        </div>

        <div>
          <p className="eyebrow text-[var(--wine)] mb-5">Inside the atelier</p>

          <h2 className="section-title text-5xl sm:text-6xl md:text-7xl max-w-3xl">
            Crafted
            <br />
            With <span className="highlight">Quiet Precision</span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg md:text-xl leading-8 text-muted section-copy">
            We blend in small batches, let the oils settle, then check each bottle by hand before it leaves the studio.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
