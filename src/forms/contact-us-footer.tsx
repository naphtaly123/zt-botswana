function ContactUsFooter() {
  // const handleSubmit = (event) => {
  //       event.preventDefault(); // Prevent the default form submission

  //       const formData = new FormData(event.target);
  //       const csrfToken = getCsrfToken();

  //       fetch('http://127.0.0.1:8000/mail/send-email/', {
  //         method: 'POST',
  //         headers: {
  //           'X-CSRFToken': csrfToken, // Include the CSRF token in the headers
  //         },
  //         body: formData,
  //       })
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log(data);
  //         // Handle success or error response
  //       })
  //       .catch(error => {
  //         console.error('Error:', error);
  //       });
  //     };

  return (
    <div className="section">
      <div>
        <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
          Contact Us
        </h2>
      </div>
      <div className="w-full p-1">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            className="peer w-full rounded border border-[#6496B3] bg-gray-100 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-100 focus:ring-2 focus:ring-indigo-900"
            placeholder="Name"
          />
          <label
            htmlFor="name"
            className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Name
          </label>
        </div>
      </div>
      <div className="w-full p-1">
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            className="peer w-full rounded border border-[#6496B3] bg-gray-100 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-100 focus:ring-2 focus:ring-indigo-900"
            placeholder="Email"
          />
          <label
            htmlFor="email"
            className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Email
          </label>
        </div>
      </div>
      <div className="mt-2 w-full p-1">
        <div className="relative">
          <textarea
            id="message"
            name="message"
            className="peer h-15 w-full resize-none rounded border border-[#6496B3] bg-gray-100 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-100 focus:ring-2 focus:ring-indigo-900"
            placeholder="Message"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Message
          </label>
        </div>
      </div>
      <div className="w-full p-1">
        <button className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-4 text-lg text-white hover:bg-indigo-600 focus:outline-none">
          Submit
        </button>
      </div>
    </div>
  );
}
export default ContactUsFooter;