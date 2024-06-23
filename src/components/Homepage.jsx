import PropTypes from "prop-types";

const Homepage = ({ className = "" }) => {
  return (
    <>
    <img
      className={`absolute top-[0px] left-[0px] w-[1440px] h-[846px] object-cover ${className}`}
      alt=""
      src="/raghavanngttythlqwnuunsplash-1@2x.png"
    />
    </>
  );
};

Homepage.propTypes = {
  className: PropTypes.string,
};

export default Homepage;
