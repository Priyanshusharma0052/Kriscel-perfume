import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";

function BottleModel() {
  return (
    <group>
      <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.75, 0.95, 2.2, 64]} />
        <meshPhysicalMaterial
          color="#1c1716"
          metalness={0.15}
          roughness={0.25}
          transmission={0.18}
          thickness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.08}
        />
      </mesh>

      <mesh position={[0, 1.6, 0]} castShadow>
        <cylinderGeometry args={[0.33, 0.33, 0.55, 48]} />
        <meshStandardMaterial color="#141010" metalness={0.75} roughness={0.25} />
      </mesh>

      <mesh position={[0, -0.45, 0.93]} castShadow>
        <planeGeometry args={[1.05, 0.5]} />
        <meshStandardMaterial color="#b1925b" metalness={0.2} roughness={0.5} />
      </mesh>
    </group>
  );
}

function BottleShowcase3D() {
  return (
    <section id="showcase" className="section bg-[#efe5d8]">
      <div className="container-lux grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p className="eyebrow text-[#5c1f25] mb-4">3D signature bottle</p>
          <h2 className="title text-4xl sm:text-5xl md:text-7xl">Designed Like A Luxury Object.</h2>
          <p className="mt-6 md:mt-7 text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-muted max-w-xl">
            Rotate and inspect the NOIR bottle from every angle. We crafted the visual to feel substantial, architectural, and premium.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            <div className="bg-[#f7f3ec] rounded-lg soft-border p-4 rise-float">
              <p className="eyebrow text-[#a77f37]">Material</p>
              <p className="mt-2 text-lg font-semibold">Heavy Smoked Glass</p>
            </div>
            <div className="bg-[#f7f3ec] rounded-lg soft-border p-4 rise-float" style={{ animationDelay:"0.6s" }}>
              <p className="eyebrow text-[#a77f37]">Finish</p>
              <p className="mt-2 text-lg font-semibold">Matte Noir Cap</p>
            </div>
          </div>
        </div>

        <div className="h-[360px] sm:h-[420px] md:h-[560px] rounded-lg overflow-hidden soft-border luxury-shadow bg-[radial-gradient(circle_at_30%_20%,#f8efe2_0%,#e4d5c0_45%,#d7c3a8_100%)]">
          <Canvas shadows camera={{ position: [2.8, 1.8, 3.2], fov: 38 }}>
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[4, 5, 3]}
              intensity={1.4}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <directionalLight position={[-3, 2, -2]} intensity={0.55} />

            <Float speed={1.2} rotationIntensity={0.45} floatIntensity={0.6}>
              <BottleModel />
            </Float>

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.08, 0]} receiveShadow>
              <circleGeometry args={[3.1, 64]} />
              <meshStandardMaterial color="#cfb590" roughness={0.9} />
            </mesh>

            <Environment preset="city" />
            <OrbitControls
              enablePan={false}
              minDistance={2.7}
              maxDistance={5.2}
              minPolarAngle={Math.PI / 3.2}
              maxPolarAngle={Math.PI / 1.8}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default BottleShowcase3D;
