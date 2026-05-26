function CartSection({items,onIncrement,onDecrement,onCheckout}) {
  const total=items.reduce((sum,item)=>sum+item.price*item.quantity,0);

  return (
    <section id="cart" className="section bg-[#14100e] text-[#f7f3ec]">
      <div className="container-lux grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
        <div>
          <p className="eyebrow text-[#d9c39a] mb-4">Your selection</p>
          <h2 className="title text-5xl md:text-7xl">Shopping Cart</h2>

          <div className="mt-8 space-y-4">
            {items.length===0 && (
              <p className="text-[#c9bfb3] text-lg leading-8">
                Your cart is empty. Add perfumes or experiences from sections above.
              </p>
            )}

            {items.map((item)=>(
              <article key={item.id} className="rounded-lg border border-white/14 bg-white/[0.03] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="title text-4xl">{item.name}</h3>
                    {item.meta && <p className="mt-2 text-[#c9bfb3]">{item.meta}</p>}
                    <p className="mt-2 text-[#d9c39a] text-lg font-semibold">₹{item.price.toLocaleString("en-IN")}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={()=>onDecrement(item.id)}
                      className="w-9 h-9 rounded-full border border-white/20"
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={()=>onIncrement(item.id)}
                      className="w-9 h-9 rounded-full border border-white/20"
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-lg border border-white/16 bg-[#1c1714] p-6">
          <p className="eyebrow text-[#d9c39a] mb-4">Order summary</p>
          <div className="flex items-center justify-between">
            <p className="text-[#c9bfb3]">Items</p>
            <p className="font-semibold">{items.reduce((sum,item)=>sum+item.quantity,0)}</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-[#c9bfb3]">Estimated total</p>
            <p className="title text-4xl text-[#f0ddba]">₹{total.toLocaleString("en-IN")}</p>
          </div>
          <button
            onClick={onCheckout}
            disabled={!items.length}
            className="mt-6 w-full rounded-full bg-[#f4d89b] text-[#161412] py-4 font-semibold disabled:opacity-45 disabled:cursor-not-allowed"
          >
            Proceed To Checkout
          </button>
        </aside>
      </div>
    </section>
  );
}

export default CartSection;
