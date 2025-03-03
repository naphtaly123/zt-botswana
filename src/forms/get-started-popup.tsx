import { useState } from "react";

function GetStartedBtn() {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative z-0 justify-center items-center h-6 mb-14">
      {/* Trigger Button */}

      <div className="relative inline-flex  group mt-1">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#bbcde8] to-[#Fff] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <button
          id="openContactForm"
          className="relative inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-[#6496B3] transition-all duration-200 bg-white font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
          onClick={openModal} // Trigger openModal on click
        >
          Get Started
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="contactFormModal"
          className="fixed z-10 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white w-1/2 p-6 rounded shadow-md">
              <div className="flex justify-end">
                {/* Close Button */}
                <button
                  id="closeContactForm"
                  className="text-gray-700 hover:text-red-500"
                  onClick={closeModal} // Trigger closeModal on click
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

              <form action="https://fabform.io/f/{form-id}" method="post">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetStartedBtn;
