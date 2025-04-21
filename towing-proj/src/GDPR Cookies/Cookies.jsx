import { useState } from "react";

const Cookies = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleAccept = () => {
    setShowBanner(false);
  };

  const handleReject = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 z-1000 right-4 bg-white text-black p-4 shadow-lg flex flex-col items-start space-y-2 md:w-100 w-80">
      <p className="md:text-lg text-sm">
        We use cookies to enhance your experience. By accepting, you agree to our{" "}
        <a href="/privacy-policy" className="underline text-blue-400">
          Privacy Policy
        </a>.
      </p>
      <div className="flex space-x-3">
        <button
          onClick={handleAccept}
          className="bg-[#F0B100] text-black text-sm md:text-lg md:px-4 px-2 md:py-2 py-0.5 cursor-pointer rounded transition-all"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="bg-[#F0B100] hover:bg-white text-sm md:text-lg border cursor-pointer hover:border-[#F0B100] text-black md:px-4 px-2 md:py-2 py-0.5 rounded transition-all"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default Cookies;
