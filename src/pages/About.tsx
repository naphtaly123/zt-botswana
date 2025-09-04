// import Faq from "../components/faq";
import ZimeleTechnologies from "../assets/zt-sa-logo.png";
import CoreSystems from "../assets/coresystems-logo.jpg";
import Sew from "../assets/sew-logo.png";
// import OurTeam from "../components/our-team"; -Team section commented out
import md from "../assets/md.jpg";
import team from "../assets/team.jpg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function AboutPage() {
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
      <div
        id="_"
        className="relative z-0 bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={team}
            alt="Background Image"
            className="object-cover object-center w-full h-fit"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Driven by Passion, Powered by Expertise.
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl">
            We’re your partners in innovation. With a shared vision and diverse
            expertise, we deliver solutions that transform businesses and
            inspire growth.
          </p>
        </div>
      </div>
      {/* OUR APPROACH */}

      <section className="bg-white py-1 content-center px-20 pt-8">
        <div className="max-w-8xl mx-auto px-10 sm:px-6 lg:px-8">
          <h2 className="my-4 font-bold text-center text-3xl  sm:text-4xl ">
            About{" "}
            <span className="text-indigo-600">
              Zimele Technologies Botswana
            </span>
          </h2>
          {/* <h2 className="text-3xl font-extrabold text-black text-center">
            ABOUT ZIMELE TECHNOLOGIES BOTSWANA
          </h2> */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">
                  What we do
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We offer SAP and IT based solutions that help organization’s
                  maximize revenue collection, profitability, and ERP software
                  to run organizations.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">
                  How we work
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We take a collaborative and tailored approach to deliver
                  SAP-based and IT solutions that drive results, ensuring
                  seamless integration, enhanced efficiency, and measurable
                  growth.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">
                  Where we work
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We operate across industries and geographies, helping
                  organizations internationally harness the power of IT and SAP
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*OUR HISTORY*/}
      <section className="sm:flex items-center px-20">
        <div className="md:w-1/3 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div className="sm:w-2/3 p-5">
          <div className="text">
            <h2 className="my-4 font-bold text-xs  sm:text-2xl ">
              <span className="text-indigo-600">Our History</span>
            </h2>
            <p className="text-gray-700 pb-2">
              Zimele Technologies Botswana was formed in 2020, in Gaborone. The
              company was formed during the start of the Corona Viral Pandemic
              and was able to survive through the difficult times while other
              companies closed. Zimele Technologies Botswana is a 100% citizen
              owned IT Company specializing in ICT based solutions for Private
              and Public sectors predominantly SAP solutions. <br />
              We offer SAP based solutions that help organization’s maximize
              revenue collection, profitability, and ERP software to run
              organizations . Zimele Technologies Botswana has a well
              established profile of non SAP business consultancy work, ICT
              Strategy, Managed IT Services, and ICT Training.
            </p>

            <p className="text-gray-700 pb-2">
              <b>OUR MISION:</b> Our commitment is to transform and empower
              African societies through digital solutions that delight OUR
              customers to better serve THEIR customers, leading to sustainable
              growth and development in Africa.
            </p>
            <p className="text-gray-700">
              <b>OUR VISION: </b>To deliver simple, consistent, and high-quality
              solutions that help our clients run their organisations more
              effectively, driving consistent returns on investment.
            </p>
          </div>
        </div>
      </section>

      {/*OUR VALUES*/}
      <section className="bg-white py-1 content-center px-60">
        <div className="max-w-8xl mx-auto px-10 sm:px-6 lg:px-8 pb-8">
          <h2 className="text-base font-extrabold text-black text-center">
            OUR VALUES
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-1 sm:grid-cols-3 lg:grid-cols-6 mx-auto">
            {/* Card 1 - People-centric */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 18C3 15.3945 4.66081 13.1768 6.98156 12.348C7.61232 12.1227 8.29183 12 9 12C9.70817 12 10.3877 12.1227 11.0184 12.348C11.3611 12.4703 11.6893 12.623 12 12.8027C12.3107 12.623 12.6389 12.4703 12.9816 12.348C13.6123 12.1227 14.2918 12 15 12C15.7082 12 16.3877 12.1227 17.0184 12.348C19.3392 13.1768 21 15.3945 21 18V21H15.75V19.5H19.5V18C19.5 15.5147 17.4853 13.5 15 13.5C14.4029 13.5 13.833 13.6163 13.3116 13.8275C14.3568 14.9073 15 16.3785 15 18V21H3V18ZM9 11.25C8.31104 11.25 7.66548 11.0642 7.11068 10.74C5.9977 10.0896 5.25 8.88211 5.25 7.5C5.25 5.42893 6.92893 3.75 9 3.75C10.2267 3.75 11.3158 4.33901 12 5.24963C12.6842 4.33901 13.7733 3.75 15 3.75C17.0711 3.75 18.75 5.42893 18.75 7.5C18.75 8.88211 18.0023 10.0896 16.8893 10.74C16.3345 11.0642 15.689 11.25 15 11.25C14.311 11.25 13.6655 11.0642 13.1107 10.74C12.6776 10.4869 12.2999 10.1495 12 9.75036C11.7001 10.1496 11.3224 10.4869 10.8893 10.74C10.3345 11.0642 9.68896 11.25 9 11.25ZM13.5 18V19.5H4.5V18C4.5 15.5147 6.51472 13.5 9 13.5C11.4853 13.5 13.5 15.5147 13.5 18ZM11.25 7.5C11.25 8.74264 10.2426 9.75 9 9.75C7.75736 9.75 6.75 8.74264 6.75 7.5C6.75 6.25736 7.75736 5.25 9 5.25C10.2426 5.25 11.25 6.25736 11.25 7.5ZM15 5.25C13.7574 5.25 12.75 6.25736 12.75 7.5C12.75 8.74264 13.7574 9.75 15 9.75C16.2426 9.75 17.25 8.74264 17.25 7.5C17.25 6.25736 16.2426 5.25 15 5.25Z"
                      fill="#6496B3"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-sm font-medium text-gray-500">
                  People-centric
                </h3>
              </div>
            </div>

            {/* Card 2 - Client-centric */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                <svg
                  fill="#6496B3"
                  width="115px"
                  height="115px"
                  viewBox="0 0 64 64"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect height="4" width="19" x="35" y="58"></rect>
                    <path d="M54,20.276a7.733,7.733,0,0,0-7.724-7.724h-.484a1,1,0,0,1-.943-.666A7.317,7.317,0,0,0,31.3,11.272a1,1,0,0,1-1.62.286,7.272,7.272,0,0,0-5.21-2.179,7.351,7.351,0,0,0-7.175,5.839.993.993,0,0,1-1.022.8L16,16a6,6,0,0,0,0,12H46.276A7.733,7.733,0,0,0,54,20.276ZM41,18V16a6.006,6.006,0,0,1,6,6H45A4,4,0,0,0,41,18Zm4,6h2v2H45Z"></path>
                    <path d="M58,13a2,2,0,0,0-2,2V30a1,1,0,0,1-.341.752l-7.977,6.98-4.975,4.975-1.414-1.414,6.5-6.5a1.829,1.829,0,0,0-2.586-2.586l-8.036,8.036A3.974,3.974,0,0,0,36,43.071v7.117a3.99,3.99,0,0,0,.2,1.265L37.721,56H52V47.415a6,6,0,0,1,.89-3.144l6.517-10.59a4,4,0,0,0,.593-2.1V15A2,2,0,0,0,58,13Z"></path>
                    <path d="M16.207,32.207a1.831,1.831,0,0,0,0,2.586l6.5,6.5-1.414,1.414-4.975-4.975-7.977-6.98A1,1,0,0,1,8,30V15a2,2,0,0,0-4,0V31.585a4,4,0,0,0,.593,2.1l6.517,10.59A6,6,0,0,1,12,47.415V56H26.279L27.8,51.453a3.99,3.99,0,0,0,.2-1.265V43.071a3.974,3.974,0,0,0-1.171-2.828l-8.036-8.036A1.831,1.831,0,0,0,16.207,32.207Z"></path>
                    <rect height="4" width="19" x="10" y="58"></rect>
                  </g>
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-sm font-medium text-gray-500">
                  Client-centric
                </h3>
              </div>
            </div>

            {/* Card 3 - Strong work ethic */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                <svg
                  viewBox="0 0 512 512"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="1"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>work-case</title>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Combined-Shape"
                        fill="#6496B3"
                        transform="translate(42.666667, 64.000000)"
                      >
                        {" "}
                        <path d="M277.333333,1.42108547e-14 L298.666667,21.3333333 L298.666,64 L426.666667,64 L426.666667,362.666667 L3.55271368e-14,362.666667 L3.55271368e-14,64 L128,64 L128,21.3333333 L149.333333,1.42108547e-14 L277.333333,1.42108547e-14 Z M42.6664912,220.935181 L42.6666667,320 L384,320 L384.000468,220.935097 C341.375319,233.130501 298.701692,240.759085 256.000479,243.809455 L256,277.333333 L170.666667,277.333333 L170.666323,243.809465 C127.965163,240.759108 85.2915887,233.130549 42.6664912,220.935181 Z M384,106.666667 L42.6666667,106.666667 L42.6668606,176.433085 C99.6386775,193.933257 156.507113,202.666667 213.333333,202.666667 C270.159803,202.666667 327.028489,193.933181 384.000558,176.432854 L384,106.666667 Z M256,42.6666667 L170.666667,42.6666667 L170.666667,64 L256,64 L256,42.6666667 Z">
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-sm font-medium text-gray-500">
                  Strong work ethic
                </h3>
              </div>
            </div>

            {/* Card 4 - Excellence */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-m text-white">
                <svg
                  fill="#6496B3"
                  height="200px"
                  width="200px"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 302.262 302.262"
                  enable-background="new 0 0 302.262 302.262"
                  stroke="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="m260.244,113.461c3.719-9.807 2.382-20.815-3.576-29.447l-4.204-6.092c-1.641-2.376-2.692-5.148-3.04-8.016l-.892-7.347c-1.265-10.413-7.564-19.539-16.852-24.413l-6.552-3.439c-2.558-1.342-4.777-3.309-6.419-5.686l-4.203-6.09c-5.958-8.632-15.777-13.786-26.266-13.786h-7.4c-2.889,0-5.768-0.71-8.326-2.052l-6.552-3.439c-9.286-4.874-20.376-4.875-29.664,0l-6.552,3.439c-2.559,1.342-5.438,2.052-8.326,2.052h-7.4c-10.488,0-20.308,5.154-26.266,13.786l-4.203,6.089c-1.642,2.378-3.861,4.344-6.419,5.687l-6.552,3.439c-9.287,4.874-15.587,14-16.852,24.414l-.892,7.345c-0.348,2.868-1.399,5.64-3.041,8.018l-4.203,6.09c-5.958,8.632-7.295,19.641-3.576,29.448l2.624,6.917c1.024,2.702 1.382,5.645 1.033,8.514l-.892,7.345c-1.265,10.412 2.668,20.781 10.52,27.736l5.539,4.907c2.162,1.915 3.846,4.355 4.871,7.057l2.624,6.918c2.759,7.277 8.045,13.198 14.748,16.797l-28.909,70.519c-1.064,2.596-0.476,5.577 1.496,7.574 1.973,1.998 4.946,2.623 7.554,1.591l31.884-12.604 13.862,31.357c1.122,2.538 3.634,4.17 6.401,4.17 0.032,0 0.064,0 0.096,0 2.806-0.038 5.317-1.748 6.382-4.344l29.28-71.424 29.28,71.424c1.064,2.596 3.576,4.306 6.382,4.344 0.031,0 0.063,0 0.096,0 2.768,0 5.279-1.633 6.401-4.17l13.862-31.357 31.884,12.604c2.607,1.031 5.583,0.406 7.554-1.591 1.972-1.997 2.561-4.978 1.496-7.574l-28.909-70.519c6.703-3.599 11.989-9.52 14.748-16.797l2.624-6.918c1.025-2.702 2.709-5.143 4.871-7.058l5.539-4.907c7.852-6.956 11.784-17.324 10.52-27.735l-.892-7.347c-0.349-2.868 0.009-5.812 1.032-8.512l2.627-6.917zm-22.568,40.034l-5.539,4.907c-3.852,3.412-6.853,7.759-8.678,12.572l-2.624,6.919c-2.088,5.505-6.747,9.633-12.465,11.042l-7.185,1.771c-4.996,1.231-9.673,3.686-13.525,7.099l-5.539,4.907c-4.408,3.904-10.454,5.394-16.168,3.984l-7.185-1.77c-4.996-1.232-10.279-1.231-15.275,0l-7.186,1.771c-5.717,1.41-11.76-0.081-16.167-3.985l-5.539-4.907c-3.853-3.413-8.529-5.867-13.525-7.099l-7.186-1.771c-5.717-1.409-10.376-5.537-12.464-11.042l-2.624-6.919c-1.825-4.813-4.826-9.16-8.678-12.571l-5.539-4.907c-4.407-3.904-6.614-9.725-5.904-15.569l.892-7.346c0.62-5.108-0.017-10.352-1.841-15.165l-2.625-6.918c-2.087-5.505-1.337-11.685 2.009-16.531l4.201-6.089c2.925-4.235 4.798-9.174 5.419-14.285l.892-7.345c0.71-5.846 4.246-10.969 9.459-13.705l6.552-3.439c4.556-2.391 8.51-5.893 11.435-10.13l4.203-6.089c3.345-4.846 8.856-7.739 14.744-7.739h7.4c5.146,0 10.274-1.264 14.832-3.656l6.552-3.439c5.213-2.736 11.438-2.735 16.652,0l6.552,3.439c4.558,2.392 9.687,3.656 14.832,3.656h7.4c5.888,0 11.399,2.893 14.744,7.738l4.203,6.091c2.925,4.236 6.879,7.738 11.435,10.129l6.552,3.439c5.213,2.736 8.749,7.859 9.459,13.704l.892,7.346c0.621,5.11 2.494,10.049 5.418,14.283l4.203,6.091c3.345,4.846 4.095,11.025 2.008,16.529l-2.626,6.92c-1.823,4.812-2.46,10.056-1.84,15.163l.892,7.347c0.709,5.845-1.498,11.665-5.905,15.569zm-31.633,97.747c-3.494-1.382-7.456,0.242-8.976,3.68l-9.937,22.478-23.305-56.848c9.821,2.018 20.043-0.683 27.579-7.361l5.539-4.907c2.162-1.916 4.788-3.294 7.594-3.985l1.284-.317 23.078,56.294-22.856-9.034zm-100.849,3.68c-1.52-3.438-5.485-5.062-8.976-3.68l-22.855,9.035 23.078-56.294 1.284,.316c2.806,0.691 5.432,2.07 7.594,3.985l5.539,4.906c5.902,5.23 13.452,8.028 21.164,8.027 2.137,0 4.285-0.228 6.415-0.666l-23.306,56.849-9.937-22.478z"></path>{" "}
                      <path d="m151.131,187.376c42.329,0 76.767-34.438 76.767-76.767s-34.438-76.767-76.767-76.767-76.767,34.438-76.767,76.767 34.438,76.767 76.767,76.767zm0-139.533c34.609,1.42109e-14 62.767,28.157 62.767,62.767s-28.157,62.767-62.767,62.767-62.767-28.157-62.767-62.767 28.158-62.767 62.767-62.767z"></path>{" "}
                      <path d="m118.476,150.652h65.311c3.866,0 7-3.134 7-7v-41.46c0-2.197-1.031-4.266-2.785-5.589l-32.655-24.625c-2.496-1.882-5.934-1.882-8.43,0l-32.655,24.625c-1.754,1.323-2.785,3.392-2.785,5.589v41.46c-0.001,3.866 3.132,7 6.999,7zm7-44.972l25.655-19.347 25.655,19.347v30.971h-18.188v-13.923c0-1.827-1.481-3.308-3.308-3.308h-8.318c-1.827,0-3.308,1.481-3.308,3.308v13.923h-18.188v-30.971z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-sm font-medium text-gray-500">
                  Excellence
                </h3>
              </div>
            </div>

            {/* Card 5 - Integrity */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3.73169L19.5 5.39836V12.75C19.5 15.6371 17.5419 18.9972 12.2605 20.9533L12 21.0498L11.7395 20.9533C6.45811 18.9972 4.5 15.6371 4.5 12.75V5.39836L12 3.73169ZM6 6.60161V12.75C6 14.8245 7.3659 17.6481 12 19.4479C16.6341 17.6481 18 14.8245 18 12.75V6.60161L12 5.26828L6 6.60161Z"
                      fill="#6496B3"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-sm font-medium text-gray-500">Integrity</h3>
              </div>
            </div>

            {/* Card 6 - Vibrance */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#6496B3"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 21C16.4183 21 20 17.6439 20 13.504C20 9.76257 17.9654 6.83811 16.562 5.44436C16.3017 5.18584 15.8683 5.30006 15.7212 5.63288C14.9742 7.3229 13.4178 9.75607 11.4286 9.75607C10.1975 9.92086 8.31688 8.86844 9.83483 3.64868C9.97151 3.17868 9.46972 2.80113 9.08645 3.11539C6.9046 4.90436 4 8.51143 4 13.504C4 17.6439 7.58172 21 12 21Z"
                      stroke="#6496B3"
                      stroke-width="1.5"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-sm font-medium text-gray-500">Vibrance</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MD */}

      <section className=" bg-gray-100 mt-0 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                <div className="px-4 flex-auto"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-16">
            <div className="w-full md:w-7/12 px-4 mr-auto ml-auto">
              <p className="inline-block px-0 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                MANAGING DIRECTOR
              </p>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                ONKABETSE MONNAWAPULA
              </h3>
              <div className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                {/* At Zimele Technologies Botswana, we believe that the right
                technology, combined with the right team, can transform
                businesses and unlock limitless potential. Our mission is to
                empower our clients with innovative solutions, tailored
                strategies, and unwavering support. Together, we don’t just
                adapt to change – we drive it */}
                Onkabetse Monnawapula is a seasoned executive with over a decade
                of experience in accounting and information technology.
                Currently serving as the Managing Director of Zimele
                Technologies Botswana, he brings a wealth of knowledge in
                leading IT organizations and driving strategic growth. <br/> He holds
                a Master’s Degree in Business Administration, which complements
                his extensive background in SAP environments and technology
                solutions. With 12 years of experience specializing in
                information technology and 10 years in accounting, Onkabetse has
                developed a comprehensive understanding of business operations
                and technology integration. <br/>His leadership over the past five
                years as Managing Director has been marked by innovative
                initiatives and effective management of complex IT projects.
                Onkabetse's extensive expertise and dedication have been
                demonstrated through his professional work spanning Botswana and
                South Africa, enabling him to bring a diverse perspective to
                Zimele Technologies Botswana. His international experience
                continues to position Zimele Technologies as a key player in the
                technology sector.
              </div>

              <p className="font-bold text-blueGray-700 mt-7">
                Innovate. Transform. Succeed.
              </p>
            </div>
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg">
                <img
                  src={md}
                  alt="avatar"
                  className=" w-full h-auto flex max-h-lvh"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*ACCREDITATIONS AND CERTIFICATES*/}
      <section className="px-24 pt-10">
        <h2 className="my-4 font-bold text-xl text-center sm:text-4xl ">
          CERTIFICATES AND ACCREDITATIONS
        </h2>
        <div className="relative sm:mx-auto sm:mb-2 -mx-2 p-4">
          <div className="p-2 w-1/2">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="font-medium">
                Certificates and Accreditations
              </span>
            </div>
          </div>
          <div className="p-4">
            <li>SAP Silver Partner</li>
            <li>Economic Diversification Drive (EDD)</li>
            {/* <li>
              PPADB - 203 Electrical, Electronic, Mechanical, Fire and ICT
              Supplies
            </li>
            <li>PPADB - 319 ICT Consultancy</li> */}
          </div>

          <div className="p-2 w-1/2">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="font-medium">PPRA CODES</span>
            </div>
          </div>
          <div className="p-4">
            <li>PPADB - 120 ICT Technical Support Services</li>
            <li>PPADB - 02 Electrical Engineering Works and Maintenance</li>
            <li>
              PPADB - 203 Electrical, Electronic, Mechanical, Fire and ICT
              Supplies
            </li>
            <li>PPADB - 319 ICT Consultancy</li>
          </div>
        </div>
      </section>
      {/*OUR INDUSTRY PARTNERS*/}
      <section className="bg-white py-16 content-center">
        <div className="max-w-8xl mx-auto px-10 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center">
            OUR INDUSTRY PARTNERS
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={ZimeleTechnologies}
                alt="avatar"
                className="w-[50%] h-auto flex max-h-lvh"
              />
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={CoreSystems}
                alt="avatar"
                className="w-[50%] h-auto flex max-h-lvh"
              />
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={Sew}
                alt="avatar"
                className="w-[50%] h-auto flex max-h-lvh"
              />
            </div>
          </div>
        </div>
      </section>

      {/*FOOTER*/}
      <footer className="relative pt-8 pb-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
          </div>
        </div>
      </footer>

      {/* OUR TEAM */}
      {/* <OurTeam /> */}
      {/* Team commented out*/}

      {/* FREQUENTLY ASKED QUESTIONS */}
      {/* <div className="bg-[#6496B3] bg-opacity-50 backdrop-blur-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white text-center">FAQ</h1>
        <p className="text-lg text-gray-200 text-center">
          Frequently asked questions
        </p>
        <Faq />
      </div> */}
    </>
  );
}
export default AboutPage;
