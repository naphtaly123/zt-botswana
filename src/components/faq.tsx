function Faq() {
  return (
    <div className="relative w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 pt-10 pb-8 mt-8 shadow-2xl ring-1 ring-blue-200 sm:mx-auto sm:max-w-3xl sm:rounded-2xl sm:px-10 transition-all duration-300">
      {/* <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Frequently Asked Questions</h2> */}
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-5"
          >
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer text-base font-semibold text-blue-800 hover:text-blue-600 transition-colors">
                <span>{faq.icon} {faq.question}</span>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    width="24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-gray-700 transition-all duration-300">
                {faq.answer}
              </p>
            </details>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <p className="text-sm text-gray-600">Still have questions?</p>
        <a href="mailto:support1@zimele.co.bw" className="text-blue-600 font-semibold hover:underline">
          Contact our support team →
        </a>
      </div>
    </div>
  );
}

const faqData = [
  {
    icon: "💡",
    question: "What services does your company offer?",
    answer:
      "We specialize mainly in SAP consultancy and IT solutions, including but not limited to: SAP ERP implementation, customization, and integration, SAP support and maintenance, SAP S/4HANA migration and upgrades, IT infrastructure management and cloud solutions, business process optimization using SAP tools, training and workshops for SAP end-users, SAP security and compliance, SAP data migration, as well as software development."
  },
  {
    icon: "🏭",
    question: "What industries do you serve?",
    answer:
      "We cater to a wide range of industries, including: Manufacturing and supply chain, retail and e-commerce, healthcare and pharmaceuticals, financial services and banking, energy and utilities, logistics and transportation."
  },
  {
    icon: "🤝",
    question: "Why should we choose your company for SAP solutions?",
    answer:
      "Our team consists of certified SAP consultants with years of experience. We tailor SAP implementations to meet your unique business needs and have successfully delivered projects across various industries. We also provide comprehensive support from planning to post-implementation and offer scalable solutions that maximize ROI."
  },
  {
    icon: "🚀",
    question: "Do you offer SAP S/4HANA migration services?",
    answer:
      "Yes, we specialize in SAP S/4HANA migration. Our services include: system assessment and readiness checks, data migration and cleanup, customization and integration with existing systems, and post-migration support and training."
  },
  {
    icon: "📧",
    question: "How do I contact support?",
    answer:
      "If you need help or have inquiries about our products or services, please contact us at info@zimele.co.bw"
  },
  {
    icon: "💰",
    question: "How much does SAP implementation cost?",
    answer:
      "The cost varies based on the scope of the project, number of users and modules, customization, and integration requirements. We provide a detailed cost breakdown during the initial consultation."
  }
];

export default Faq;
