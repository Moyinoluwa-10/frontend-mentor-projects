import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";

function App() {
  return (
    <div className="bg-egg-shell flex flex-col items-center justify-center gap-10 sm:py-10 sm:px-5 font-outfit">
      <div className="w-full max-w-[700px] bg-white sm:p-8 sm:rounded-2xl text-wenge-brown">
        <Hero />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
      <Footer />
    </div>
  );
}

export default App;

