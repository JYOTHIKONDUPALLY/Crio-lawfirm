import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Introduction from "./components/Introduction/introduction";
import AreaOfPractices from "./components/AreaOfPractices/AreaOfPractices";
import OurTeam from "./components/Our team/OurTeam";
import Subscribe from "./components/Subscribe/Subscribe";
import Faq from "./components/FAQ/Faq"
import Footer from "./components/Footer/Footer";
import CarouselComponent from "./components/Carousel/Carousel";

export default function App() {
  return (
    <div className="App">
      <div className="section1">  
        <Header />
      <HeroSection /></div>

      <Introduction/>
      <AreaOfPractices/>
      <CarouselComponent/>
      <OurTeam/>
      <Faq/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}
