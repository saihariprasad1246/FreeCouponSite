import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-6 text-center shadow-lg sticky top-full left-0 w-full">
      <p className="text-xl font-medium">
        Designed & Developed by
        <a
          href="https://saihariprasad1246.github.io/portfolio_website/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 hover:text-yellow-200 font-bold mx-1"
        >
          SaiHariPrsad
        </a>
        &
        <a
          href="https://your-portfolio-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 hover:text-yellow-200 font-bold mx-1"
        >
          Mohith Sai
        </a>
      </p>
    </footer>
  );
};

export default Footer;
