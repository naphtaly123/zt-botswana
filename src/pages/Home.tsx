import { FiBriefcase } from "react-icons/fi"; //FiArrowRightCircle
import ladyHero from "../assets/lady-hero.png";
// import sapSilver from "../assets/SAP-Silver.jpg";

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
      {/* <section
        className="min-h-full pt-24 px-16 font-sans"
        style={{ backgroundColor: "#6496B3" }}
      > */}
      <section
        id="_"
        className="relative z-0 bg-gray-900 h-fit text-white px-10 overflow-hidden"
      >
        {/* Background SVG and Gradient */}
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width="200"
              height="200"
              x="100%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              stroke-width="0"
            ></path>
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          ></rect>
        </svg>
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20">
            {/* style="clip-path:polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" */}
          </div>
        </div>

        <div
          className="mx-auto pt-24 px-6 md:flex md:items-center relative z-10"
          id="hero"
        >
          {/* Hero Text */}
          <div className="md:w-1/2 text-white py-1">
            <h3 className="text-lg">ZIMELE TECHNOLOGIES BOTSWANA</h3>
            <h1 className="text-6xl font-bold tracking-tight text-white sm:text-6xl">
              Ultimate
              <span className="text-sky-500"> IT Solutions </span>for{" "}
              <span className="text-sky-500"> Modern </span>Businesses
              <span className="text-sky-500">.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Unleashing the Power of IT for a Smarter, Faster, and More
              Efficient Enterprise. We are Your Trusted Partner in IT & SAP
              Excellence – Stay Ahead, Stay Secure.
            </p>
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
          <video width="60%" height="500" controls muted>
            <source
              src="https://res.cloudinary.com/dh3ktp1w6/video/upload/v1744880806/Zimele_Tech_Botswana_ghi0qp.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Logo Slider Section */}
      <LogoSlider />
    </>
  );
}

export default HomePage;
