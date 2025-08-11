//Use state
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// export default Services;
import ServBg from "../assets/services-bg.jpg";
// import ZimeleTechnologies from "../assets/zt-sa-logo.png";
// import CoreSystems from "../assets/coresystems-logo.jpg";
// import Sew from "../assets/sew-logo.png";

//Import services
import { services } from "../constants/services";

//card
import Card from "../components/Card";

function Services() {
  const location = useLocation();
 
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredServices, setFilteredServices] = useState(services);

  // Scroll to hash on initial render
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

  // Filter services based on search term and category
  useEffect(() => {
    const filtered = services.filter((service) => {
      // Check if service matches search term (title, description, or tags)
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      // Check if service matches selected category
      const matchesCategory =
        selectedCategory === "All" ||
        service.category.some(
          (category) => category.toLowerCase() === selectedCategory.toLowerCase()
        );

      return matchesSearch && matchesCategory;
    });

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <section
        id="_"
        className="relative bg-[#6496B3] h-max text-white px-10 pt-36 overflow-hidden"
      >
        {/* Background with overlay - stays at the bottom */}
        <div className="absolute inset-0 z-0">
          <img
            src={ServBg}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="relative z-10">
          {" "}
          {/* Added z-10 to bring above background */}
          <div className="rounded-2xl p-8 mb-12  shadow-xl transition-all duration-300 bg-transparent">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-extrabold mb-4 leading-tight text-white dark:text-white">
                Unlock Innovation. Drive Results.
              </h1>
              <p className="text-lg mb-14 text-white dark:text-gray-300">
                We combine industry expertise with technical mastery to deliver
                impactful SAP and IT services that drive measurable performance
                gains.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-semibold transition-transform duration-300 ease-out transform hover:scale-105 bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/50 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 dark:focus:ring-offset-gray-800"
                >
                  Explore Solutions
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-semibold transition-transform duration-300 ease-out transform hover:scale-105 border border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white dark:border-blue-500 dark:text-blue-300 dark:hover:bg-blue-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-slate-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect
                  fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
                  width="52"
                  height="24"
                ></rect>
              </svg>
            </span>
            OUR FLEXIBLE APPROACH FOR CLIENT REQUIREMENTS
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            From Initial Consultation Through Final Delivery, We Pivot
            Seamlessly to Match Your Unique Objectives and Constraints.
          </p>
        </div>

        <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-4">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                <svg
                  className="w-12 h-12 text-[#6496B3]"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Transition to run:
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                We ensure a smooth handover from project implementation to operational stability, minimizing disruption while aligning with your ongoing business processes.
              </p>
              <ul className="mb-4 -ml-1 space-y-2">
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Service Introduction
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Post Go-Live Support
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Support and Maintenance.
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Service Management and Reporting
                </li>
              </ul>
              <p className="inline-flex items-center font-semibold transition-colors duration-200 text-[#6496B3] bg-[#6496B3] h-[2px] w-[100px]"></p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                <svg
                  className="w-12 h-12 text-[#6496B3]"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Existing support takeover:
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Our team rapidly adapts to your current systems, stepping in to maintain and improve existing support structures with minimal learning curve.
              </p>
              <ul className="mb-4 -ml-1 space-y-2">
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Due Deligence
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Service Introduction
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Continued Improvement
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Service Management and Reporting
                </li>
              </ul>
              <p className="inline-flex items-center font-semibold transition-colors duration-200 text-[#6496B3] bg-[#6496B3] h-[2px] w-[100px]"></p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                <svg
                  className="w-12 h-12 text-[#6496B3]"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                SLA Based Outsourcing:
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                We deliver predictable outcomes through clearly defined Service Level Agreements, giving you peace of mind and measurable performance.
              </p>
              <ul className="mb-4 -ml-1 space-y-2">
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Due Deligence
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Service Introduction
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Baseline measurement
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  SLA Agreement
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Outcome Base services
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Service management and reporting
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Continued Improvement
                </li>
              </ul>
              <p className="inline-flex items-center font-semibold transition-colors duration-200 text-[#6496B3] bg-[#6496B3] h-[2px] w-[100px]"></p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                <svg
                  className="w-12 h-12 text-[#6496B3]"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Staff Augumentation:
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Scale your internal capabilities with our skilled professionals who integrate seamlessly with your team to meet evolving project needs.
              </p>
              <ul className="mb-4 -ml-1 space-y-2">
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Offsite or onsite support (nearshore)
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Ticket based or staff allocation based, support
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-[#6496B3]"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Full time or partial allocation of skilled resources
                </li>
              </ul>
              <p className="inline-flex items-center font-semibold transition-colors duration-200 text-[#6496B3] bg-[#6496B3] h-[2px] w-[100px]"></p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="h-auto bg-[#F3F3F3] py-12 px-10">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-[#000D51] px-3">
              What services do we offer <br /> for your business
            </h2>
            <p className="text-gray-600 max-w-lg mt-2 px-3">
              Unlock the full potential of your business with our expert IT
              solutions and services.
            </p>
          </div>

          {/* Start of search area*/}

          <section className="pb-8">
            <div className="flex flex-col md:flex-row place-items-end justify-end gap-6">
              {/* Search Bar */}
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  id="search-input"
                  placeholder="Search by name or tag..."
                  className="w-full px-5 py-3 pr-12 rounded-full border-2 transition-colors duration-300 bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 focus:outline-none focus:ring-1 shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Categories/Tags Filter */}
              <div className="relative w-full md:w-1/5">
                <select
                  id="category-filter"
                  className="block w-full px-5 py-3 rounded-full border-2 appearance-none cursor-pointer transition-colors duration-300 bg-white border-gray-300 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-cyan-500 dark:focus:ring-cyan-500 focus:outline-none focus:ring-1 shadow-sm"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All">All Categories</option>
                  <option value="Products">Products</option>
                  <option value="Services">Services</option>
                  <option value="Solutions">Solutions</option>
                  
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <svg
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          {/* End of search area*/}

          {/* Services Grid */}

          <div className="grid-layout px-3">
          {/* <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 px-3 align-items-start"> */}
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <Card
                  key={index}
                  title={service.title}
                  description={service.description}
                  benefits={service.benefits}
                  target={service.target}
                  icon={service.icon}
                  
                />
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <div className="mx-auto max-w-md">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    No services found
                  </h3>
                  <p className="mt-1 text-gray-500">
                    Try adjusting your search or filter to find what you're
                    looking for.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("All");
                      }}
                    >
                      Clear filters
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-16 content-center">
        <div className="max-w-8xl mx-auto px-10 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center">
            OUR INDUSTRY PARTNERS
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
            {/* Card 1 */}
            {/* <div className="flex flex-col items-center text-center">
              <img
                src={ZimeleTechnologies}
                alt="avatar"
                className="w-[50%] h-auto flex max-h-lvh"
              />
            </div> */}

            {/* Card 2 */}
            {/* <div className="flex flex-col items-center text-center">
              <img
                src={CoreSystems}
                alt="avatar"
                className="w-[50%] h-auto flex max-h-lvh"
              />
            </div> */}

            {/* Card 3 */}
            {/* <div className="flex flex-col items-center text-center">
              <img
                src={Sew}
                alt="avatar"
                className="w-[50%] h-auto flex max-h-lvh"
              />
            </div> */}
          {/* </div>
        </div> */}
      {/* </section> */} 
    </>
  );
}

export default Services;
