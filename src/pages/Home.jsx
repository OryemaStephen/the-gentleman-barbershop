import AboutBg from "../components/AboutBg";
import AboutShop from "../components/AboutShop";
import Footer from "../components/Footer";
import HomeCarousel from "../components/HomeCarousel";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <AboutShop />
      <AboutBg />
      <Footer />
    </div>
  );
};

export default Home;
