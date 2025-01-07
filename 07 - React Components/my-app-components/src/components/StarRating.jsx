import { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const containerStarStyle = {
  display: "flex",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

function StarRating({ max }) {
  const [rating, setRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={containerStarStyle}>
        {Array.from({ length: max }, (_, index) => (
          <Star
            key={index}
            handleRating={() => handleRating(index + 1)}
            full={rating >= index + 1}
          />
        ))}
      </div>
      <p style={textStyle}>{rating} Stars</p>
    </div>
  );
}

export default StarRating;
