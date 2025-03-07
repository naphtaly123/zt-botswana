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
        return; // Exit if email is not provided
      }

      const userData = {
        subject,
        email,
        message,
      };

      const response = await axios.post(
        "https://zt-botswana.onrender.com/mail/send-email/",
        userData
      );
      console.log(response.data);
      alert("Message sent successfully!"); // Use alert instead of Alert.alert
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the message."); // Handle error gracefully
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
            className="peer w-full rounded border border-[#6496B3] bg-gray-100 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-100 focus:ring-2 focus:ring-indigo-900"
            placeholder="subject"
          />

          {subject.length < 1 ? null : subjectVerify ? (
            <IoMdCheckmarkCircleOutline />
          ) : (
            <MdErrorOutline />

          )}

          {subject.length < 0 ? null : subjectVerify ? null : (
            <p
              style={{
                marginLeft: 20,
                color: "red",
              }}
            >
              Subject cannot be empty.
            </p>
          )}

          <label
            htmlFor="subject"
            className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Name
          </label>
        </div>
      </div>
      <div className="w-full p-1">
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleEmail}
            className="peer w-full rounded border border-[#6496B3] bg-gray-100 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-100 focus:ring-2 focus:ring-indigo-900"
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

          <label
            htmlFor="email"
            className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Email
          </label>
        </div>
      </div>
      <div className="mt-2 w-full p-1">
        <div className="relative">
          <textarea
            id="message"
            name="message"
            onChange={handleMessage}
            className="peer h-15 w-full resize-none rounded border border-[#6496B3] bg-gray-100 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-100 focus:ring-2 focus:ring-indigo-900"
            placeholder="Message"
          ></textarea>

          {message.length < 1 ? null : messageVerify ? (
            <IoMdCheckmarkCircleOutline />
          ) : (
            <MdErrorOutline />
          )}

          {message.length < 0 ? null : messageVerify ? null : (
            <p
              style={{
                marginLeft: 20,
                color: "red",
              }}
            >
              Message cannot be empty.
            </p>
          )}

          <label
            htmlFor="message"
            className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Message
          </label>
        </div>
      </div>
      <div className="w-full p-1">
        <button
          onClick={handleSubmit}
          className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-4 text-lg text-white hover:bg-indigo-600 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default ContactUsFooter;
