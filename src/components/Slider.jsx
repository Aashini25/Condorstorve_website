import PropTypes from "prop-types";

const Slider = ({ className = "" }) => {
  return (
    <img
      className={`absolute top-[0px] left-[374px] rounded-3xs w-[350px] h-[647px] object-cover ${className}`}
      alt=""
      src="/rectangle-20@2x.png"
    />
  );
};

Slider.propTypes = {
  className: PropTypes.string,
};

export default Slider;
