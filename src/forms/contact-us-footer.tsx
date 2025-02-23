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
    <>
      <form method="POST" action="http://127.0.0.1:8000/mail/send-email/">
   
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="subject" placeholder="subject" />
        <textarea name="message" placeholder="Message" />
        <button type="submit" >Send</button>
      </form>
    </>
  );
}
export default ContactUsFooter;

// import React from 'react';

// function getCsrfToken() {
//   const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
//   return csrfToken;
// }

// function ContactUsFooter() {
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent the default form submission

//     const formData = new FormData(event.target);
//     const csrfToken = getCsrfToken();

//     fetch('http://127.0.0.1:8000/mail/send-email/', {
//       method: 'POST',
//       headers: {
//         'X-CSRFToken': csrfToken, // Include the CSRF token in the headers
//       },
//       body: formData,
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       // Handle success or error response
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="email" placeholder="Email" required />
//         <input type="text" name="subject" placeholder="Subject" required />
//         <textarea name="message" placeholder="Message" required />
//         <button type="submit">Send</button>
//       </form>
//     </>
//   );
// }

// export default ContactUsFooter;