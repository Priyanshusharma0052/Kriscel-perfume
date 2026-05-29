import { motion } from "framer-motion";

const variants={
  hero:{
    viewBox:"0 0 1200 800",
    paths:[
      "M778 120c44 0 78 34 78 78v58c0 24 16 46 39 54 53 18 89 68 89 124v160c0 80-65 145-145 145H706c-80 0-145-65-145-145V434c0-56 36-106 89-124 23-8 39-30 39-54v-58c0-44 34-78 78-78h11z",
      "M808 176c24 14 43 34 55 60",
      "M735 176c-22 14-38 34-48 60",
      "M686 392c54-28 112-42 174-42 58 0 112 10 162 30",
      "M696 512c66 40 136 60 210 60 58 0 108-10 150-30",
      "M845 286c34 24 64 54 90 90",
      "M708 610c58 18 128 26 210 26"
    ]
  },
  panel:{
    viewBox:"0 0 900 600",
    paths:[
      "M236 88c56-34 118-52 184-52 66 0 126 16 180 48",
      "M192 170c42-30 90-52 144-66 70-18 142-18 214 0 58 14 110 36 156 66",
      "M170 318c52-74 120-120 204-138 74-16 146-10 218 18 62 24 114 62 156 114",
      "M222 470c58 22 126 32 204 32 90 0 172-16 246-48 28-12 60-28 96-48",
      "M418 82c6 72 6 144 0 216-8 84-24 148-48 192"
    ]
  }
};

function LineBackdrop({variant="hero",className=""}) {
  const data=variants[variant] || variants.hero;
  const isHero=variant==="hero";
  const gradientId=`line-grad-${variant}`;
  const startColor=isHero ? "rgba(255,255,255,0.08)" : "rgba(20,16,24,0.08)";
  const midColor=isHero ? "rgba(255,255,255,0.78)" : "rgba(125,89,200,0.58)";
  const endColor=isHero ? "rgba(255,255,255,0.14)" : "rgba(20,16,24,0.20)";
  const secondaryStroke=isHero ? "rgba(255,255,255,0.30)" : "rgba(20,16,24,0.26)";

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.svg
        viewBox={data.viewBox}
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={startColor} />
            <stop offset="45%" stopColor={midColor} />
            <stop offset="100%" stopColor={endColor} />
          </linearGradient>
        </defs>

        <g fill="none" stroke={`url(#${gradientId})`} strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round">
          {data.paths.map((path)=>(
            <motion.path
              key={path}
              d={path}
              initial={{ opacity: 0.9 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              style={{
                strokeDasharray: variant==="hero" ? "14 14" : "18 10",
                strokeDashoffset: 0
              }}
            />
          ))}

          <motion.path
            d="M120 540c108-86 222-128 342-128 124 0 238 42 342 128"
            stroke={secondaryStroke}
            strokeWidth="2"
            strokeDasharray="8 12"
          />

          <motion.path
            d="M360 148c30-18 64-28 100-28s70 10 100 28"
            stroke={secondaryStroke}
            strokeWidth="1.8"
            strokeDasharray="8 16"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default LineBackdrop;
