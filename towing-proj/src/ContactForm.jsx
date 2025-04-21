import { useState } from "react";

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-black text-yellow-500 px-6 py-3 font-bold"
      >
        Open Contact Form
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-700 text-lg"
            >
              ✖
            </button>
            <h2 className="text-3xl font-bold mb-6 text-center">
              CONTACT <span className="font-extrabold">FORM</span>
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="border p-3 w-full text-gray-700"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border p-3 w-full text-gray-700"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="border p-3 w-full text-gray-700"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-3 w-full text-gray-700"
                />
              </div>
              <textarea
                placeholder="Message"
                className="border p-3 w-full h-32 text-gray-700"
              ></textarea>
              <button className="bg-black text-yellow-500 px-6 py-3 font-bold w-full">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
