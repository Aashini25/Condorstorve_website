import PropTypes from "prop-types";

const Secondpageimg = ({ className = "" }) => {
  return (
    <img
      className={`absolute top-[846px] left-[0px] w-[1440px] h-[979px] object-cover ${className}`}
      alt=""
      src="/image-195@2x.png"
    />
  );
};

Secondpageimg.propTypes = {
  className: PropTypes.string,
};

export default Secondpageimg;
