import React, { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeout = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMouseEnter = (dropdown) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 200ms delay
  };

  const handleLinkClick = () => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(null);
    // You might want to also toggle mobile menu closed if this is a mobile link
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <nav className="bg-red-600 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="bg-white rounded-lg p-2 flex items-center">
              <img
                src="/images/logo.png"
                alt="Stei Logo"
                className="h-10 w-auto mr-2"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="bg-black rounded-full px-8 py-3 flex items-center space-x-6 xl:space-x-18">
              <a
                href="/"
                className="text-white hover:text-gray-300 px-3 py-2 text-base xl:text-lg font-medium transition-colors duration-300"
              >
                Home
              </a>

              {/* About Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => toggleDropdown("about")}
                  className="text-white hover:text-gray-300 px-3 py-2 text-base xl:text-lg font-medium flex items-center transition-colors duration-300"
                >
                  <span className="transition-colors duration-300 hover:text-gray-300">About</span>
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transform transition-all duration-300 ease-in-out group-hover:rotate-180 ${
                      activeDropdown === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 transform transition-all duration-300 ease-in-out ${
                    activeDropdown === "about"
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-4 invisible"
                  }`}
                >
                  <a
                    href="/story"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    The stei Story: Empowering Individuals
                  </a>
                  <a
                    href="/vision"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    Vision
                  </a>
                  <a
                    href="/founder"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    Founder Details
                  </a>
                  <a
                    href="/mentors"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    Our Mentors & Facilitators
                  </a>
                </div>
              </div>

              <a
                href="/products-services"
                className="text-white hover:text-gray-300 px-3 py-2 text-base xl:text-lg font-medium transition-colors duration-300"
              >
                Products & Services
              </a>

              {/* Our Impressions Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("impressions")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => toggleDropdown("impressions")}
                  className="text-white hover:text-gray-300 px-3 py-2 text-base xl:text-lg font-medium flex items-center transition-colors duration-300"
                >
                  <span className="transition-colors duration-300 group-hover:text-gray-300">Our Impressions</span>
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transform transition-all duration-300 ease-in-out group-hover:rotate-180 ${
                      activeDropdown === "impressions" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 transform transition-all duration-300 ease-in-out ${
                    activeDropdown === "impressions"
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-4 invisible"
                  }`}
                >
                  <a
                    href="/personal-experiences"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleLinkClick}
                  >
                    Personal Experiences with Mentor
                  </a>
                </div>
              </div>

              <a
                href="/form"
                className="text-white hover:text-gray-300 px-3 py-2 text-base xl:text-lg font-medium transition-colors duration-300"
              >
                Register Me
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300 focus:outline-none transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mb-3">
            <div className="px-2 pt-2 pb-3 space-y-3 bg-black rounded-xl mt-2">
              <a
                href="/"
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                Home
              </a>

              {/* Mobile About Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("mobile-about")}
                  className="text-white hover:text-gray-300 w-full text-left px-3 py-2 text-base font-medium flex items-center justify-between transition-colors duration-300 group"
                >
                  <span className="transition-colors duration-300 group-hover:text-gray-300">About</span>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-all duration-300 ease-in-out group-hover:text-gray-300 ${
                      activeDropdown === "mobile-about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`pl-6 space-y-1 overflow-hidden transition-all duration-400 ease-in-out ${
                    activeDropdown === "mobile-about"
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <a
                    href="/story"
                    className="text-white hover:bg-gray-800 block px-3 py-2 text-sm rounded transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    The stei Story: Empowering Individuals
                  </a>
                  <a
                    href="/vision"
                    className="text-white hover:bg-gray-800 block px-3 py-2 text-sm rounded transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    Vision
                  </a>
                  <a
                    href="/founder"
                    className="text-white hover:bg-gray-800 block px-3 py-2 text-sm rounded transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    Founder Details
                  </a>
                  <a
                    href="/mentors"
                    className="text-white hover:bg-gray-800 block px-3 py-2 text-sm rounded transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    Our Mentors & Facilitators
                  </a>
                </div>
              </div>

              <a
                href="/products-services"
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                Products & Services
              </a>

              {/* Mobile Our Impressions Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("mobile-impressions")}
                  className="text-white hover:text-gray-300 w-full text-left px-3 py-2 text-base font-medium flex items-center justify-between transition-colors duration-300 group"
                >
                  <span className="transition-colors duration-300 group-hover:text-gray-300">Our Impressions</span>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-all duration-300 ease-in-out group-hover:text-gray-300 ${
                      activeDropdown === "mobile-impressions" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`pl-6 space-y-1 overflow-hidden transition-all duration-400 ease-in-out ${
                    activeDropdown === "mobile-impressions"
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <a
                    href="/personal-experiences"
                    className="text-white hover:bg-gray-800 block px-3 py-2 text-sm rounded transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    Personal Experiences with Mentor
                  </a>
                </div>
              </div>

              <a
                href="/form"
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                Register Me
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close dropdown */}
      {activeDropdown && (
        <div className="fixed inset-0 z-40" onClick={handleLinkClick}></div>
      )}
    </nav>
  );
};

export default Navbar;