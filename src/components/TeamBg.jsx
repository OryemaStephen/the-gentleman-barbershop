import PropTypes from "prop-types";
import image from "../assets/slider02.jpg";

const TeamBg = ({ title, text }) => {
  return (
    <div className="relative w-full h-[80vh] md:pt-[65px] pt-[50px]">
      <div
        className="w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 text-white">
        <div className="w-full text-center">
          <h2 className="text-3xl md:text-5xl py-5 font-semibold">{title}</h2>
          <p className="text-lg">{text}</p>
        </div>
      </div>
    </div>
  );
};

TeamBg.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TeamBg;
