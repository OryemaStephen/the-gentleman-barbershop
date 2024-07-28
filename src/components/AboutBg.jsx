import image from '../assets/shavemybeard.png'
import image1 from '../assets/slider01.jpg'

const AboutBg = () => {
    return (
      <div className="relative w-full h-[80vh]">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${image1})`,
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 text-white backdrop-blur-sm">
          <div>
            <img src={image} alt='Shave my beard image' />
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutBg;
  