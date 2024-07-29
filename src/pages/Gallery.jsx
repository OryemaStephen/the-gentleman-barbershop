import Brands from "../components/Brands";
import Footer from "../components/Footer";
import OurGallery from "../components/OurGallery";

const Gallery = () => {
  return (
    <div className="w-full h-full pt-10">
      <OurGallery />
      <Brands />
      <Footer />
    </div>
  );
};

export default Gallery;
