import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-[90%] mx-auto my-8 flex justify-between items-center text-[#495e57] font-semibold">
      <div>&copy; 2023 Little Lemon</div>
      {/* <div className="flex items-center gap-2">
        Made with <FaHeart /> by
        <a href="https://www.linkedin.com/in/tahsinismail">Tahsin</a>
      </div> */}
      <div className="flex gap-4">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook size={18} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={18} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
