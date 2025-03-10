import React, { useState } from "react";
import {  FiArrowUp, FiArrowDown } from "react-icons/fi"; // #FiArrowRight,

interface CardProps {
  title: string;
  description: string;
  // detailsLink: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start space-y-4 self-start">
      {/* Icon */}
      <div className="text-[#000D51] text-3xl">{icon}</div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#000D51]">{title}</h3>

      {/* Description */}
      <p className={`text-gray-600 text-sm ${isExpanded ? "" : "line-clamp-3"}`}>
        {description}
      </p>

      {/* Button and Learn More Link */}
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-4">
          {/* Details/Collapse Button */}
          <button
            onClick={toggleExpand}
            className="flex items-center text-blue-600 font-medium hover:text-blue-800"
          >
            {isExpanded ? "Collapse" : "Details"}{" "}
            {isExpanded ? (
              <FiArrowUp className="ml-2" />
            ) : (
              <FiArrowDown className="ml-2" />
            )}
          </button>

          {/* Learn More Link (visible only when expanded) */}
          {/* {isExpanded && (
            <a
              href={detailsLink}
              className="flex items-center text-blue-600 font-medium hover:text-blue-800"
            >
              Learn More <FiArrowRight className="ml-2" />
            </a>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Card;