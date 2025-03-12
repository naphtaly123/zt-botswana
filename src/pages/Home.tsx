import { FiArrowRightCircle, FiBriefcase } from "react-icons/fi";
import ladyHero from "../assets/lady-hero.png";
import sapSilver from "../assets/SAP-Silver.jpg";
// import homeHero from "../assets/homeHero.jpg";

// import GetStartedBtn from "../forms/get-started-popup";
import OurMilestone from "../components/our-milestone";
import LogoSlider from "../components/logo-slider";
import Card from "../components/Card";
import { MdModelTraining } from "react-icons/md";
import { PiMonitorBold, PiStrategyDuotone } from "react-icons/pi";
import { GiCloudRing } from "react-icons/gi";
import { IoCodeSharp, IoDocument, IoSettings } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";
import OurSectors from "../components/our-sectors";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function HomePage() {
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

  const services = [
    {
      title: "Cloud Advisory & Implementation",
      description:
        "We provide expert guidance and seamless execution for cloud migration, optimization, and management. Our solutions enhance scalability, security, and cost-efficiency, ensuring your business leverages the full potential of cloud technologies.",
      detailsLink: "#",
      icon: <GiCloudRing />,
    },
    {
      title: "Project Management",
      description:
        "Our end-to-end project management ensures timely, budget-friendly, and goal-aligned IT projects. From planning to execution, we deliver results that drive your business forward.",
      detailsLink: "#",
      icon: <IoDocument />,
    },
    {
      title: "IT Strategy",
      description:
        "We create tailored IT roadmaps to align technology with your business goals. Our strategies help you innovate, optimize operations, and stay competitive in a digital-first world.",
      detailsLink: "#",
      icon: <IoSettings />,
    },
    {
      title: "Service Desk Advisory",
      description:
        "We optimize IT support operations with expert advice on service desk setup, processes, and tools. Our solutions enhance user satisfaction and streamline issue resolution.",
      detailsLink: "#",
      icon: <PiStrategyDuotone />,
    },
    {
      title: "Manage – IT Services",
      description:
        "We offer comprehensive IT service management to ensure smooth operations, proactive maintenance, and continuous improvement of your IT infrastructure.",
      detailsLink: "#",
      icon: <PiMonitorBold />,
    },
    {
      title: "SAP System Assessment",
      description:
        "Our in-depth SAP system evaluations identify gaps, optimize performance, and ensure alignment with your business needs for maximum efficiency.",
      detailsLink: "#",
      icon: <IoCodeSharp />,
    },
    {
      title: "SAP Technical & End-User Training",
      description:
        "We deliver customized training programs for technical teams and end-users, ensuring your SAP system is used effectively and efficiently.",
      detailsLink: "#",
      icon: <MdModelTraining />,
    },
    {
      title: "Digital Transformation",
      description:
        "We drive innovation and growth with tailored digital transformation strategies, helping businesses adopt cutting-edge technologies to stay ahead in the digital age.",
      detailsLink: "#",
      icon: <FiBriefcase />,
    },
    {
      title: "Software Development",
      description:
        "We design and develop custom software solutions tailored to your unique business needs, delivering scalable and future-ready applications from concept to deployment.",
      detailsLink: "#",
      icon: <SiAppstore />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="min-h-full pt-24 px-16 font-sans"
        style={{ backgroundColor: "#6496B3" }}
      >
      {/* <section
        id="_"
        className="relative z-0 bg-gradient-to-r from-purple-600 to-blue-600 h-fit text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={homeHero}
            alt="Background Image"
            className="object-cover object-center w-full h-fit"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div> */}


        <div className="mx-auto px-6 md:flex md:items-center relative z-10" id="hero">
          {/* Hero Text */}
          <div className="md:w-1/2 text-white py-1">
            <h4>ZIMELE TECHNOLOGIES BOTSWANA</h4>
            <h1 className="text-5xl font-semibold mb-4 mt-2 text-black">
              Ultimate IT Solutions for Modern Businesses
            </h1>
            <p className="mb-6">
              Unleashing the Power of IT for a Smarter, Faster, and More
              Efficient Enterprise. We are Your Trusted Partner in IT & SAP
              Excellence – Stay Ahead, Stay Secure.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center">
                  <FiArrowRightCircle className="text-[#102E7D] mr-2" />
                  <span>ERP Advisory and Quality Assurance</span>
                </div>
                <div className="flex items-center">
                  <FiArrowRightCircle className="text-[#102E7D] mr-2" />
                  <span>ERP Application Management (support)</span>
                </div>
                <div className="flex items-center">
                  <FiArrowRightCircle className="text-[#102E7D] mr-2" />
                  <span>ERP Implementations</span>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <FiArrowRightCircle className="text-[#102E7D] mr-2" />
                  <span>ERP Upgrade Services</span>
                </div>
                <div className="flex items-center">
                  <FiArrowRightCircle className="text-[#102E7D] mr-2" />
                  <span>Business Consulting Services</span>
                </div>
              </div>
            </div>

            {/* Get Started Button */}
            <div className="mt-6 bg-transparent">
              <img
                src={sapSilver}
                alt="avatar"
                className="rounded-lg w-36 h-auto flex max-h-lvh bg-transparent"
                style={{ background: "none" }}
              />
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 mt-0 h-full flex justify-center">
            <img
              src={ladyHero}
              alt="avatar"
              className="rounded-lg w-[115%] h-auto flex max-h-lvh"
            />
          </div>
        </div>
      </section>

      {/* Milestone Section */}
      <div className="py-0 w-full">
        <OurMilestone />
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
              solutions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-3 align-items-start">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                // detailsLink={service.detailsLink}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <OurSectors />

      {/* Video Section */}
      <section className="bg-[#6496B3] font-sans">
        {" "}
        {/* Added sans-serif font */}
        <div className="section h-full flex flex-col justify-center items-center mx-auto py-7">
          <h1 className="text-center text-xl text-white font-semibold mb-7">
            UNLOCK EFFICIENCY, DRIVE GROWTH AND INNOVATE WITH SAP-<br></br>
            POWERED BUSINESS SOLUTIONS
          </h1>
          <iframe
            width="60%"
            height="500"
            src="https://www.youtube.com/embed/IQ8dW9_72fk?si=riA8CnPiAy0xBrFP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Logo Slider Section */}
      <LogoSlider />
    </>
  );
}

export default HomePage;
