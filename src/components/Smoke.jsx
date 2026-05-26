const smokeClouds=[
  {top:"8%",left:"6%",size:"520px",opacity:0.14},
  {top:"16%",left:"58%",size:"460px",opacity:0.12},
  {top:"36%",left:"24%",size:"540px",opacity:0.1},
  {top:"54%",left:"70%",size:"500px",opacity:0.13},
  {top:"72%",left:"10%",size:"430px",opacity:0.09},
  {top:"78%",left:"48%",size:"560px",opacity:0.11}
];

function Smoke() {

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {smokeClouds.map((cloud,index)=>(

        <div
          key={index}
          className="absolute bg-white blur-[120px] rounded-full animate-pulse"
          style={{
            top:cloud.top,
            left:cloud.left,
            width:cloud.size,
            height:cloud.size,
            opacity:cloud.opacity
          }}
        ></div>

      ))}

    </div>
  );
}

export default Smoke;
