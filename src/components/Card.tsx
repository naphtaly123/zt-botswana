// import React, { useState } from "react";
// import { FiX } from "react-icons/fi";

// interface CardProps {
//   title: string;
//   description: string;
//   benefits: string[];
//   target: string[];
//   icon: React.ReactNode;
// }

// const Card: React.FC<CardProps> = ({
//   title,
//   description,
//   benefits,
//   target,
//   icon,
// }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <>
//       {/* Card */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start space-y-4 self-start h-full">
//         {/* Icon */}
//         <div className="text-[#000D51] text-3xl">{icon}</div>

//         {/* Title */}
//         <h3 className="text-lg font-semibold text-[#000D51]">{title}</h3>

//         {/* Description (always truncated) */}
//         <div className="text-gray-600 text-sm line-clamp-5">
//           <p>{description}</p>
//         </div>

//         {/* Details Button */}
//         <div className="flex justify-between items-center w-full mt-auto">
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={toggleModal}
//               className="flex items-center text-blue-600 font-medium hover:text-blue-800"
//             >
//               Details 
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal/Popup */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             {/* Modal Header */}
//             <div className="sticky top-0 bg-white p-6 pb-4 border-b flex justify-between items-start">
//               <div className="flex items-start space-x-4">
//                 <div className="text-[#000D51] text-3xl">{icon}</div>
//                 <h3 className="text-xl font-semibold text-[#000D51]">
//                   {title}
//                 </h3>
//               </div>
//               <button
//                 onClick={toggleModal}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <FiX size={24} />
//               </button>
//             </div>

//             {/* Modal Content */}
//             <div className="p-6 space-y-6">
//               {/* Description */}
//               <div>
//                 <p className="text-gray-700">{description}</p>
//               </div>

//               {/* Benefits */}
//               <div>
//                 <p className="font-semibold text-[#000D51]">Key benefits</p>
//                 <ul className="space-y-2 mt-2">
//                   {benefits.map((item, index) => (
//                     <li key={index} className="flex items-start">
//                       <span className="text-primary-500 mr-2">•</span>
//                       <span className="text-gray-700">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Target */}
//               <div>
//                 <p className="font-semibold text-[#000D51]">
//                   Who does it benefit?
//                 </p>
//                 <ul className="space-y-2 mt-2">
//                   {target.map((item, index) => (
//                     <li key={index} className="flex items-start">
//                       <span className="text-primary-500 mr-2">•</span>
//                       <span className="text-gray-700">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Modal Footer */}
//             <div className="sticky bottom-0 bg-white p-4 border-t flex justify-end">
//               <button
//                 onClick={toggleModal}
//                 className="px-4 py-2 bg-[#6496B3] text-white rounded hover:bg-opacity-90"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Card;
// import React, { useState, useRef, useEffect } from "react";
// import { FiX } from "react-icons/fi";

// interface CardProps {
//   title: string;
//   description: string;
//   benefits: string[];
//   target: string[];
//   icon: React.ReactNode;
// }

// const Card: React.FC<CardProps> = ({
//   title,
//   description,
//   benefits,
//   target,
//   icon,
// }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const modalRef = useRef<HTMLDivElement>(null);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   // Close modal when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
//         setIsModalOpen(false);
//       }
//     };

//     if (isModalOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//       // Disable body scroll when modal is open
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.body.style.overflow = "auto";
//     };
//   }, [isModalOpen]);

//   return (
//     <>
//       {/* Card */}
//       <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start space-y-4 self-start h-full">
//         {/* Icon */}
//         <div className="text-[#000D51] text-3xl">{icon}</div>

//         {/* Title */}
//         <h3 className="text-lg font-semibold text-[#000D51]">{title}</h3>

//         {/* Description (always truncated) */}
//         <div className="text-gray-600 text-sm line-clamp-5">
//           <p>{description}</p>
//         </div>

