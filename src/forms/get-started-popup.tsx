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
        "https://zt-botswana.onrender.com/mail/send-email/sendmailgraph/",
        userData
      );

      console.log("Response:", response.data);
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
    <>
      {/* Trigger Button */}
      <div className="relative inline-flex group w-full sm:w-auto justify-center sm:justify-start">
        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#bbcde8] to-[#Fff] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt hidden sm:block"></div>
        <button
          id="openContactForm"
          className="relative text-white transition-all duration-200 bg-transparent border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
            px-4 py-2 text-base w-full max-w-xs sm:max-w-none sm:px-6 hover:bg-white hover:text-[#6496B3]"
          onClick={openModal}
        >
          Get in Touch
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            id="contactFormModal"
            className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-70 flex items-center justify-center p-3 md:p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white/20 backdrop-blur-lg rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <button
                  id="closeContactForm"
                  className="text-white hover:text-red-400 text-2xl"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
              <section className="py-4 md:py-6 px-3 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-white/30 gap-6 md:gap-0">
                  {/* Contact Information */}
                  <div className="py-4 md:py-0 md:px-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                      Get in touch
                    </h1>
                    <p className="pt-2 pb-4 text-gray-200 text-sm md:text-base">
                      Does your business need SAP/IT solutions or you are not
                      sure? Fill the form for more information.
                    </p>
                    <div className="space-y-3 md:space-y-4 text-gray-200 text-sm md:text-base">
                      <p className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
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
                          className="w-5 h-5 mr-2 flex-shrink-0"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                        <span>(+267) 398 0461 | 79 127 013</span>
                      </p>
                      <p className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 flex-shrink-0"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        <span>
                          <a href="mailto:info@zimele.co.bw" className="break-all">
                            info@zimele.co.bw
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* Form */}
                  <form className="flex flex-col py-4 md:py-0 md:px-6 space-y-4 md:space-y-6">
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        onChange={handleSubject}
                        placeholder="Subject"
                        className="block w-full rounded-md bg-white/20 backdrop-blur-sm py-3 px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      />

                      {subject.length > 0 && (
                        <div className="absolute right-4 top-3.5">
                          {subjectVerify ? (
                            <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                          ) : (
                            <MdErrorOutline className="text-red-500 text-lg" />
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
                        placeholder="Enter your email"
                        className="block w-full rounded-md bg-white/20 backdrop-blur-sm py-3 px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      />

                      {email.length > 0 && (
                        <div className="absolute right-4 top-3.5">
                          {emailVerify ? (
                            <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                          ) : (
                            <MdErrorOutline className="text-red-500 text-lg" />
                          )}
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        onChange={handleMessage}
                        placeholder="Message"
                        rows={4}
                        className="block w-full rounded-md bg-white/20 backdrop-blur-sm py-3 px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base resize-none"
                      ></textarea>

                      {message.length > 0 && (
                        <div className="absolute right-4 top-3.5">
                          {messageVerify ? (
                            <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                          ) : (
                            <MdErrorOutline className="text-red-500 text-lg" />
                          )}
                        </div>
                      )}
                    </div>
                    {apiError && (
                      <p className="text-white text-center text-sm md:text-base">{apiError}</p>
                    )}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="self-center px-6 py-2 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:shadow-lg disabled:opacity-70"
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
    </>
  );
}

export default GetStartedBtn;