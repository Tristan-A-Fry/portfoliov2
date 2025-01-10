

// import React from "react";
//
// function Contact() {
//     return (
//         <section
//             id="contact"
//             className="min-h-screen flex items-center justify-center bg-gray-50 p-6"
//         >
//             <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
//                 <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
//                 <form className="space-y-4">
//                     <input
//                         type="text"
//                         placeholder="Your Name"
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                     <input
//                         type="email"
//                         placeholder="Your Email"
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                     <textarea
//                         placeholder="Your Message"
//                         className="w-full p-2 border border-gray-300 rounded"
//                     ></textarea>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                     >
//                         Send
//                     </button>
//                 </form>
//             </div>
//         </section>
//     );
// }
//
// export default Contact;


import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_hi7ghoy', // Replace with your EmailJS service ID
                'template_b3hoads', // Replace with your EmailJS template ID
                form.current,
                '70I9NgpAmo88d6Vpw' // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    alert("Message sent successfully!");
                },
                (error) => {
                    alert("Failed to send the message. Please try again later.");
                }
            );
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center bg-gray-50 p-6"
        >
            <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <input
                        type="text"
                        name="from_name" // Ensure this matches the placeholder in your EmailJS template
                        placeholder="Your Name"
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    <input
                        type="email"
                        name="to_name" // Ensure this matches the placeholder in your EmailJS template
                        placeholder="Your Email"
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    <textarea
                        name="message" // Ensure this matches the placeholder in your EmailJS template
                        placeholder="Your Message"
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
