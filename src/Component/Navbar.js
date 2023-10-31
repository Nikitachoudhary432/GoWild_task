import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const navData = [
  {
    text: "Home",
    link: "#home",
  },
  {
    text: "Features",
    link: "#features",
  },
  {
    text: "About Us",
    link: "#about",
  },
  {
    text: "Become a Guide",
    link: "#guide",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const sidebarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: menuOpen ? "30%" : 0,
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    transition: "width 0.3s",
    zIndex: 25,
  };

  return (
    <div className="flex justify-around items-center">
      <div className="lg:flex justify-center items-center w-full">
        <img src="/navbar.svg" alt="Logo" />
      </div>
      <div className="lg:hidden">
        <FiMenu
          onClick={toggleMenu}
          className="mr-3"
          color="#06C8F7"
          size={50}
        />
      </div>
      {menuOpen && (
        <div style={sidebarStyle}>
          <AiOutlineClose
            onClick={closeMenu}
            className="cursor-pointer text-white absolute top-4 right-4 text-2xl"
          />
          <ul>
            {navData.map((item, index) => (
              <li key={index} className="text-white text-2xl p-4">
                <a href={item.link} onClick={closeMenu}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="hidden lg:flex justify-between items-center w-full">
        {navData.map((temp, index) => (
          <div key={index} className="flex justify-between">
            <a href={temp.link}>{temp.text}</a>
          </div>
        ))}
      </div>
      <div className="hidden lg:flex justify-center items-center w-full">
        <img src="/Group.svg" alt="Group" />
      </div>
    </div>
  );
};

export default Navbar;
