import { useState } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  
};

const containerStarStyle = {
  display: "flex",
};

// const textStyle = {
//   lineHeight: "1",
//   margin: "0",
// };

function StarRating({ max = 5, size = 20, onSetRating }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={containerStarStyle}>
        {Array.from({ length: max }, (_, index) => (
          <Star
            key={index}
            handleRating={() => handleRating(index + 1)}
            full={tempRating ? tempRating >= index + 1 : rating >= index + 1}
            onHoverIn ={() => setTempRating(index + 1)}
            onHoverOut={() => setTempRating(0)}
            size={size}
          />
        ))}
      </div>
      
    </div>
  );
}

StarRating.propTypes = {
  max: PropTypes.number,
  size: PropTypes.number,
};

export default StarRating;
