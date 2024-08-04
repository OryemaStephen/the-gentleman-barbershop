import PropTypes from "prop-types";
import image from "../assets/slider02.jpg";

const TeamBg = ({ title, text }) => {
  return (
    <div className="relative w-full h-[80vh] md:pt-[65px] pt-[50px]">
      <div
        className="w-full h-full bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full p-4 text-white">
        <div className="w-full text-center">
          <h2 className="py-5 text-3xl font-semibold md:text-5xl">{title}</h2>
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
