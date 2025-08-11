import { useState } from "react";
import axios from "axios";
import { validateInput, validateEmail } from "./form-validations";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";


import toast from "react-hot-toast";

function GetStartedBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const [subject, setSubject] = useState("");
  const [subjectVerify, setSubjectVerify] = useState(false);

  const [email, setEmail] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);

  const [message, setMessage] = useState("");
  const [messageVerify, setMessageVerify] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setApiError(null); // Clear API errors when modal closes
  };

  const handleSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSubject(value);
    setSubjectVerify(validateInput(value, 2));
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailVerify(validateEmail(value));
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);
    setMessageVerify(validateInput(value, 2));
  };

  const handleSubmit = async () => {
    if (!emailVerify) {
      toast.error("email format is not allowed");
      return;
    }
    
    if (!subjectVerify || !messageVerify) {
      toast.error("Subject or message body is too short.");
      return;
    }

    setIsLoading(true);
    setApiError(null);

    try {
      const userData = { subject, email, message };
      const response = await axios.post(
        "https://zt-botswana.onrender.com/mail/send-email/general/",
        // "http://127.0.0.1:8000/mail/send-email/general/",
        userData
      );

      console.log("Response:", response.data);
      // alert("Email sent successfully!");
      toast.success("Email sent successfully!")

      // Reset form
      setSubject("");
      setSubjectVerify(false);
      setEmail("");
      setEmailVerify(false);
      setMessage("");
      setMessageVerify(false);
      closeModal(); // Close modal after successful submission
    } catch (error) {
      console.error("Error:", error);
      setApiError("An error occurred while sending the email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative z-10 justify-center items-center px-10 h-6 mb-5 text-black">
      {/* Trigger Button */}
      <div className="relative inline-flex group mt-1">
        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#bbcde8] to-[#Fff] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <button
          id="openContactForm"
          className="relative inline-flex items-center justify-center px-2 py-1 text-lg text-[#6496B3] transition-all duration-200 bg-white font-pj rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
          onClick={openModal}
        >
          Get in Touch
        </button>
        {/* <button
        id="openContactForm"
          onClick={openModal}
          className="bg-white text-[#6496B3] sm:text-sm border-white px-6 mx-8 py-2 rounded transition duration-300 ease-in-out hover:bg-sky-400 hover:shadow-lg hover:scale-105"
        >
          Get in Touch
        </button> */}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            id="contactFormModal"
            className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white/20 backdrop-blur-lg rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 border border-white/10"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-end">
                <button
                  id="closeContactForm"
                  className="text-red-700 hover:text-red-400"
                  onClick={closeModal}
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
              <section className="py-6">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                  {/* Contact Information */}
                  <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold text-white">
                      Get in touch
                    </h1>
                    <p className="pt-2 pb-4 text-gray-200">
                      Does your business need SAP/IT solutions or you are not
                      sure? Fill the form for more information.
                    </p>
                    <div className="space-y-4 text-gray-200">
                      <p className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 sm:mr-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>
                          Sunshine Office Park, Plot 50361 Block C ,
                          Fairgrounds, Gaborone, Botswana
                        </span>
                      </p>
                      <p className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 sm:mr-6"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                        <span>(+267) 3980469 / 3980416 | (+27) 630593833</span>
                      </p>
                      <p className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 sm:mr-6"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        <span>
                          <a href="mailto:info@zimele.co.bw">
                            info@zimele.co.bw
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* Form */}
                  <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        onChange={handleSubject}
                        placeholder="subject"
                        className="block w-full rounded-md bg-white/20 backdrop-blur-sm py-3 px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />

                      {subject.length > 0 && (
                        <div className="absolute right-4 top-3">
                          {subjectVerify ? (
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                          ) : (
                            <MdErrorOutline className="text-red-500" />
                          )}
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleEmail}
                        placeholder="enter your email"
                        className="block w-full rounded-md bg-white/20 backdrop-blur-sm py-3 px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />

                      {email.length > 0 && (
                        <div className="absolute right-4 top-3">
                          {emailVerify ? (
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                          ) : (
                            <MdErrorOutline className="text-red-500" />
                          )}
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        onChange={handleMessage}
                        placeholder="message"
                        className="block w-full rounded-md bg-white/20 backdrop-blur-sm py-3 px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>

                      {message.length > 0 && (
                        <div className="absolute right-4 top-3">
                          {messageVerify ? (
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                          ) : (
                            <MdErrorOutline className="text-red-500" />
                          )}
                        </div>
                      )}
                    </div>
                    {apiError && (
                      <p className="text-white text-center">{apiError}</p>
                    )}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="self-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:shadow-lg"
                    >
                      {isLoading ? "Sending..." : "Submit"}
                    </button>
                  </form>
                </div>
              </section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GetStartedBtn;
