import Banner from "../componets/Banner";
import Footer from "../componets/Footer";
import AboutMe from "../componets/AboutMe";
import Training from "../componets/Training";
import Instagram from "../componets/Instagram";
import Projects from "../componets/Projects";
import Ability from "../componets/Ability";
import Contact from "../componets/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Training/>
      <Ability/>
      <Projects/>
      <Instagram/>
      <Footer/>
    </div>
  );
};

export default Home;
