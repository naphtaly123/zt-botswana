import { FiArrowRightCircle } from "react-icons/fi";
import ladyHero from "../assets/lady-hero.png";
import GetStartedBtn from "../forms/get-started-popup";
import OurMilestone from "../components/our-milestone";
import LogoSlider from "../components/logo-slider";

function HomePage() {
  return (
    <>
      {/* Hero Section Content */}
      <section className="min-h-full mt-16 px-10" style={{ backgroundColor: "#6496B3" }}>
    {/* Hero Content */}
    <div className=" mx-auto px-6 md:flex md:items-center"> {/* Set mt-0 here */}
        <div className="md:w-1/2 text-white py-1">
            <h1 className="text-5xl font-semibold mb-4 mt-14 text-black">
                Ultimate IT Solutions for Modern Businesses
            </h1>
            <p className="mb-6">
                Unleashing the Power of IT for a Smarter, Faster, and More
                Efficient Enterprise. We are Your Trusted Partner in IT & SAP
                Excellence – Stay Ahead, Stay Secure
            </p>

            {/* List with Icons */}
            <div className="mb-0 space-y-2">
                <div className="flex items-center">
                    <FiArrowRightCircle className="text-sky-400 mr-2" />
                    <span>Innovation, Optimization & Scalability</span>
                </div>
                <div className="flex items-center">
                    <FiArrowRightCircle className="text-sky-400 mr-2" />
                    <span>Business consulting</span>
                </div>
                <div className="flex items-center">
                    <FiArrowRightCircle className="text-sky-400 mr-2" />
                    <span>Maximum productivity and growth</span>
                </div>
                <div className="flex items-center">
                    <FiArrowRightCircle className="text-sky-400 mr-2" />
                    <span>Business Excellence</span>
                </div>
                <div className="flex items-center">
                    <FiArrowRightCircle className="text-sky-400 mr-2" />
                    <span>Digitalisation and website development</span>
                </div>
                <GetStartedBtn />
            </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 mt-0 h-full flex justify-center">
            <img
                src={ladyHero}
                alt="avatar"
                className="rounded-lg w-full h-auto flex max-h-lvh" 
            />
        </div>
    </div>
</section>
      <div className="py-0 w-full">
        <OurMilestone />
      </div>
      <section id="services" className="h-screen">
        services

      </section>
      <div className="section h-full flex flex-col justify-center items-center mx-auto bg-[#97bbd0] py-7">
        <h1 className="text-center text-xl text-white font-bold mb-7">
          UNLOCK EFFICIENCY, DRIVE GROWTH AND INNOVATE WITH SAP-POWERED BUSINESS
          SOLUTIONS
        </h1>
        <iframe
          width="60%"
          height="300"
          src="https://www.youtube.com/embed/IQ8dW9_72fk?si=riA8CnPiAy0xBrFP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <LogoSlider />
    </>
  );
}

export default HomePage;
