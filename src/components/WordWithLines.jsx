// import React from 'react';
import PropTypes from "prop-types";

const WordWithLines = ({ text }) => {
  return (
    <div className="flex items-center justify-center my-4 w-2/3 sm:w-1/3 mx-auto">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-xl font-semibold italic">{text}</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

WordWithLines.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WordWithLines;
