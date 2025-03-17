import { useState } from "react";
import axios from "axios";
import {
  validateInput,
  validateEmail,
  validatePhone,
} from "./form-validations";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

function ContactUsContact() {
  const [firstName, setFirstName] = useState("");
  const [firstNameVerify, setFirstNameVerify] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameVerify, setLastNameVerify] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneVerify, setPhoneVerify] = useState(false);

  const [subject, setSubject] = useState("");
  const [subjectVerify, setSubjectVerify] = useState(false);

  const [email, setEmail] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);

  const [message, setMessage] = useState("");
  const [messageVerify, setMessageVerify] = useState(false);

  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const firstNameVar = e.target.value;
    setFirstName(firstNameVar);
    setFirstNameVerify(validateInput(firstNameVar, 2));
  };
  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lastNameVar = e.target.value;
    setLastName(lastNameVar);
    setLastNameVerify(validateInput(lastNameVar, 2));
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneVar = e.target.value;
    setPhone(phoneVar);
    setPhoneVerify(validatePhone(phoneVar));
  };

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

      const userData = { firstName, lastName, phone, subject, email, message };
      const response = await axios.post(
        "https://zt-botswana.onrender.com/mail/send-email/detailed/",
        //http://127.0.0.1:8000
        userData
      );
      console.log("Response:", response.data);
      alert("Message sent successfully!");

      // Reset form
      setFirstName("");
      setFirstNameVerify(false);

      setLastName("");
      setLastNameVerify(false);

      setPhone("");
      setPhoneVerify(false);

      setSubject("");
      setSubjectVerify(false);

      setEmail("");
      setEmailVerify(false);

      setMessage("");
      setMessageVerify(false);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <section className="py-12 px-6 mt-8 bg-gradient-to-tr from-[#6496B3] to-[#6496B3]">
      <div className="max-w-3xl mx-auto p-8 bg-white/80 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <h3 className="text-4xl font-bold text-center text-[#333] mb-8">
          Get in Touch
        </h3>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstName}
            className="form-input p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6496B3] transition-all"
          />

          <span className="absolute top-2 right-3 text-lg">
            {firstName.length > 0 &&
              (firstNameVerify ? (
                <IoMdCheckmarkCircleOutline className="text-green-500" />
              ) : (
                <MdErrorOutline className="text-red-500" />
              ))}
          </span>
          {firstName.length > 0 && !firstNameVerify && (
            <p className="text-xs text-red-500 ml-2 mt-1">Message too short.</p>
          )}

          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastName}
            className="form-input p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6496B3] transition-all"
          />

          <span className="absolute top-2 right-3 text-lg">
            {lastName.length > 0 &&
              (lastNameVerify ? (
                <IoMdCheckmarkCircleOutline className="text-green-500" />
              ) : (
                <MdErrorOutline className="text-red-500" />
              ))}
          </span>
          {lastName.length > 0 && !lastNameVerify && (
            <p className="text-xs text-red-500 ml-2 mt-1">Message too short.</p>
          )}

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={handlePhone}
            className="form-input p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6496B3] transition-all"
          />

          <span className="absolute top-2 right-3 text-lg">
            {phone.length > 0 &&
              (phoneVerify ? (
                <IoMdCheckmarkCircleOutline className="text-green-500" />
              ) : (
                <MdErrorOutline className="text-red-500" />
              ))}
          </span>
          {phone.length > 0 && !phoneVerify && (
            <p className="text-xs text-red-500 ml-2 mt-1">Message too short.</p>
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmail}
            className="form-input p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6496B3] transition-all"
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
            <p className="text-xs text-red-500 ml-2 mt-1">
              Invalid email address.
            </p>
          )}

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={handleSubject}
            className="form-input p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6496B3] transition-all sm:col-span-2"
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

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={handleMessage}
            className="form-input p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6496B3] transition-all sm:col-span-2 h-36 resize-none"
          ></textarea>

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

          <button
            type="submit"
            onClick={handleSubmit}
            className="sm:col-span-2 bg-[#6496B3] text-white py-3 rounded-lg font-semibold hover:bg-[#4a7f97] transition-all transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUsContact;
