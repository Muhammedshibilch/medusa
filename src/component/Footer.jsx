import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white py-8" style={{ backgroundColor: "black" }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-start md:items-center md:flex-row mb-6 md:mb-0">
          <img
            src="https://medusa-sportwagen.de/wp-content/uploads/elementor/thumbs/Logo-MEDUSA-SPORTWAGEN-GmbH-weiss-3000x800px-1-qqkj6nl03pxg4w3ypjzo20vbbeqdxbfsklryoudvr4.png"
            alt="Medusa Sportwagen Logo"
            className="w-40 mb-4 md:mb-0 md:mr-6"
          />
          <div className='ms-5'>
            <h2 className="text-lg font-semibold">TERMINE NACH VEREINBARUNG</h2>
            <p className="text-sm">Montag - Freitag: 10:00 - 18:00 Uhr</p>
          </div>
        </div>

        {/* Information Section */}
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex flex-col md:flex-col md:mr-6 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2 ms-4">WEITERE INFORMATIONEN</h2>
            <ul className="text-sm space-y-2">
              <li className="text-red-500"><a href="#" className="text-red-500 no-underline">AGB</a></li>
              <li className="text-red-500"><a href="#" className="text-red-500 no-underline">Datenschutzerklärung</a></li>
              <li className="text-red-500"><a href="#" className="text-red-500 no-underline">Impressum</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0 justify-center md:justify-start">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className='text-red-500 mt-5' />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className='text-red-500 mt-5' />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-4 text-sm">
        <p>© 2024 MEDUSA-Sportwagen - Powered by Efficient Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;
