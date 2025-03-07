import { useState } from "react";
import axios from "axios";
import { validateInput, validateEmail } from "./form-validations";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";


function ContactUsFooter() {
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
    } catch (error) {
      console.error("Error:", error); // Log the full error
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div className="section">
      <div>
        <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
          Contact Us
        </h2>
      </div>
      <div className="w-full p-1">
        <div className="relative">
          <input
            type="text"
            id="subject"
            name="subject"
            onChange={handleSubject}
            className="peer w-full rounded border border-[#6496B3] bg-gray-100 bg-opacity-40 py-1 px-3 text-base leading-8 text-black placeholder-indigo-300 outline-none transition-colors duration-200 ease-in-out focus:bg-gray-100 focus:ring-2"
            placeholder="subject"
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
          
        </div>
      </div>
      <div className="w-full p-1">
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleEmail}
            className="peer w-full rounded border border-[#6496B3] bg-gray-100 bg-opacity-40 py-1 px-3 text-base leading-8 text-black placeholder-indigo-300 outline-none transition-colors duration-200 ease-in-out focus:bg-gray-100 focus:ring-2"
            placeholder="Email"
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

        </div>
      </div>
      <div className="mt-2 w-full p-1">
        <div className="relative">
          <textarea
            id="message"
            name="message"
            onChange={handleMessage}
            className="peer h-13 w-full rounded border border-[#6496B3] bg-gray-100 bg-opacity-40 py-1 px-3 text-base leading-8 text-black placeholder-indigo-300 outline-none transition-colors duration-200 ease-in-out focus:bg-gray-100 focus:ring-2"
            placeholder="Message"
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

        </div>
      </div>
      <div className="w-full p-1">
        <button
          onClick={handleSubmit}
          className="ml-auto relative rounded border-0 bg-indigo-500 py-2 px-3 text-white hover:bg-indigo-600 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default ContactUsFooter;
