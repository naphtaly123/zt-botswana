
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import FaqITCBP from "../components/faq-ITCBP";

function JoinUs() {
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
    <>
    {/* <!-- Hero Section --> */}
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden bg-[#6496B3]">
        <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <div className="animate-fadeInUp">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                    Work with purpose.
                    <span className="block bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">
                        Grow With Us.
                    </span>
                </h1>
                <p className="text-xl sm:text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                    Join a team that's driving innovation, creating impact, and growing together. Explore career opportunities that match your passion and purpose.
                </p>
                
            </div>
        </div>
    </section>

    {/*Job listings*/}
    <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800">Join Our Team</h2>
      <p className="mt-4 text-gray-600">
        We’re looking for talented individuals to help us shape the future. Explore our current opportunities and find your perfect role.
      </p>
    </div>

    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <p className="mt-2 text-gray-600">
          There are currently no job listings available...
        </p>
      {/* <!-- Job Card --> */}
      {/* <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800">Frontend Developer</h3>
        <p className="mt-2 text-gray-600">Location: Remote</p>
        <p className="mt-2 text-gray-600">
          We're looking for a skilled frontend developer with expertise in React.js and Tailwind CSS.
        </p>
        <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Apply Now
        </button>
      </div> */}

      {/* <!-- Job Card --> */}
      {/* <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800">UI/UX Designer</h3>
        <p className="mt-2 text-gray-600">Location: New York, NY</p>
        <p className="mt-2 text-gray-600">
          Join our team as a creative UI/UX designer to build intuitive user experiences.
        </p>
        <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Apply Now
        </button>
      </div> */}

      {/* <!-- Job Card --> */}
      {/* <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800">Marketing Specialist</h3>
        <p className="mt-2 text-gray-600">Location: London, UK</p>
        <p className="mt-2 text-gray-600">
          We need a dynamic marketing specialist to manage campaigns and grow our brand.
        </p>
        <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Apply Now
        </button>
      </div> */}
    </div>
  </div>
</section>

    {/* <!-- About Section --> */}
    <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">IT Capacity Building Programme</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Join our comprehensive IT Capacity Building Programme designed to equip individuals and teams with essential digital skills.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">What is the IT Capacity Building Programme?</h3>
                    <p className="text-gray-600 mb-6">
                      Our Zimele Technologies IT Capacity Building Programme is a comprehensive training initiative that aims to equip individuals and teams with the necessary digital skills to succeed in today's fast-paced technology landscape.<br/>
                      We have a team of experienced trainers who will guide you through the programme, ensuring you gain hands-on experience and practical knowledge.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-2">
                                <i data-lucide="trophy" className="w-6 h-6 text-indigo-600 mr-2"></i>
                                <div className="text-3xl font-bold text-indigo-600">5+</div>
                            </div>
                            <div className="text-gray-600">Workshops delivered</div>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-2">
                                <i data-lucide="heart" className="w-6 h-6 text-indigo-600 mr-2"></i>
                                <div className="text-3xl font-bold text-indigo-600">40+</div>
                            </div>
                            <div className="text-gray-600">Participants Trained</div>
                        </div>
                    </div>
                </div>
                <div className="relative">

                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                        <h4 className="text-xl font-semibold mb-4 flex items-center">
                            <i data-lucide="star" className="w-5 h-5 mr-2 text-indigo-200"></i>
                            Who Should Attend?
                        </h4>
                        <ul className="space-y-3 ml-8">
                            <li className="flex items-center">
                                <FaCheckCircle />
                                <p className="ml-3">Individuals seeking IT skills</p>
                                
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle />
                                <p className="ml-3">SMEs looking to upskill staff</p>
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle />
                                <p className="ml-3">Government & NGO tech partners</p>
                                
                            </li>
                            <li className="flex items-center">

                                <FaCheckCircle />
                                <p className="ml-3">Recent graduates or interns</p>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="bg-[#6496B3] bg-opacity-50 backdrop-blur-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white text-center">FAQ</h1>
        <p className="text-lg text-gray-200 text-center">
          Frequently asked questions
        </p>
        <FaqITCBP/>
      </div>

    

    </>
  );
}
export default JoinUs;
