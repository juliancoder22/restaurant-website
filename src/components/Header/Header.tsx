import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative lg:absolute lg:top-0">
      <div className="flex justify-between items-center w-screen bg-white p-4 lg:p-10 lg:border-b-2">
        <span className="text-xl font-bold">Logo</span>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-10">
          <span className="cursor-pointer font-semibold hover:text-teal-500">
            Contacto
          </span>
          <span className="cursor-pointer font-semibold hover:text-teal-500">
            Nosotros
          </span>
          <span className="cursor-pointer font-semibold hover:text-teal-500">
            Menu
          </span>
          <span className="cursor-pointer font-semibold hover:text-teal-500">
            Reservacion
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col w-screen bg-white lg:hidden absolute top-16 left-0 border-t-2 border-gray-200">
          <span className="cursor-pointer font-semibold p-4">Contacto</span>
          <span className="cursor-pointer font-semibold p-4">Nosotros</span>
          <span className="cursor-pointer font-semibold p-4">Menu</span>
          <span className="cursor-pointer font-semibold p-4">Reservacion</span>
        </div>
      )}
    </div>
  );
};

export default Header;
