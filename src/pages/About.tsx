import Faq from "../components/faq";
import OurTeam from "../components/our-team";
import md from "../assets/md.jpg";
import team from "../assets/team.jpg";

function AboutPage() {
  return (
    <>
      <div className="relative z-0 bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={team}
            alt="Background Image"
            className="object-cover object-center w-full h-fit"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            We help our clients consistently see bigger picture.
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover amazing features and services that await you.
          </p>
          <a
            href="#"
            className="bg-[#6496B3] text-gray-900 hover:bg-[#a0c9e1] py-2 px-6 text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Learn more
          </a>
        </div>
      </div>
      {/* //   about section */}

      <section className="bg-white py-16 content-center">
        <div className="max-w-8xl mx-auto px-10 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-black text-center">
            ABOUT ZIMELE TECHNOLOGY BOTSWANA
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">
                  What we do
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We aim to make the world a better place through innovation and
                  collaboration.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">
                  How we work
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We believe in honesty, integrity, and respect for all
                  individuals.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="mt-5 content-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Where we work
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We envision a world where technology is used to solve the most
                  pressing issues facing humanity and improve people's lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MD */}

      <section className=" bg-gray-100 mt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                <div className="px-4 flex-auto"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-16">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <p className="inline-block px-0 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            MANAGING DIRECTOR
          </p>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                ONKABETSE MONNAWAPULA
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
        
              <a href="#" className="font-bold text-blueGray-700 mt-8">
                Check Notus JS!
              </a>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
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
        <footer className="relative pt-8 pb-6 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              </div>
            </div>
          </div>
        </footer>
      </section>

      {/* OUR TEAM */}
      <OurTeam />

      {/* FREQUENTLY ASKED QUESTIONS */}
      <div className="bg-[#6496B3] bg-opacity-50 backdrop-blur-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white text-center">FAQ</h1>
        <p className="text-lg text-gray-200 text-center">
          Frequently asked questions
        </p>
        <Faq />
      </div>
    </>
  );
}
export default AboutPage;
