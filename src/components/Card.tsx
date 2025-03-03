import React from "react";
import { FiArrowRight } from "react-icons/fi";

interface CardProps {
  title: string;
  description: string;
  detailsLink: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, detailsLink, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start space-y-4">
      {/* Icon */}
      <div className="text-[#000D51] text-3xl">{icon}</div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#000D51]">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm">{description}</p>

      {/* Details Button */}
      <a
        href={detailsLink}
        className="flex items-center text-blue-600 font-medium hover:text-blue-800"
      >
        Details <FiArrowRight className="ml-2" />
      </a>
    </div>
  );
};

export default Card;
