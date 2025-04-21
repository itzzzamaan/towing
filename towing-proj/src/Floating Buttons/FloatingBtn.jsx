import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending data:", JSON.stringify(formData));

    try {
      const response = await fetch(
        "http://192.168.1.35:8081/api/send-message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setIsOpen(false);
        setFormData({ name: "", mobile: "", email: "", message: "" }); // Reset form
      } else {
        console.error("Server error:", responseData);
        alert(
          `Failed to send message: ${responseData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="fixed bottom-6 md:bottom-8 left-4 z-50 flex flex-col items-start md:space-y-1">
        <Link
          to="https://wa.me/447398984847"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff"
              d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
            ></path>
            <path
              fill="#cfd8dc"
              d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5"
            ></path>
            <path
              fill="#40c351"
              d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
            ></path>
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h1 className="bg-[#F0B100] text-black text-xs rounded-md h-fit py-1 px-1 font-semibold">
            Whatsapp Us
          </h1>
        </Link>

        <button
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <svg
            className="text-blue-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="bg-[#F0B100] text-black text-xs rounded-md h-fit py-1 px-1 font-semibold">
            Enquiry Form
          </h1>
        </button>
      </div>

      {isOpen && (
        <div className="fixed mt-20 inset-0 z-50 flex items-center justify-center bg-opacity-40 p-4">
          <div className="bg-white w-full max-w-sm mx-auto p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-black cursor-pointer text-lg"
            >
              <X />
            </button>
            <h2 className="text-lg text-black font-bold mb-2 text-center">
              CONTACT FORM
            </h2>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="border p-3 w-full text-gray-700 rounded-lg"
                onChange={handleChange}
                value={formData.name}
                required
              />
              <input
                type="text"
                name="mobile"
                placeholder="Phone number"
                className="border p-3 w-full text-gray-700 rounded-lg"
                onChange={handleChange}
                value={formData.mobile}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border p-3 w-full text-gray-700 rounded-lg"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="border p-3 w-full h-24 text-gray-700 rounded-lg"
                onChange={handleChange}
                value={formData.message}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-black text-yellow-500 cursor-pointer px-6 py-3 font-bold w-full rounded-lg hover:bg-gray-900"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingBtn;
