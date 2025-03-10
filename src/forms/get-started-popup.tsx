import { useState } from "react";
import axios from "axios";
import { validateInput, validateEmail } from "./form-validations";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

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

  //Vars
  const [subject, setSubject] = useState<string>("");
  const [subjectVerify, setSubjectVerify] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [emailVerify, setEmailVerify] = useState<boolean>(false);

  const [message, setMessage] = useState<string>("");
  const [messageVerify, setMessageVerify] = useState<boolean>(false);

  const handleSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    const subjectVar = e.target.value;
    setSubject(subjectVar);
    setSubjectVerify(validateInput(subjectVar, 2));
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailVar = e.target.value;
    setEmail(emailVar);
    setEmailVerify(validateEmail(emailVar));
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const msgVar = e.target.value;
    setMessage(msgVar);
    setMessageVerify(validateInput(msgVar, 2));
  };

  const handleSubmit = async () => {
    try {
      if (!email) {
        alert("Please enter your email");
        return;
      }

      const userData = {
        subject,
        email,
        message,
      };

      // console.log("Sending data:", userData);

      const response = await axios.post(
        "https://zt-botswana.onrender.com/mail/send-email/",
        userData
      );
      console.log("Response:", response.data);
      alert("Message sent successfully!");

      // Clear the form after successful submission
      setSubject("");
      setSubjectVerify(false);

      setEmail("");
      setEmailVerify(false);

      setMessage("");
      setMessageVerify(false);
    } catch (error) {
      console.error("Error:", error); // Log the full error
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div className="relative z-10 justify-center items-center h-6 mb-14 text-black">
      {/* Trigger Button */}
      <div className="relative inline-flex group mt-1">
        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#bbcde8] to-[#Fff] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
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
              <section className="py-6  dark:text-gray-900">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                  <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">
                      Does your business want SAP/IT solutions or you are not
                      sure? Fill the form for more information.
                    </p>
                    <div className="space-y-4">
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
                          <p className="text-justify">
                            Plot 64517 Unit 68, Fairgrounds
                          </p>
                          <p className="text-justify">
                            {" "}
                            Park 1609 Gaborone, Botswana
                          </p>
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
                        <span>(267) 3980469 / 3980416 | (27) 630593833</span>
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
                  <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="block">
                      <span className="mb-1">Subject</span>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        onChange={handleSubject}
                        placeholder="Want to get started"
                        className="block h-13 w-full rounded-md shadow-sm bg-gray-100 bg-opacity-40 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out"
                      />
                      {subject.length < 1 ? null : subjectVerify ? (
                        <IoMdCheckmarkCircleOutline />
                      ) : (
                        <MdErrorOutline />
                      )}

                      {subject.length < 1 ? null : subjectVerify ? null : (
                        <p
                          style={{
                            marginLeft: 20,
                            color: "red",
                          }}
                        >
                          Subject too short.
                        </p>
                      )}
                    </label>
                    <label className="block">
                      <span className="mb-1">Company email</span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleEmail}
                        placeholder="company@domain.com"
                        className="block h-13 w-full rounded-md shadow-sm bg-gray-100 bg-opacity-40 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out"
                      />
                      {email.length < 1 ? null : emailVerify ? (
                        <IoMdCheckmarkCircleOutline />
                      ) : (
                        <MdErrorOutline />
                      )}

                      {email.length < 1 ? null : emailVerify ? null : (
                        <p
                          style={{
                            marginLeft: 20,
                            color: "red",
                          }}
                        >
                          not a valid email address.
                        </p>
                      )}
                    </label>
                    <label className="block">
                      <span className="mb-1">Message</span>
                      <textarea
                        placeholder="message"
                        id="message"
                        name="message"
                        onChange={handleMessage}
                        className="block w-full rounded-md shadow-sm bg-gray-100 bg-opacity-40 outline-none py-1 px-3"
                      ></textarea>
                      {message.length < 1 ? null : messageVerify ? (
                        <IoMdCheckmarkCircleOutline />
                      ) : (
                        <MdErrorOutline />
                      )}

                      {message.length < 1 ? null : messageVerify ? null : (
                        <p
                          style={{
                            marginLeft: 20,
                            color: "red",
                          }}
                        >
                          Message short.
                        </p>
                      )}
                    </label>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetStartedBtn;
