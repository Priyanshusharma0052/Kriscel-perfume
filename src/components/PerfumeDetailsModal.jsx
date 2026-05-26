import { useState } from "react";

function Stars({rating=0}) {
  const full=Math.floor(rating);
  const hasHalf=rating-full>=0.5;
  const stars=[0,1,2,3,4].map((i)=>{
    if(i<full) return "full";
    if(i===full && hasHalf) return "half";
    return "empty";
  });
  return (
    <div className="flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
      {stars.map((state,index)=>(
        <span
          key={index}
          className={`text-sm ${state==="empty" ? "text-[#c8beb1]" : "text-[#a77f37]"}`}
        >
          {state==="half" ? "⯨" : "★"}
        </span>
      ))}
    </div>
  );
}

function PerfumeDetailsModal({perfume,onClose,startWithAvailability=false}) {
  const [showForm,setShowForm]=useState(startWithAvailability);
  const [form,setForm]=useState({
    name:"",
    email:"",
    city:"",
    message:`I am interested in ${perfume?.name || "this perfume"}. Please share availability details.`
  });

  if(!perfume) return null;

  function updateField(key,value){
    setForm((prev)=>({...prev,[key]:value}));
  }

  function submitAvailability(e){
    e.preventDefault();
    window.alert(`Thanks ${form.name || "there"}! Our NOIR concierge will contact you at ${form.email || "your email"} shortly.`);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-5xl bg-[#f7f3ec] rounded-lg overflow-hidden max-h-[95vh] overflow-y-auto">
        <div className="grid lg:grid-cols-2">
          <div className="bg-[#e8ddd0]">
            <img
              src={perfume.image}
              alt={`${perfume.name} perfume`}
              className="w-full h-full min-h-[260px] sm:min-h-[340px] object-cover image-treatment"
            />
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-[#5c1f25] mb-3">{perfume.concentration || "Signature perfume"}</p>
                <h3 className="title text-4xl sm:text-5xl md:text-6xl">{perfume.name}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Stars rating={perfume.rating || 0} />
                    <p className="text-xs sm:text-sm text-[#6c635b]">{perfume.reviews || 0} reviews</p>
                  </div>
                  <span className="text-xs sm:text-sm uppercase tracking-[0.12em] text-[#6c635b]">{perfume.family || "Luxury collection"}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#161412]/20 text-xl"
                aria-label="Close details modal"
              >
                ×
              </button>
            </div>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted leading-7 sm:leading-8">
              {perfume.description || perfume.mood || perfume.note || "A refined composition created for modern luxury wear."}
            </p>

            {perfume.notes?.length>0 && (
              <div className="mt-5">
                <p className="eyebrow text-[#a77f37] mb-3">Notes</p>
                <div className="flex flex-wrap gap-2">
                  {perfume.notes.map((item)=>(
                    <span key={item} className="px-3 py-1.5 rounded-full bg-white border border-[#161412]/12 text-xs sm:text-sm font-semibold">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div className="flex items-baseline gap-3">
                <p className="title text-3xl sm:text-4xl gold">₹{Number(perfume.price || 0).toLocaleString("en-IN")}</p>
                {perfume.mrp && (
                  <p className="text-sm text-[#7a6e61] line-through">
                    ₹{Number(perfume.mrp).toLocaleString("en-IN")}
                  </p>
                )}
              </div>
              {perfume.emi && (
                <p className="text-xs sm:text-sm text-[#6c635b]">
                  or <span className="font-semibold text-[#2a2623]">₹{Number(perfume.emi).toLocaleString("en-IN")}</span>/month
                </p>
              )}
            </div>

            {(perfume.topNotes?.length || perfume.heartNotes?.length || perfume.baseNotes?.length) && (
              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                {perfume.topNotes?.length>0 && (
                  <div className="rounded-lg bg-white border border-[#161412]/12 p-3">
                    <p className="text-xs uppercase tracking-[0.12em] text-[#6c635b] font-semibold">Top</p>
                    <p className="mt-2 text-sm text-[#2a2623]">{perfume.topNotes.join(", ")}</p>
                  </div>
                )}
                {perfume.heartNotes?.length>0 && (
                  <div className="rounded-lg bg-white border border-[#161412]/12 p-3">
                    <p className="text-xs uppercase tracking-[0.12em] text-[#6c635b] font-semibold">Heart</p>
                    <p className="mt-2 text-sm text-[#2a2623]">{perfume.heartNotes.join(", ")}</p>
                  </div>
                )}
                {perfume.baseNotes?.length>0 && (
                  <div className="rounded-lg bg-white border border-[#161412]/12 p-3">
                    <p className="text-xs uppercase tracking-[0.12em] text-[#6c635b] font-semibold">Base</p>
                    <p className="mt-2 text-sm text-[#2a2623]">{perfume.baseNotes.join(", ")}</p>
                  </div>
                )}
              </div>
            )}

            {(perfume.longevity || perfume.sillage || perfume.bestFor) && (
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {perfume.longevity && (
                  <div className="rounded-md bg-[#f1e8da] px-3 py-2.5 text-center">
                    <p className="text-[11px] uppercase tracking-[0.1em] text-[#756d66]">Longevity</p>
                    <p className="text-xs font-semibold mt-1">{perfume.longevity}</p>
                  </div>
                )}
                {perfume.sillage && (
                  <div className="rounded-md bg-[#f1e8da] px-3 py-2.5 text-center">
                    <p className="text-[11px] uppercase tracking-[0.1em] text-[#756d66]">Sillage</p>
                    <p className="text-xs font-semibold mt-1">{perfume.sillage}</p>
                  </div>
                )}
                {perfume.bestFor && (
                  <div className="rounded-md bg-[#f1e8da] px-3 py-2.5 text-center">
                    <p className="text-[11px] uppercase tracking-[0.1em] text-[#756d66]">Best For</p>
                    <p className="text-xs font-semibold mt-1">{perfume.bestFor}</p>
                  </div>
                )}
              </div>
            )}

            {!showForm && (
              <button
                onClick={()=>setShowForm(true)}
                className="mt-7 w-full rounded-full bg-[#5c1f25] text-white py-4 font-semibold"
              >
                Request Availability
              </button>
            )}

            {showForm && (
              <form onSubmit={submitAvailability} className="mt-7 space-y-3">
                <input
                  required
                  value={form.name}
                  onChange={(e)=>updateField("name",e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-[#161412]/20 bg-white px-4 py-3"
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e)=>updateField("email",e.target.value)}
                  placeholder="Email address"
                  className="w-full rounded-lg border border-[#161412]/20 bg-white px-4 py-3"
                />
                <input
                  value={form.city}
                  onChange={(e)=>updateField("city",e.target.value)}
                  placeholder="City"
                  className="w-full rounded-lg border border-[#161412]/20 bg-white px-4 py-3"
                />
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e)=>updateField("message",e.target.value)}
                  className="w-full rounded-lg border border-[#161412]/20 bg-white px-4 py-3"
                />
                <button className="w-full rounded-full bg-[#161412] text-white py-3.5 font-semibold">
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfumeDetailsModal;
