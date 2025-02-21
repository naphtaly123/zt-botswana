import { FiArrowRightCircle } from "react-icons/fi";

function HomePage() {
  return (
    <>
      {/* Navbar */}

      {/* Hero Section Content */}
      <section className="min-h-screen" style={{ backgroundColor: "#102E7D" }}>
        {/* Hero Content */}
        <div className="container mx-auto px-6 py-16 md:flex md:items-center">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl font-bold mb-4">
              Ultimate Solutions for Modern Businesses
            </h1>
            <p className="mb-6">
              Suscipit feugiat purus ac nunc amet, ld pulvinar arcu nibh orci
              non rhoncus lobortis id neque...
            </p>

            {/* List with Icons */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center">
                <FiArrowRightCircle className="text-sky-400 mr-2" />
                <span>Strategic excellence</span>
              </div>
              <div className="flex items-center">
                <FiArrowRightCircle className="text-sky-400 mr-2" />
                <span>Business consulting</span>
              </div>
              <div className="flex items-center">
                <FiArrowRightCircle className="text-sky-400 mr-2" />
                <span>Innovation</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-x-4">
              <button className="bg-white text-[#102E7D] px-6 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200">
                Learn more
              </button>
              <button className="border border-white text-white px-6 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:text-[#102E7D]">
                Contact Us
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src=""
              alt="Silhouette"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
