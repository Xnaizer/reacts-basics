
const starStyle = {
    width: "48px",
    height: "48px",
    cursor: "pointer",
    display: "blox",
};

const starColor = "#FFD700";

function Star({handleRating, full, onHoverIn, onHoverOut, size}) {
    return (
        <span style={starStyle} role="button" onClick={handleRating} onMouseOver={onHoverIn} onMouseOut={onHoverOut}>
            {full? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={starColor}
                stroke={starColor}
                width={`${size}px`}
                height={`${size}px`}
              >
                <path
                  d="M12 2.25l2.57 5.03a1 1 0 00.95.69h5.3c.97 0 1.36 1.24.59 1.81l-4.31 3.14a1 1 0 00-.36 1.12l1.65 5.09c.3.92-.76 1.69-1.54 1.12l-4.31-3.14a1 1 0 00-1.18 0l-4.31 3.14c-.78.57-1.84-.2-1.54-1.12l1.65-5.09a1 1 0 00-.36-1.12L3.44 10.58c-.77-.57-.38-1.81.59-1.81h5.3a1 1 0 00.95-.69L12 2.25z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke={starColor}
                width={`${size}px`}
                height={`${size}px`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>  
            )
            }
            
        </span>

    );
}

export default Star;