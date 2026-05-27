import { useState } from "react";

function AboutPage() {
  return (
    <section className="section tone-1 pt-28 md:pt-32">
      <div className="container-lux">
        <p className="eyebrow text-[var(--wine)] mb-4">About NOIR</p>
        <h1 className="title text-4xl sm:text-5xl md:text-7xl max-w-4xl">A Modern Luxury Fragrance House</h1>
        <p className="mt-6 md:mt-7 max-w-4xl text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-muted">
          NOIR creates refined perfumes rooted in material quality, olfactive depth, and architectural restraint.
          Our compositions are built in layers to evolve beautifully from first spray to final drydown.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <article className="bg-white soft-border rounded-lg p-6 luxury-shadow">
            <h3 className="title text-3xl sm:text-4xl">Our Craft</h3>
            <p className="mt-4 text-muted leading-7">
              Small-batch maceration and careful blending for long-lasting, elegant projection.
            </p>
          </article>
          <article className="bg-white soft-border rounded-lg p-6 luxury-shadow">
            <h3 className="title text-3xl sm:text-4xl">Our Materials</h3>
            <p className="mt-4 text-muted leading-7">
              Sourced naturals and premium aroma molecules selected for richness and clarity.
            </p>
          </article>
          <article className="bg-white soft-border rounded-lg p-6 luxury-shadow">
            <h3 className="title text-3xl sm:text-4xl">Our Vision</h3>
            <p className="mt-4 text-muted leading-7">
              Fragrances that feel timeless, personal, and confidently modern across seasons.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function CareersPage() {
  const roles=[
    {
      title:"Fragrance Consultant",
      location:"Mumbai, India",
      type:"Full-time",
      copy:"Guide clients to the right perfumes through note profiling and product storytelling."
    },
    {
      title:"Creative Content Designer",
      location:"Remote",
      type:"Contract",
      copy:"Create premium visual and editorial content for campaigns, launches, and social channels."
    },
    {
      title:"Retail Experience Lead",
      location:"Delhi, India",
      type:"Full-time",
      copy:"Own in-store service quality, training, and customer journey excellence."
    }
  ];

  return (
    <section className="section tone-2 pt-28 md:pt-32">
      <div className="container-lux">
        <p className="eyebrow text-[var(--wine)] mb-4">Careers</p>
        <h1 className="title text-4xl sm:text-5xl md:text-7xl max-w-4xl">Build Luxury Experiences With Us</h1>
        <p className="mt-6 md:mt-7 max-w-4xl text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-muted">
          We are building a team of people who care deeply about craft, hospitality, and design.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role)=>(
            <article key={role.title} className="bg-white soft-border rounded-lg p-6 luxury-shadow">
              <h3 className="title text-3xl sm:text-4xl">{role.title}</h3>
              <p className="mt-3 text-sm uppercase tracking-[0.12em] text-[#6c635b]">{role.location} • {role.type}</p>
              <p className="mt-4 text-muted leading-7">{role.copy}</p>
              <a
                href="mailto:careers@noirfragrance.com?subject=Career%20Application"
                className="mt-5 inline-block rounded-full bg-[#161412] text-white px-5 py-2.5 text-sm font-semibold"
              >
                Apply Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  const [form,setForm]=useState({
    name:"",
    email:"",
    subject:"",
    message:""
  });

  function updateField(key,value){
    setForm((prev)=>({...prev,[key]:value}));
  }

  function handleSubmit(e){
    e.preventDefault();
    window.alert(`Thanks ${form.name || "there"}! We have received your message and will reply soon.`);
    setForm({name:"",email:"",subject:"",message:""});
  }

  return (
    <section className="section tone-1 pt-28 md:pt-32">
      <div className="container-lux grid lg:grid-cols-[1fr_1.1fr] gap-8">
        <div>
          <p className="eyebrow text-[var(--wine)] mb-4">Contact</p>
          <h1 className="title text-4xl sm:text-5xl md:text-7xl">Talk To Our Concierge</h1>
          <p className="mt-6 md:mt-7 text-base sm:text-lg md:text-xl text-muted leading-7 md:leading-8">
            For product guidance, gifting support, and order help, contact our team directly.
          </p>
          <div className="mt-8 space-y-3 text-[#2a2623]">
            <p><span className="font-semibold">Email:</span> concierge@noirfragrance.com</p>
            <p><span className="font-semibold">Phone:</span> +91 98765 43210</p>
            <p><span className="font-semibold">Studio:</span> Mumbai, Maharashtra</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white soft-border rounded-lg p-6 luxury-shadow space-y-4">
          <input
            required
            value={form.name}
            onChange={(e)=>updateField("name",e.target.value)}
            placeholder="Your name"
            className="w-full rounded-lg border border-[#161412]/20 px-4 py-3"
          />
          <input
            required
            type="email"
            value={form.email}
            onChange={(e)=>updateField("email",e.target.value)}
            placeholder="Email address"
            className="w-full rounded-lg border border-[#161412]/20 px-4 py-3"
          />
          <input
            value={form.subject}
            onChange={(e)=>updateField("subject",e.target.value)}
            placeholder="Subject"
            className="w-full rounded-lg border border-[#161412]/20 px-4 py-3"
          />
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e)=>updateField("message",e.target.value)}
            placeholder="How can we help?"
            className="w-full rounded-lg border border-[#161412]/20 px-4 py-3"
          />
          <button className="w-full rounded-full bg-[#161412] text-white py-3.5 font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function TermsPage() {
  return (
    <section className="section tone-2 pt-28 md:pt-32">
      <div className="container-lux max-w-4xl">
        <p className="eyebrow text-[var(--wine)] mb-4">Legal</p>
        <h1 className="title text-4xl sm:text-5xl md:text-7xl">Terms & Conditions</h1>
        <div className="mt-8 space-y-6 text-[#2a2623] leading-8">
          <p>
            By using NOIR services, you agree to our product, order, and service terms.
            Availability, pricing, and delivery windows may vary by location and season.
          </p>
          <p>
            Product visuals and fragrance descriptions are for guidance. Final perception may vary by skin chemistry and environment.
          </p>
          <p>
            For special consultations, custom gift requests, or high-volume orders, additional timelines and confirmation steps may apply.
          </p>
        </div>
      </div>
    </section>
  );
}

function PoliciesPage() {
  return (
    <section className="section tone-1 pt-28 md:pt-32">
      <div className="container-lux max-w-4xl">
        <p className="eyebrow text-[var(--wine)] mb-4">Legal</p>
        <h1 className="title text-4xl sm:text-5xl md:text-7xl">Policies</h1>
        <div className="mt-8 space-y-6 text-[#2a2623] leading-8">
          <p>
            <span className="font-semibold">Shipping:</span> Orders are processed in 1-3 business days and delivered according to courier timelines.
          </p>
          <p>
            <span className="font-semibold">Returns:</span> Unopened products may be eligible for return within 7 days from delivery, subject to quality checks.
          </p>
          <p>
            <span className="font-semibold">Privacy:</span> Your contact information is used only for order, support, and concierge communication.
          </p>
          <p>
            <span className="font-semibold">Support:</span> For policy clarifications, contact concierge@noirfragrance.com.
          </p>
        </div>
      </div>
    </section>
  );
}

function InfoPages({page}) {
  if(page==="about") return <AboutPage />;
  if(page==="careers") return <CareersPage />;
  if(page==="contact") return <ContactPage />;
  if(page==="terms") return <TermsPage />;
  if(page==="policies") return <PoliciesPage />;
  return null;
}

export default InfoPages;
