import React from "react";

const MyFoot = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-center text-white mt-5">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {currentYear} Copyright: FilmGram
      </div>
    </footer>
  );
};

export default MyFoot;
