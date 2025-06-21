import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-2xl font-bold">PR</div>

        {/* Center: Nav Links (Desktop only) */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#service" className="hover:text-gray-400">Services</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Right: Button (Desktop only) */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-green-400 to-blue-500
           text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
            onClick={() => {
              window.location.href = 'whatsapp://send?phone=918056903264&text=Hello%20there!';
            }}
          >
            Connect Me
          </button>
        </div>

        {/* Hamburger Icon (Mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#service" className="hover:text-gray-400">Services</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
            onClick={() => {
              window.location.href = 'whatsapp://send?phone=918056903264&text=Hello%20there!';
            }}
          >
            Connect Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
