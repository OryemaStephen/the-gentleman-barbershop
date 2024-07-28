import AboutBg from "../components/AboutBg";
import AboutHistory from "../components/AboutHistory";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="lg:pt-[75px] pt-[50px]">
      <AboutHistory />
      <AboutBg />
      <Footer />
    </div>
  );
};

export default About;
