import React from "react";

const StarRating = ({ rating = 0, maxStars = 5, size = "w-6 h-6" }) => {
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    const fillPercentage = Math.min(Math.max(rating - (i - 1), 0), 1);

    stars.push(
      <div key={i} className="relative inline-block">
        {/* Gray background star */}
        <svg
          className={`${size} text-text-default-tertiary`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>

        {/* Yellow filled portion */}
        <div
          className="absolute top-0 left-0 overflow-hidden"
          style={{ width: `${fillPercentage * 100}%` }}
        >
          <svg
            className={`${size} text-background-warning-default`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>,
    );
  }

  return (
    <div className="flex items-center space-x-1">
      <div className="flex">{stars}</div>
      <span className="ml-2 text-sm text-gray-600 font-medium">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;
