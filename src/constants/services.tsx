//icons
import { FiBriefcase } from "react-icons/fi";
import { SiAppstore } from "react-icons/si";
import { GiCloudRing } from "react-icons/gi";
import { IoCodeSharp, IoDocument, IoSettings } from "react-icons/io5";
import { PiMonitorBold, PiStrategyDuotone } from "react-icons/pi";
import { MdModelTraining } from "react-icons/md";
import { BsDatabaseFillGear } from "react-icons/bs";
import { AiOutlineSolution } from "react-icons/ai";
import { LuUtilityPole } from "react-icons/lu";
import { TbCloudComputing } from "react-icons/tb";
import { BiSolidInstitution } from "react-icons/bi";
import { FiArchive } from "react-icons/fi";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { FiTrello } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { LiaChartAreaSolid } from "react-icons/lia";
import { VscSymbolField } from "react-icons/vsc";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineAutoFixHigh } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { GrResources } from "react-icons/gr";


export const services = [   
    {
      title: "Enterprise Resource Planning (ERP)",
      description:
        "We provide enterprise application integration services that help unify various business processes across your organization. As an accredited SAP Silver partner, we deliver SAP ERP solutions that allow you to manage your entire enterprise through a single, integrated platform, spanning across all key functions. The key fields include (Supply Chain Management, Customer Relationship Management, Finance, Project Management, Human Resources and Payroll, Business Intelligence)",
      benefits: ["Personalised service: We build long-lasting relationships through dedicated support and collaboration.","Specialised knowledge: Our team has extensive experience in areas like revenue and billing, meter to cash, real estate management, and CRM. We also have strong industry insights within utilities and local government.", "Reliable delivery: We have worked with leading organisations, delivering and supporting numerous solutions.", "Comprehensive support: We maintain robust support structures to ensure systems run optimally.", "Efficient implementation: We adapt to your needs to ensure quick and effective execution."],
      target: ["Customers with compliance with regulatory requirements (e.g., GAAP, SCOA, MSCOA, IFRS)","Customers needing to integrate business processes and systems","Customers needing to enhance their client satisfaction", "Businesses needing a secure and reliable platform to manage operations", "Businesses needing an integrated business intelligence reporting", "Customers seeking to improve productivity"],
      detailsLink: "#",
      category: ["Services"],
      tags: ["ERP", "SAP ERP", "Consulting", "Implementation", "Support", "Public Sector"],
      icon: <BsDatabaseFillGear />,
    },
    {
      title: "ICT Governance and Strategy Consulting",
      description:
        "We offer expert consulting in developing governance frameworks, implementing enterprise architecture, and aligning ICT strategies with business objectives. Our methodology draws on industry-recognized standards such as COBIT 5, ITIL, TOGAF, AIIM, and PRINCE2 to ensure structured and effective outcomes.",
      benefits: ["Clear communication of the ICT department’s mandate","Prioritising ICT initiatives based on organisational value","Aligning ICT as a key enabler of business strategy", "Guiding ICT direction with a structured approach", "Establishing sound governance structures and organisational principles"],
      target: ["CEOs", "Board of Directors", "CIO/ IT Managers"],
      detailsLink: "#",
      category: ["Services"],
      tags: ["Governance", "Strategy", "Consulting", "Advisory", "Public Sector"],
      icon: <IoSettings />,
    },
    {
      title: "ICT Consulting",
      description:
        "Our range of ICT Counsulting services includes: ICT strategy development, COBIT based ICT governance framework development, ICT governance advisory services, ITIL service management services, Enterprise architecture, Policy review. These services are delivered to clients across various industries, including utilities, the public sector, energy, oil, gas, and real estate. We develop and implement models tailored to client needs, from once-off project support to ongoing retainer-based engagements.",
      benefits: ["Improved end-user satisfaction with ICT services", "Effective alignment of strategy, process, technology, and people", "Better alignment between ICT and business strategies", "Cost reduction and operational efficiency", "Forward planning to minimise challenges during strategy execution", "Maximised return on investment (ROI)"],
      target: ["CEOs", "Board of Directors", "CIO/IT Managers", "System end users", "The client’s customers"],
      detailsLink: "#",
      category: ["Services"],
      tags: ["ICT", "Consulting", "Advisory", "Governance", "Strategy"],
      icon: <PiStrategyDuotone />,
    },
    {
      title: "Application Maintenance and Support",
      description:
        "Our Application Maintenance and Support (AMS) services are designed to keep your systems operating smoothly and efficiently 24/7. We prioritize transparency and long-term partnerships, proudly continuing to support clients who have trusted us since the beginning. Through AMS we aim to Enhance User Experience, Reduce System Risks, Support System Evolution, maintain system Stability(through health and maintenance logs for auditing) and reduce coasts for your company",
      benefits: ["Enhanced User Experience: Users can report issues, bugs and give feedback. This approach ensures systems remain operational and experience minimal downtime.","Reducing System Risks: Our services help manage security vulnerabilities and protect against cyber-attacks, including new viruses, phishing attempts, and other threats that emerge daily.","System Stability: Our tools generate reports on system health and maintain logs for auditing, offering valuable insights into the performance and status of your systems.","Supporting System Evolution: We work alongside you to expand your system's capabilities as your business requirements evolve, helping you remain competitive and compliant.","Cost Efficiency: Our skilled support team applies effective methods to reduce support costs while maintaining a stable and efficient environment."],
      target: ["CIO/IT Managers", "System end users", "Application Managers", "Business Super users", "3rd Party Vendors"],
      detailsLink: "#",
      category: ["Services"],
      tags: ["Support", "Maintenance", "SAP ERP", "IT Services", "End Users", "Monitoring"],
      icon: <PiMonitorBold />,
    },
    {
      title: "SAP Technical & Functional End-User Training",
      description:
        "At Zimele Technologies Botswana, we are committed to equipping businesses and individuals with the skills that matter today and in the future. Our industry-aligned training programs focus on business competency, graduate capacity building, and SAP-certified training, ensuring that our clients stay ahead in a competitive landscape. With SAQA-accredited courses, specialized software training, and SAP-approved certifications, we provide tailored learning experiences designed to enhance both technical and soft skills. Whether through classroom-based learning, virtual facilitator-led training, or eLearning, our fit-for-purpose approach ensures impactful knowledge transfer.",
      benefits: ["Services SETA, Agri SETA, LG SETA, and ETDP SETA Accredited", "we help businesses maximize skills development cost recovery while fostering growth and efficiency"],
      target: ["Recent graduates", "Companies looking to upskill their employees"],
      detailsLink: "#",
      category: ["Services"],
      tags: ["Training", "SAP ERP", "Skills Development", "Education", "End Users"],
      icon: <IoCodeSharp />,
    },
    {
      title: "Customer Engage USSD App",
      description:
        "Enhance the municipal customer experience with USSD integration into the SAP system. Our cost-effective USSD solution allows customers to manage accounts, submit meter readings, and create notifications, making interactions more convenient and efficient.",
      benefits: ["Increased Customer Satisfaction", "Streamlined Operations", "Better Resource Management", "Accurate Data Capture", "Improved Customer Support"],
      target: ["Offers a cost-effective and easy-to-use channel for customer engagement", " Integrates USSD with SAP back-end systems to simplify processes.", "Reduces the need for manual customer service tasks.", "Enables customers to submit meter readings directly through USSD", "Allows customers to create notifications and receive updates on service requests."],
      detailsLink: "#",
      category: ["Products"],
      tags: ["USSD App", "Customer Engagement", "SAP IS-U", "Utilities", "Mobile App"],
      icon: <MdModelTraining />,
    },
    {
      title: "Contact Centre Solution for Utilities",
      description:
        "Contact Centre for utilities is an omnichannel customer service solution designed for utility companies, featuring support for multiple communication channels. The system is built using SAP Service Cloud and Sinch Contact Pro. It integrates seamlessly with SAP ERP or SAP S/4HANA through SAP Cloud Platform Integration (CPI).",
      benefits: ["Fast Implementation", "Omnichannel Capabilities", "Complete Customer View", "Cloud-Based Setup", " Real-Time Reporting"],
      target: ["Quickly take advantage of our solutions, making progress and improving efficiency.", "Connect with customers through self-service, chatbot, phone, email, SMS, USSD, Facebook, Twitter, and WhatsApp, meeting them where they are.", "Improve customer satisfaction and address issues promptly with a clear view of interactions.", "Simplify operations with a cloud-based setup, reducing the need for extensive internal systems.", "Allow customers to create notifications easily and stay informed about service requests."],
      detailsLink: "#",
      category: ["Products"],
      tags: ["SAP CX", "Sinch Contact Pro", "CRM", "Omnichannel", "Customer Engagement", "Utilities"],
      icon: <FiBriefcase />,
    },
    {
      title: "Software Development",
      description:
        "We design and develop custom software solutions tailored to your specific business needs, whether you’re optimizing internal processes, launching a digital product, or modernizing legacy systems. Our team transforms ideas into scalable, secure, and future-ready applications guiding you through every step of the development lifecycle, from strategy and design to deployment and ongoing support. We use modern technologies and agile methodologies to ensure our solutions align with your goals and evolve with your business.",
      benefits: ["Tailored to Your Business Needs", "Improved Efficiency and Automation","Scalable and Future-Proof Architecture", "Seamless Integration"],
      target: ["Industries such as Manufacturing, Logistics, Healthcare, Education – That require specialized applications, dashboards, or automated systems.", "Businesses needing business-specific tools to improve operations and customer engagement."],
      detailsLink: "#",
      category: ["Services"],
      tags: ["Development", "Custom Software", "Integration", "Web App", "Mobile App"],
      icon: <SiAppstore />,
    },
    {
      title: "Prepayment for Utilities",
      description:
        "Our SAP IS-U Prepayment allows utility customers to prepay for their accounts. It offers a simplified monitoring process for prepayment customers and provides insights into consumption relative to their balance. A key aspect of the SAP Prepayment solution is the use of smart meters to ensure accurate and frequent consumption and balance calculations. Key benefits includes: Revenue Collection - which ensures consistent and upfront revenue collection, Enhanced Customer Control - which empowers customers with better control over their water usage, leading to reduced consumption and cost savings. Transparency is improved by clearly linking daily water use to spending, Reliable Technology - which is built on a dependable system that has demonstrated technical stability over the years.",
      benefits: ["Revenue Collection: Ensures consistent and upfront revenue collection.", "Enhanced Customer Control: Empowers customers with better control over their water usage, leading to reduced consumption and cost savings. Transparency is improved by clearly linking daily water use to spending.", "Reliable Technology: Built on a dependable system that has demonstrated technical stability over the years."],
      target: ["Improved Cash Flow: Gain benefits from interest-bearing funds while reducing dunning and credit control activities.", "Customer Awareness: Eliminates unexpected bills, as customers can track their usage and balance through notifications and an online portal.", "Efficient Staff Training: Minimized training effort by focusing on the few new prepayment-specific functions, leveraging existing data models, processes, transactions, and tariffs."],
      detailsLink: "#",
      category: ["Products"],
      tags: ["SAP IS-U", "Prepayment", "Utilities", "Billing", "Customer Engagement", "Mobile App"],
      icon: <LuUtilityPole />,
    },
    {
      title: "Procman Meter Reading App",
      description:
        "The meter reading application meets the requirements for capturing meter readings as outlined by customers and clients. It is a native SAP solution designed specifically for capturing meter reading results in the field. The application is fully integrated with SAP Standard User Authentication, using authorisation function modules and rules configured within SAP.",
      benefits: ["Simplified Administration: Reduces administrative effort through streamlined processes.", "Easy Maintenance: Minimises maintenance complexities by integrating directly with SAP.", "Reliable Performance: Offers consistent performance with minimal downtime.", "User-Friendly Interface: Intuitive and straightforward to use."],
      target: ["Efficient Assignment and Management: Easily assign and manage meter reading orders per region, with the ability to split routes into smaller segments.", "Unified System: Utilises a single SAP system for creating, downloading, and uploading meter reading orders, providing seamless integration and reducing maintenance efforts.", "Direct SAP Integration: Ensures optimal performance without relying on middleware.","Designed for Meter Reading: The application is specifically built with the meter reading process in mind, making it straightforward for users"],
      detailsLink: "#",
      category: ["Products"],
      tags: ["Meter-to-Cash", "SAP IS-U", "Utilities", "Field Service", "Mobile App"],
      icon: <LiaChartAreaSolid />,
    },
    {
      title: "Zimele Field Auditor Application",
      description:
        "The ZFA (Zimele Field Auditor) Application is designed to support organisations that use ERP systems like SAP to manage business functions, including customer master data, technical master data, device management and metering, billing and invoicing, and financial reporting.",
      benefits: ["Enhanced Master Data Quality: Improves the accuracy and reliability of master data.","Revenue Collection: Optimises processes to reduce non-payment and late payment, supporting consistent revenue collection.", "Cost Reduction: Minimises expenses related to field audits by reducing paper usage and associated costs.","Paperless Operations: Eliminates paper trails, reducing printing, storage, and transportation costs.", " Integrated Solution: Updates data in near real-time, ensuring consistency between SAP and the Zimele Field Auditor Application."],
      target: ["Field Auditors: Easily capture and verify data from properties, including photos and notes, directly on mobile devices.", "Efficiency: Optimises invoicing processes, reducing errors and improving revenue collection.", "Digitization reduces printing, storage, and transportation costs associated with paper-based audits.", "Digitisation: Lowers operational costs by transitioning from paper-based audits to digital processes.", "Real-Time Updates: Ensures consistent data between SAP and the Zimele Utility Field Audit Application, promoting accurate revenue management."],
      detailsLink: "#",
      category: ["Products"],
      tags: ["Asset Management", "Field Audits", "SAP ERP", "Mobile App", "Field Service"],
      icon: <VscSymbolField />,
    },
    {
      title: "Advanced Metering Infrastructure (AMI)",
      description:
        "Our AMI solution enables your billing systems to read any meter, helping you enhance revenue collection and reduce operating costs. All our Intelligent Metering Solutions (IMS) are built on the SAP platform, allowing for seamless system integration.",
      benefits: ["Automated system alignment","Shorter meter reading and revenue collection cycles","Accurate meter readings, billing, and invoice creation", "Reduced manual labour", "Improved error handling"],
      target: ["Clients who are struggling to manage energy demand and grid operations", "Clients who are facing issues with energy theft, tampering, and meter failures", "Businesses which are dealing with inflexible energy billing processes", "Clients who are experiencing customer dissatisfaction due to frequent complaints"],
      detailsLink: "#",
      category: ["Products"],
      tags: ["AMI", "Smart Metering", "SAP IS-U", "Utilities", "Data Management", "Integration"],
      icon: <FaRegBuilding />,
    },
    {
      title: "Asset Verification Mobile Application",
      description:
        "Our solution for movable asset verification is designed to make asset management more efficient and accurate by streamlining the entire workflow, from preparation to reporting.",
      benefits: ["Improve accuracy and efficiency by using digital tools", "Reduce paperwork and streamline asset management", "Achieve accurate reporting"],
      target: ["Personnel can quickly scan barcodes on assets using mobile devices, enabling immediate identification and logging. Real-time data entry reduces delays in updating asset records, streamlining the process.", "The mobile application eliminates paper trails and digitises the asset management process, reducing errors associated with manual data entry.", "Automated scanning reduces the risk of human errors, ensuring consistent identification of assets and minimising discrepancies."],
      detailsLink: "#",
      category: ["Products"],
      tags: ["Asset Management", "Mobile App", "SAP ERP", "Field Service"],
      icon: <FiTrello />,
    },
    {
      title: "Employee Engage USSD App",
      description:
        "Our USSD application gives employees convenient access to essential HR information directly from their mobile phones. Users can easily view personal details, banking information, leave balances, and payslips at any time. The app supports both registration and deregistration, seamlessly integrating with SAP ERP to ensure real-time data management without needing an internet connection.",
      benefits: ["Improved Efficiency","Employee Engagement", "Informed Decision-Making","Flexible Deployment"],
      target: ["Automates HR processes, saving time and reducing manual work.", "Enhances the employee experience with intuitive tools for performance management and development.", "Provides analytics and reporting to support informed decision-making and HR planning.", "Can be quickly deployed and adjusted to meet changing organisational needs."],
      detailsLink: "#",
      category: ["Products"],
      tags: ["HR", "Employee Self-Service", "SAP ERP", "USSD App", "Mobile App"],
      icon:<MdOutlinePhonelinkRing />,
    },
    {
      title: "Zimele Procman Field Service Solution",
      description:
        "The Field Service Solution streamlines field service processes by aligning field operations with the backend system. It eliminates paper-based processes, enabling field technicians to capture work details on a mobile app that updates the backend system in real-time.",
      benefits: ["Easily customizable to fit to your operational framework", "Align system and field meter data instantly with process manager", "Eliminate dependency on third-party platforms", "Get real-time insights of field services in process manage"],
      target: ["Create a solution that fits seamlessly into your operational framework, enhancing productivity and accuracy in the field", "Synchronize system and field data in real-time, ensuring seamless integration and up-to-date information across your operations.", "Operate independently, eliminating the need for third-party platforms and ensuring greater control, security, and reliability for your operations.","Monitor, manage, and optimize field operations with unparalleled efficiency."],
      detailsLink: "#",
      category: ["Products"],
      tags: ["Field Service", "SAP IS-U", "Mobile App", "Utilities", "Integration"],
      icon: <GrServices />,
    },
    {
      title: "SCOA Enable Enterprise Resource Planning",
      description:
        "The Standard Chart of Accounts (SCOA) requires public sector organisations to relook and revisit their systems. Our SCOA-enabled ERP solution ensures that your organisation will be compliant and fully integrated. Most public sector organisations use this opportunity to do away with non-integrated solutions and introduce fully integrated solutions that are SCOA-enabled, future proofing themselves in the process. Our SCOA-enabled ERP solution is built on the SAP platform and ensures that your organisation is seamlessly integrated from procurement and inventory management, all the way through to project, records and facilities management. Pre-built solution means that implementation time is reduced, minimising your costs and increasing your time to market.",
      benefits: [" Improved customer relationship management","Improved efficiency and effectiveness in service delivery", "Accurate billing and invoicing of services", "Efficient management of addresses and regional structures", "Improved management of customer data","Improved revenue collection","Improved financial management"],
      target: ["Disparate legacy systems and applications","Unintegrated systems and applications", "Systems that are not compliant to government requirements such as SCOA, GRAAP, etc","No single view of client data","Inconsistent and inaccurate billing in the case of municipalities","Long periodic meter reading and billing cycles in the case of municipalities", "Lack of standard financial practices"],
      detailsLink: "#",
      category: ["Solutions"],
      tags: ["ERP", "SCOA Compliance", "Public Sector", "Integration", "SAP ERP"],
      icon: <GrResources />,
    },
    {
      title: "Real Estate Management",
      description:
        "Our Real Estate Management service offers a scalable and compliant solution tailored for organizations managing leased properties. From IFRS 16 lease accounting to comprehensive land, building, and tenant management, this solution is designed to streamline real estate operations. With tiered packages (Bronze, Silver, and Gold), you can choose the level of functionality that best suits your business needs, whether you’re handling basic lease administration or seeking full-featured financial reporting and strategic management tools.",
      benefits: ["Real Estate IFRS 16 Management Solution: Our real estateIFRS 16 management solution provides a complete and accurate IFRS 16 lease accounting solution. The new leasing standard will transform accounting, corporate real estate management, tax procurement, etc., allowing business processes to comply with the new IFRS 16accounting standards.", "Bronze Real Estate Management: designed for organisations that manage, bill for, or provide services within leased spaces. It offers comprehensive building, land, and lease management solutions with integrated accounting and real-time financial reporting.", "Silver Real Estate Management:  includes all aspects of our Bronze package, along with additional features designed for organisations requiring enhanced functionality.", "Gold Real Estate Management: builds on the capabilities of our Silver and Bronze packages, offering a comprehensive solution for real estate management."],
      target: ["Customers seeking to improve contract management for both customer and vendor agreements as well as making special management more effective", "Customers who want to meet IFRS 16 accounting standards.", "Enhance contract management for customer and vendor contracts.", "Maintain accurate billing information for better customer satisfaction."],
      detailsLink: "#",
      category: ["Solutions"],
      tags: ["Real Estate", "SAP ERP", "IFRS 16", "Financial Management", "Compliance"],
      icon: <BiSolidInstitution />,
    },
    {
      title: "SAP Customer Experience Solutions",
      description:
        "Customer Experience (CX) is a customer relationship management approach that ensures customers receive a seamless experience throughout their interactions with an organisation. SAP provides an integrated cloud solution portfolio that manages customer data, marketing, commerce, sales, services, and more, under SAP C/4 HANA. SAP CX Portfolio of Products include: SAP Customer Data Cloud, SAP Commerce Cloud, SAP Sales Cloud, SAP Service Cloud, SAP Marketing Cloud and Reporting layer.",
      benefits: ["We are an accredited SAP CX Implementation Partner with experience in both the public and private sectors.", "We ensure accurate and timely implementation.", "We support organisations throughout the entire process, from planning to implementation, testing, training, and ongoing support."],
      target: ["Companies undergoing digital transformation", "Organizations aiming to improve: Customer engagement, Omnichannel experiences, Customer loyalty, Data-driven marketing & service delivery"],
      detailsLink: "#",
      category: ["Solutions"],
      tags: ["SAP CX", "CRM", "Customer Engagement", "Digital Transformation", "Cloud-Based"],
      icon: <TbCloudComputing />,
    },
    {
      title: "Sinch Contact Pro",
      description:
        "Sinch Contact Pro is a cloud-based contact center solution supporting voice, e-mail, chat, SMS, messaging apps, and other channels. It enables organisations to deliver consistent customer service while managing operational costs effectively. Our clients choose us because: We are an accredited SAP CX Implementation Partner, We have extensive experience in both the public and private sectors, Our skilled team ensures accurate and timely implementation.",
      benefits: ["Quick Configuration and Deployment","Cost Efficiency", "Automatic Updates", "Flexible Scaling", "Accessible Anywhere"],
      target: ["Customer service and contact center teams looking for omnichannel engagement", "Teams looking to reduce infrastructure costs by moving away from legacy, on-premise call center systems", "Companies wanting API‑based flexibility to integrate tools such as chatbots, workforce management."],
      detailsLink: "#",
      category: ["Solutions"],
      tags: ["SAP CX", "Sinch Contact Pro", "Omnichannel", "Customer Engagement", "Call Center", "Cloud-Based"],
      icon: <IoDocument />,
    },
    {
      title: "Case & Records Management",
      description:
        "Built on the SAP Public Sector Case and Records Management platform, this is an integrated case management solution. It supports various municipal processes, from legal services to document management.",
      benefits: ["Automation of critical processes, improving efficiency and processing speed for municipal services", "Enhanced customer satisfaction and turnaround times", "Improved billing and lease management","Effective municipal property management", "Better monitoring of deferred maintenance on municipality-owned properties", "Capturing customer interactions, including documentation","Status monitoring with the ability to highlight problem areas", "Real-time application status updates for end users","Comprehensive reporting and trend analysis on applications"],
      target: ["Organisations managing cases and extensive document-based processes, including municipalities, national and provincial departments, and state-owned organisations."],
      detailsLink: "#",
      category: ["Solutions"],
      tags: ["Records Management", "Document Management", "SAP ERP", "Public Sector", "Compliance"],
      icon: <AiOutlineSolution />,
    },
    {
      title: "Electronic Documents & Records Management",
      description:
        "Built on the SAP NetWeaver platform, this solution provides an integrated approach to records, document management, and archiving. With a user-friendly interface, it enables secure storage of documents and records in folders or cases within the SAP Cloud. Designed to align with institutional compliance requirements worldwide, it simplifies document handling and governance. Key features includes: Document Management, Records Management, Archiving, and Compliance.",
      benefits: ["Lower Costs: Reduces administration expenses and resource usage and retires outdated systems while maintaining secure access to records while optimising storage lifecycle management to reduce costs.", "Enhanced Productivity: Provides direct access to business documents anytime, anywhere. Simplifies access to SAP data and documents within business process views and improves process efficiency and shortens cycle times while facilitating seamless collaboration.", "Compliance & Risk Management: Ensures secure, long-term archiving in a protected format. Supports compliance with legal retention requirements."],
      target: ["Organisations handling large volumes of documentation and seeking to streamline their processes while maintaining compliance."],
      detailsLink: "#",
      category: ["Solutions"],
      tags: ["Records Management", "Document Management", "SAP NetWeaver", "Compliance", "Cloud-Based"],
      icon: <FiArchive />,
    },
    {
      title: "SuccessFactors",
      description:
        "SAP SuccessFactors is a Human Capital Management (HCM) platform that simplifies workforce management processes across industries. Its core module, Employee Central, brings together essential HR functions like employee data management, payroll, and compliance, helping reduce administrative tasks. The platform also supports talent management, learning and development, and workforce planning through a cloud-based system. It covers the entire employee lifecycle, promotes skill development, and delivers insights to support decision-making.",
      benefits: ["Improved Efficiency","Employee Engagement", "Informed Decision-Making","Flexible Deployment"],
      target: ["Automates HR processes, saving time and reducing manual work.", "Enhances the employee experience with intuitive tools for performance management and development.", " Provides analytics and reporting to support informed decision-making and HR planning.", "Can be quickly deployed and adjusted to meet changing organisational needs."],
      detailsLink: "#",
      category: ["Solutions"],
      tags: ["SAP SuccessFactors", "HR", "Workforce Management", "Cloud-Based", "Employee Lifecycle"],
      icon: <BsFillFileEarmarkPersonFill />,
    },
    {
      title: "Meter To Cash",
      description:
        "Our Meter-to-Cash solutions streamline billing and invoicing processes to ensure accuracy and compliance with legal requirements. By integrating customer-facing activities with strong financial capabilities, these solutions enhance visibility into the bill-to-cash process. Our flexible processes enable you to increase automation, maintain consistent system performance, and support scalability. Core features include: Billing Management, Billing Rules, Payment Handling, Payment Channels, Collection Management, Credit Scoring and Automation and Prepayments.",
      benefits: ["Improved Efficiency","Employee Engagement","Informed Decision-Making","Flexible Deployment"],
      target: ["Automates HR processes, saving time and reducing manual work", "Enhances the employee experience with intuitive tools for performance management and development.", "Provides analytics and reporting to support informed decision-making and HR planning.", "Can be quickly deployed and adjusted to meet changing organisational needs."],
      detailsLink: "#",
      category: ["Solutions"],
      tags: ["Meter-to-Cash", "SAP IS-U", "Billing", "Revenue Management", "Utilities"],
      icon: <GiCloudRing />,
    },
    {
      title: "Automated Meter Reading(AMR) & Data Management",
      description:"Our Meter Data Management System (MDMS) solution automatically captures data from your smart meter for various purposes, including billing, troubleshooting, and analysing your current energy usage.",
      benefits: ["Automated meter reading cycle for all utility services, reducing meter reading costs","Revenue protection through incident and tamper alerts","Accurate billing to minimise technical losses","Enhanced management reporting","Real-time consumption graphs via the MDMS", "Improved consumption transparency"],
      target: ["Clients who experience: Challenges related to manual meter reading, difficulty accessing meter premises, lengthy meter reading and billing cycles, Incidents of electricity theft, tampering, or meter failure and Revenue collection challenges"],
      detailsLink: "#",
      category: ["Solutions"],
      tags: ["AMR", "Data Management", "SAP IS-U", "Utilities", "Smart Metering"],
      icon: <MdOutlineAutoFixHigh />,
    },
    {
      title: "Smart Metering",
      description:"Our Advanced Meter Infrastructure (AMI) services support organisations in planning and executing AMI rollouts efficiently. With our AMI suite of solutions, we help maintain meter-to-cash business processes through smart metering. Smart meters are enhanced versions of conventional power meters, powered either electrically or through gas. They vary in functionality and consist of multiple components to perform required tasks effectively. As an accredited SAP partner, we provide smart meter solutions throughout South Africa and beyond.",
      benefits: ["Quicker implementation","Standard meter-to-cash processes built on proven practices","Lower risk","Accurate consumption data and automated system alignment","Shorter meter reading cycle and quicker revenue collection","Reduced error rates"],
      target: ["Our smart metering solution helps address: Delays and challenges linked to manual meter reading, Issues accessing meter premises, Lengthy meter reading and billing cycles, Electricity theft, tampering, and meter failure, Under-collection of revenue"],
      detailsLink: "#",
      category: ["Solutions"],
      tags: ["Smart Metering", "AMI", "SAP IS-U", "Meter-to-Cash", "Utilities", "Integration"],
      icon: <GrTechnology />,
    },

  ];
