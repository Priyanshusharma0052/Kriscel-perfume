const particles=[
  ["8%","12%"],["14%","78%"],["20%","42%"],["28%","88%"],["34%","18%"],
  ["39%","63%"],["46%","32%"],["52%","73%"],["59%","9%"],["66%","51%"],
  ["72%","85%"],["80%","24%"],["88%","68%"],["16%","6%"],["44%","94%"]
];

function Particles() {

  return (
    <div className="absolute inset-0 overflow-hidden">

      {particles.map(([top,left],index)=>(

        <div
          key={index}
          className="absolute w-2 h-2 bg-[#D4AF37] rounded-full opacity-30 animate-pulse"
          style={{
            top,
            left
          }}
        ></div>

      ))}

    </div>
  );
}

export default Particles;
