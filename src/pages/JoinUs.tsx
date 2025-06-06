
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
    <section id="_" className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden bg-[#6496B3]">
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
    <section id="it-capacity-building" className="pt-14 pb-4 bg-white">
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

    {/*BENEFITS OF THE IT CAPACITY BUILDING PROGRAMME*/}
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
            <p
                className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-sky-500 text-white">
                Digital ready
            </p>
        </div>
        <h2
            className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">

                <svg viewBox="0 0 52 24" fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-slate-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                    <defs>
                        <pattern id="fdca20a0-aeb4-4caf-ba1b-4351eee42363" x="0" y="0" width=".135"
                            height=".30">
                            <circle cx="1" cy="1" r=".7"></circle>
                        </pattern>
                    </defs>
                    <rect fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)" width="52" height="24"></rect>
                </svg>

                
            </span>
            Benefits of the IT Capacity Building Programme
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          From job-ready skills for individuals to workforce development solutions for companies, this programme strengthens IT capacity where it matters most.
        </p>
    </div>


    <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
        <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                    <svg className="w-12 h-12 text-[#6496B3]" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
            </div>
            <div>
                <h6 className="mb-2 font-semibold leading-5">Hands on projects:</h6>
                <p className="mb-3 text-sm text-gray-900">
                    Gain real-world experience by working on projects that reflect current industry needs and challenges. You'll apply what you learn in a practical, results-driven environment.
                </p>
                <ul className="mb-4 -ml-1 space-y-2">
                    <li className="flex items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-[#6496B3]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Relevant industry-aligned projects
                    </li>
                    <li className="flex items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-[#6496B3]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Certificate of participation
                    </li>
                    <li className="flex items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-[#6496B3]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        72+ hours of practical, instructor-led training
                    </li>
                </ul>
                <p
  className="inline-flex items-center font-semibold transition-colors duration-200 text-[#6496B3] bg-[#6496B3] h-[2px] w-[100px]"
></p>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                    <svg className="w-12 h-12 text-[#6496B3]" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
            </div>
            <div>
                <h6 className="mb-2 font-semibold leading-5">Network with IT Professionals:</h6>
                <p className="mb-3 text-sm text-gray-900">
                  Join a growing community of learners, instructors, and industry experts. Build lasting professional connections that can shape your career.
                </p>
                <ul className="mb-4 -ml-1 space-y-2">
                    <li className="flex items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-[#6496B3]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                                    fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Tech meetups and Q&A sessions
                    </li>
                    <li className="flex items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-[#6496B3]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                                    fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Peer learning and collaboration groups
                    </li>
                    <li className="flex items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-[#6496B3]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                                    fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Invitations to webinars and IT events
                    </li>
                </ul>
                <p
  className="inline-flex items-center font-semibold transition-colors duration-200 text-[#6496B3] bg-[#6496B3] h-[2px] w-[100px]"
></p>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                    <svg className="w-12 h-12 text-[#6496B3]" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
            </div>
            <div>
                <h6 className="mb-2 font-semibold leading-5">Mentorship and Job placement:</h6>
                <p className="mb-3 text-sm text-gray-900">
                  Receive one-on-one guidance from experienced IT professionals and get connected to job and internship opportunities through our partner network.
                </p>
                <ul className="mb-4 -ml-1 space-y-2">
                    <li className="flex items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-[#6496B3]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                                    fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Access to personal mentors in the IT field
                    </li>
                    <li className="flex items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-[#6496B3]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                                    fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Career coaching
                    </li>
                    <li className="flex items-start">
                        <span className="mr-1">
                            <svg className="w-5 h-5 mt-px text-[#6496B3]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                                    fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Partnerships with IT companies and tech hubs
                    </li>
                </ul>
                <p
  className="inline-flex items-center font-semibold transition-colors duration-200 text-[#6496B3] bg-[#6496B3] h-[2px] w-[100px]"
></p>
            </div>
        </div>
    </div>

</div>

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
