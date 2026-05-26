import { useEffect, useState } from "react";

import Lenis from "lenis";

import Loader from "./components/Loader";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Notes from "./components/Notes";
import LuxurySlider from "./components/LuxurySlider";
import BottleShowcase3D from "./components/BottleShowcase3D";
import ProductPage from "./components/ProductPage";
import BestSellers from "./components/BestSellers";
import FragranceFinder from "./components/FragranceFinder";
import ConciergeOptions from "./components/ConciergeOptions";
import VideoSection from "./components/VideoSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import PerfumeDetailsModal from "./components/PerfumeDetailsModal";
import InfoPages from "./components/InfoPages";

function App() {
  const [currentPage,setCurrentPage]=useState("home");
  const [selectedPerfume,setSelectedPerfume]=useState(null);
  const [startWithAvailability,setStartWithAvailability]=useState(false);

  useEffect(()=>{

    const lenis=new Lenis();

    function raf(time){

      lenis.raf(time);

      requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);

  },[]);

  useEffect(()=>{
    function syncPageFromHash(){
      const hash=window.location.hash.replace("#","");
      if(hash==="about" || hash==="careers" || hash==="contact" || hash==="terms" || hash==="policies"){
        setCurrentPage(hash);
        window.scrollTo({top:0,behavior:"auto"});
        return;
      }
      setCurrentPage("home");
    }

    syncPageFromHash();
    window.addEventListener("hashchange",syncPageFromHash);
    return ()=>window.removeEventListener("hashchange",syncPageFromHash);
  },[]);

  function openPerfumeDetails(perfume){
    setStartWithAvailability(false);
    setSelectedPerfume(perfume);
  }

  function openAvailability(perfume){
    setStartWithAvailability(true);
    setSelectedPerfume(perfume);
  }

  function closePerfumeModal(){
    setSelectedPerfume(null);
    setStartWithAvailability(false);
  }

  return (
    <>

      <Loader />

      <CursorGlow />

      <Navbar />

      {currentPage==="home" ? (
        <>
          <Hero />

          <Collection onPerfumeSelect={openPerfumeDetails} />

          <LuxurySlider onPerfumeSelect={openPerfumeDetails} />

          <BottleShowcase3D />

          <Notes />

          <FragranceFinder onPerfumeSelect={openPerfumeDetails} />

          <ProductPage onPerfumeSelect={openPerfumeDetails} onRequestAvailability={openAvailability} />

          <BestSellers onPerfumeSelect={openPerfumeDetails} />

          <ConciergeOptions />

          <VideoSection />

          <Testimonials />
        </>
      ) : (
        <InfoPages page={currentPage} />
      )}

      <Footer />

      {selectedPerfume && (
        <PerfumeDetailsModal
          perfume={selectedPerfume}
          onClose={closePerfumeModal}
          startWithAvailability={startWithAvailability}
        />
      )}

    </>
  );
}

export default App;
