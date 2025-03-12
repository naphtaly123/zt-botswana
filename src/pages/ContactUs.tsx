import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MapC from "../components/map";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
// import bgContact from "../assets/bg-contact.jpg";
// import bgContact from "../assets/bg2.png";
import bgContact from "../assets/bg3.jpg";
import ContactUsContact from "../forms/contact-us-contact";

// import bgContact from "../assets/bgContact.jpg.jfif"

function ContactUs() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [location]);

  return (
    <div className="mt-20">
      <div
        id="_"
        className="relative z-0 bg-gradient-to-r from-purple-600 to-blue-600 h-full text-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={bgContact}
            alt="Background Image"
            className="object-contain object-center w-full h-fit"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* <div className="absolute inset-0">
          <img
            src={bgContact}
            alt="Background Image"
            className="object-cover object-center w-full h-fit transform scale-x-[-1]" // Added scale-y-[-1] for vertical mirror effect
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div> */}

        {/* Contact Info & Map Section  bg-[#6496B3] */}
        <section className=" text-white px-6 py-12 lg:px-16">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
            {/* Text Section */}
            <div className="lg:w-1/2 text-left space-y-6 ml-8 z-40">
              <h2 className="text-4xl font-bold leading-tight">
              Let’s Build the Future Together <br /> – Your Vision, Our Expertise.
              </h2>
              <p className="text-lg text-white/90">
              Whether you’re scaling your business, optimizing IT, or transforming digitally, we’re here to help. Reach out today and let’s start your journey to success.
              </p>
            </div>

            {/* Map Section */}
            <div className="lg:w-1/2 w-full h-[350px] lg:h-[300px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 mr-8">
              <MapC />
            </div>
          </div>
        </section>
      </div>

      {/* Contact Info */}
      <section className="flex flex-wrap justify-center text-center mt-6 px-4">
  <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
    {/* Address */}
    <div className="p-2 flex flex-col items-center text-center"> {/* Centered */}
      <FaMapMarkerAlt className="text-[#6496B3] text-xl mb-1" />
      <h4 className="font-medium text-base mb-1">Address</h4>
      <p className="text-sm text-gray-700">
        Sunshine Office Park, Fairgrounds, Plot 50361 Block C, Gaborone, Botswana
      </p>
    </div>

    {/* Email */}
    <div className="p-2 flex flex-col items-center text-center"> {/* Centered */}
      <FaEnvelope className="text-[#6496B3] text-xl mb-1" />
      <h4 className="font-medium text-base mb-1">Email</h4>
      <p className="text-sm text-gray-700">info@zimele.co.bw</p>
    </div>

    {/* Phone */}
    <div className="p-2 flex flex-col items-center text-center"> {/* Centered */}
      <FaPhoneAlt className="text-[#6496B3] text-xl mb-1" />
      <h4 className="font-medium text-base mb-1">Phone</h4>
      <p className="text-sm text-gray-700">+267 79 127 013</p>
      <p className="text-sm text-gray-700">+267 398-0469 </p>
    </div>

    {/* Opening Hours */}
    <div className="p-2 flex flex-col items-center text-center"> {/* Centered */}
      <FaClock className="text-[#6496B3] text-xl mb-1" />
      <h4 className="font-medium text-base mb-1">Opening Hours</h4>
      <p className="text-sm text-gray-700">Mon-Fri: 8 AM - 5 PM</p>
      <p className="text-sm text-gray-700">Sat, Sun: Closed</p>
    </div>
  </div>
</section>

      {/* Contact Form */}
      <ContactUsContact/>
    </div>
  );
}

export default ContactUs;