//         {/* Details Button */}
//         <div className="flex justify-between items-center w-full mt-auto">
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={toggleModal}
//               className="flex items-center text-blue-600 font-medium hover:text-blue-800"
//             >
//               Details 
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal/Popup */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
//           <div 
//             ref={modalRef}
//             className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-col"
//           >
//             {/* Modal Header */}
//             <div className="sticky top-0 bg-white p-6 pb-4 border-b flex justify-between items-start z-10">
//               <div className="flex items-start space-x-4">
//                 <div className="text-[#000D51] text-3xl">{icon}</div>
//                 <h3 className="text-xl font-semibold text-[#000D51]">
//                   {title}
//                 </h3>
//               </div>
//               <button
//                 onClick={toggleModal}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <FiX size={24} />
//               </button>
//             </div>

//             {/* Scrollable Modal Content */}
//             <div className="p-6 space-y-6 overflow-y-auto flex-1">
//               {/* Description */}
//               <div>
//                 <p className="text-gray-700">{description}</p>
//               </div>

//               {/* Benefits */}
//               <div>
//                 <p className="font-semibold text-[#000D51]">Key benefits</p>
//                 <ul className="space-y-2 mt-2">
//                   {benefits.map((item, index) => (
//                     <li key={index} className="flex items-start">
//                       <span className="text-primary-500 mr-2">•</span>
//                       <span className="text-gray-700">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Target */}
//               <div>
//                 <p className="font-semibold text-[#000D51]">
//                   Who does it benefit?
//                 </p>
//                 <ul className="space-y-2 mt-2">
//                   {target.map((item, index) => (
//                     <li key={index} className="flex items-start">
//                       <span className="text-primary-500 mr-2">•</span>
//                       <span className="text-gray-700">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Modal Footer */}
//             <div className="sticky bottom-0 bg-white p-4 border-t flex justify-end">
//               <button
//                 onClick={toggleModal}
//                 className="px-4 py-2 bg-[#6496B3] text-white rounded hover:bg-opacity-90"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Card;
import React, { useState, useRef, useEffect } from "react";
import { FiX } from "react-icons/fi";

interface CardProps {
  title: string;
  description: string;
  benefits: string[];
  target: string[];
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  benefits,
  target,
  icon,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      // Disable body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      // Re-enable body scroll when modal closes
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Card */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start space-y-4 self-start h-full">
        {/* Icon */}
        <div className="text-[#000D51] text-3xl">{icon}</div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#000D51]">{title}</h3>

        {/* Description (always truncated) */}
        <div className="text-gray-600 text-sm line-clamp-5">
          <p>{description}</p>
        </div>

        {/* Details Button */}
        <div className="flex justify-between items-center w-full mt-auto">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleModal}
              className="flex items-center text-blue-600 font-medium hover:text-blue-800"
            >
              Details 
            </button>
          </div>
        </div>
      </div>

      {/* Modal/Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          {/* Modal container - doesn't scroll */}
          <div 
            ref={modalRef}
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white p-6 pb-4 border-b flex justify-between items-start z-10">
              <div className="flex items-start space-x-4">
                <div className="text-[#000D51] text-3xl">{icon}</div>
                <h3 className="text-xl font-semibold text-[#000D51]">
                  {title}
                </h3>
              </div>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Scrollable content area */}
            <div ref={contentRef}
              className="overflow-y-auto overscroll-contain p-6 space-y-6 touch-pan-y"
              onTouchStart={(e) => {
                // Only allow scrolling if content is scrollable
                const isScrollable = e.currentTarget.scrollHeight > e.currentTarget.clientHeight;
                if (!isScrollable) e.preventDefault();
              }}>
              {/* Description */}
              <div>
                <p className="text-gray-700">{description}</p>
              </div>

              {/* Benefits */}
              <div>
                <p className="font-semibold text-[#000D51]">Key benefits</p>
                <ul className="space-y-2 mt-2">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target */}
              <div>
                <p className="font-semibold text-[#000D51]">
                  Who does it benefit?
                </p>
                <ul className="space-y-2 mt-2">
                  {target.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white p-4 border-t flex justify-end">
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-[#6496B3] text-white rounded hover:bg-opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;