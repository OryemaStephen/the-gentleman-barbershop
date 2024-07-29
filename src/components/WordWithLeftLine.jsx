// import React from 'react';
import PropTypes from "prop-types";

const WordWithLeftLines = ({ text }) => {
  return (
    <div className="flex items-center justify-left mt-10 w-40 text-[#edc384]">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-3 text-lg font-semibold italic">{text}</span>
    </div>
  );
};

WordWithLeftLines.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WordWithLeftLines;
