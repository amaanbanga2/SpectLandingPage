import React from "react";

const Book = ({ styles }) => {
  const handleClick = () => {
    const url = "https://calendly.com/sheelsansare/30min?month=2023-06";
    window.open(url, "_blank");
    // Alternatively, if you want to navigate within the same window, use:
    // window.location.href = url;
  };

  return (
    <button
      type="button"
      className={`py-2 px-4 font-poppins text-white font-medium text-[14px] text-primary bg-blue-gradient rounded-[7px] outline-none ${styles}`}
      onClick={handleClick}
    >
      Book Demo
    </button>
  );
};

export default Book ;
