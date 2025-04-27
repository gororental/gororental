import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Squash } from "hamburger-react";
import BrandIcon from "../assets/BrandIcon.png"

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = ["home", "cars", "reviews", "faqs", "contact"];

  const toggleOpenMenuState = () => {
    setIsOpen(!isOpen);
  };

  const scrolltoSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveSection(id);
  };

  useEffect(() => {
    const id = location.hash.replace("#", "");
    scrolltoSection(id);
  }, [location.hash]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="w-screen h-[10vh] bg-white/50 font-Jost flex items-center justify-center border-b border-ext text-black backdrop-blur-3xl fixed z-10 top-0">
      <div
        id="centeredHeader"
        className="w-[95%] h-full flex items-center justify-between"
      >
       <img src={BrandIcon} alt="goro_" className="w-14 h-14" />

        {/* Hamburger Icon */}
        <div className="flex lg:hidden items-center justify-end">
          <Squash
            toggle={toggleOpenMenuState}
            toggled={isOpen}
            size={25}
            distance="md"
            color="black"
          />
        </div>

        {/* Background Overlay */}
        {isOpen && (
          <div
            className="absolute top-[10vh] left-0 w-screen h-[90vh] bg-black/70 z-20"
            onClick={toggleOpenMenuState}
          />
        )}

        {/* For mobile or small screen devices */}

        <div
          className={`lg:hidden absolute h-[90vh] w-[50%]  top-[10vh] right-0 bg-gray-300 rounded-l-lg backdrop-blur-md z-30 shadow-2xl transition-transform duration-500 ease-in-out overflow-hidden ${
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
          role="menu"
          aria-hidden={!isOpen}
          style={{ overflow: isOpen ? "visible" : "hidden" }}
        >
          <nav className="w-full h-4/6 flex flex-col items-center justify-around text-xl font-medium">
            {navLinks.map((section) => (
              <Link
                key={section}
                to={`#${section}`}
                className={`${
                  activeSection === section
                    ? "text-lime-500 font-normal"
                    : "hover:text-lime-500"
                }`}
                onClick={() => {
                  scrolltoSection(section);
                  setActiveSection(section);
                  setIsOpen(false);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>
        </div>
        {/* For laptops or larger screen sizes */}

        <nav className="hidden lg:flex w-[50%] xl:w-[40%] h-full items-center justify-between text-2xl 2xl:text-3xl font-light">
          <NavLinkMapping
            navLinks={navLinks}
            scrolltoSection={scrolltoSection}
            activeSection={activeSection}
          />
        </nav>
      </div>
    </header>
  );
}

const NavLinkMapping = ({ activeSection, scrolltoSection, navLinks }) => (
  <>
    {navLinks.map((section) => (
      <Link
        key={section}
        to={`#${section}`}
        className={`${
          activeSection === section
            ? "text-lime-500 font-normal"
            : "hover:text-lime-500"
        }`}
        onClick={() => scrolltoSection(section)}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </Link>
    ))}
  </>
);

export default Header;
