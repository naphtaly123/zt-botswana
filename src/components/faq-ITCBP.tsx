function FaqITCBP() {
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
        <a href="#contact" className="text-blue-600 font-semibold hover:underline">
          Contact our support team →
        </a>
      </div>
    </div>
  );
}

const faqData = [
  {
    icon: "🎓",
    question: "Is prior experience required?",
    answer:
      "There is no prior experience needed."
  },
  {
    icon: "💻",
    question: "What equipment is needed?",
    answer:
      "You can bring your smart phone or PC if you have one. But there are not mandatory, as we will provide the necessary equipment."
  },
  {
    icon: "💰",
    question: "Are scholaships available?",
    answer:
      "Currently there are no scholarships available for this program."
  },
  {
    icon: "🚀",
    question: "Whow do i apply?",
    answer:
      "Follow our social media pages to stay updated on our annual IT Capacity Building Program."
  }
];

export default FaqITCBP;
