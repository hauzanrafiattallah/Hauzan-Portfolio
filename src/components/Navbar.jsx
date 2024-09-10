import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import logo from "../assets/logoHR.jpg";
import cv from "../assets/CV_Hauzan_Rafi_Attallah.pdf";

const Navbar = () => {
  const handleLogoClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* logo section */}
      <div className="flex flex-shrink-0 items-center ">
        <img
          className="h-20 w-20 cursor-pointer "
          src={logo}
          alt="logo"
          onClick={handleLogoClick}
        />
      </div>

      {/* icon section */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a
          href="https://www.linkedin.com/in/hauzan-rafi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/hauzanrafiattallah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/hauzanrafi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
        >
          <TbFileCv />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
