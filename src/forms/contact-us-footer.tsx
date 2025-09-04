import { useState } from "react";
import axios from "axios";
import { validateInput, validateEmail } from "./form-validations";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

import toast from "react-hot-toast";

function ContactUsFooter() {
  const [isLoading, setIsLoading] = useState(false);
  const [subject, setSubject] = useState("");
  const [subjectVerify, setSubjectVerify] = useState(false);

  const [email, setEmail] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);

  const [message, setMessage] = useState("");
  const [messageVerify, setMessageVerify] = useState(false);

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
    if (!email) {
        toast.error("Please enter your email");
        return;
      }
    setIsLoading(true);
    try {

      const userData = { subject, email, message };
      const response = await axios.post(
        // "https://zt-botswana.onrender.com/mail/send-email/general/",
        // "http://127.0.0.1:8000/mail/send-email/sendmailgraph/",
        "https://zt-botswana.onrender.com/mail/send-email/sendmailgraph/",
        userData
      );
      console.log("Response:", response.data);
      toast.success("Message sent successfully!");

      // Reset form
      setSubject(""); setSubjectVerify(false);
      setEmail(""); setEmailVerify(false);
      setMessage(""); setMessageVerify(false);
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message.");
    }finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="section font-sans">
      <h2 className="text-lg font-semibold text-blue-700 mb-4">
              Contact Us
            </h2>
 

      {/* Subject */}
      <div className="w-full pb-3 relative">
        <input
          type="text"
          value={subject}
          onChange={handleSubject}
          className="w-full text-sm rounded-xl px-3 py-1.5 bg-white border border-blue-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
          placeholder="Subject"
        />
        <span className="absolute top-2 right-3 text-lg">
          {subject.length > 0 &&
            (subjectVerify ? (
              <IoMdCheckmarkCircleOutline className="text-green-500" />
            ) : (
              <MdErrorOutline className="text-red-500" />
            ))}
        </span>
        {subject.length > 0 && !subjectVerify && (
          <p className="text-xs text-red-500 ml-2 mt-1">Subject too short.</p>
        )}
      </div>

      {/* Email */}
      <div className="w-full pb-3 relative">
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          className="w-full text-sm rounded-xl px-3 py-1.5 bg-white border border-blue-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
          placeholder="Email"
        />
        <span className="absolute top-2 right-3 text-lg">
          {email.length > 0 &&
            (emailVerify ? (
              <IoMdCheckmarkCircleOutline className="text-green-500" />
            ) : (
              <MdErrorOutline className="text-red-500" />
            ))}
        </span>
        {email.length > 0 && !emailVerify && (
          <p className="text-xs text-red-500 ml-2 mt-1">Invalid email address.</p>
        )}
      </div>

      {/* Message */}
      <div className="w-full pb-4 relative">
        <textarea
          value={message}
          onChange={handleMessage}
          rows={3}
          className="w-full text-sm rounded-xl px-3 py-2 bg-white border border-blue-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400 resize-none"
          placeholder="Message"
        />
        <span className="absolute top-2 right-3 text-lg">
          {message.length > 0 &&
            (messageVerify ? (
              <IoMdCheckmarkCircleOutline className="text-green-500" />
            ) : (
              <MdErrorOutline className="text-red-500" />
            ))}
        </span>
        {message.length > 0 && !messageVerify && (
          <p className="text-xs text-red-500 ml-2 mt-1">Message too short.</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="text-right">
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default ContactUsFooter;
