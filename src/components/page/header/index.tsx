import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from '../../../assets/logo/rp-solda.svg'

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (section: string) => {
    document.querySelector(`#${section}`)?.scrollIntoView({ behavior: 'smooth' });
    setIsDropdownOpen(false);
  };

  return (
    <header className="w-full flex items-center justify-between px-4 py-4 bg-gray-100 shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center" style={{ width: 65, height: 65 }}>
        <LazyLoadImage
          src={logo}
          alt="Logo"
          className="w-full h-full object-cover mx-4"
        />
      </div>

      <nav className="flex sm:space-x-6 sm:flex-row flex-col sm:items-center sm:space-y-0 space-y-4">
        <div className="hidden sm:flex space-x-6 text-lg font-medium">
          <a href="#about" className="hover:text-rpRed">Sobre nós</a>
          <a href="#services" className="hover:text-rpRed">Serviços</a>
          <a href="#contact" className="hover:text-rpRed">Contato</a>
        </div>

        <div className="sm:hidden relative">
          <button
            onClick={handleDropdownToggle}
            className="text-rpRed focus:outline-none"
          >
            Menu
          </button>
          <div
            className={`absolute top-12 right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 transition-all ease-out duration-300 ${
              isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <ul>
              <li>
                <button
                  onClick={() => handleOptionClick('about')}
                  className="block w-full px-4 py-2 text-left text-lg text-rpRed bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Sobre nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOptionClick('services')}
                  className="block w-full px-4 py-2 text-left text-lg text-rpRed bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOptionClick('contact')}
                  className="block w-full px-4 py-2 text-left text-lg text-rpRed bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
