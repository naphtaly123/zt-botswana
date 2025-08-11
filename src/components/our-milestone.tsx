import CountUp from "react-countup";

function OurMilestone() {
  return (
    <div className="p-4 md:p-6 text-[#000] bg-[#fff]">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 py-8">
          <div className="md:border-r border-gray-200 px-12">
            <h2 className="text-4xl text-[#6496B3] md:text-5xl font-semibold text-center">
              <CountUp end={5} duration={2} suffix="+" />
            </h2>
            <p className="mb-2 text-center">Years Experience</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 py-8">
          <div className="lg:border-r border-gray-200 px-12">
            <h2 className="text-4xl text-[#6496B3] md:text-5xl font-semibold text-center">
              <CountUp end={5} duration={2.5} suffix="+" />
            </h2>
            <p className="mb-2 text-center">Businesses Supported</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 py-8">
          <div className="md:border-r border-gray-200 px-12">
            <h2 className="text-4xl text-[#6496B3] md:text-5xl font-semibold text-center">
              <CountUp end={10} duration={2.5} suffix="+" />
            </h2>
            <p className="mb-2 text-center">Projects Done</p>
          </div>
        </div>
        {/* <div className="w-full md:w-1/2 lg:w-1/4 py-8">
          <div className="px-12">
            <h2 className="text-4xl text-[#6496B3] md:text-5xl font-semibold text-center">
              <CountUp end={45} duration={3} suffix="+" />
            </h2>
            <p className="mb-2 text-center">Clients</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default OurMilestone;
