
import React from "react";

function Contact() {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <form className="mt-4 space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 border rounded"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full p-2 border rounded"
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default Contact;
