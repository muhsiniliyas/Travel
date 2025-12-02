import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import {
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineMap,
  HiOutlineCalendarDays,
  HiOutlinePhoneArrowUpRight,
  HiOutlineUserCircle,
  HiOutlineGlobeAlt,
} from 'react-icons/hi2';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <HiOutlineHome className="text-xl" /> },
    { name: 'About', path: '/about', icon: <HiOutlineInformationCircle className="text-xl" /> },
    { name: 'Tours', path: '/tour', icon: <HiOutlineMap className="text-xl" /> },
    { name: 'Booking', path: '/booking', icon: <HiOutlineCalendarDays className="text-xl" /> },
    { name: 'Contact', path: '/contact', icon: <HiOutlinePhoneArrowUpRight className="text-xl" /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white shadow-lg">
              <HiOutlineGlobeAlt className="text-2xl" />
            </span>
            <span className="text-2xl font-bold text-gray-800 tracking-tight">
              TravelWorld
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-2 text-sm font-medium transition-all duration-300
                  ${isActive(link.path)
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'}
                `}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
                {isActive(link.path) && (
                  <span className="h-1 w-6 rounded-full bg-primary/80 translate-y-2" />
                )}
              </Link>
            ))}

            {/* Sign In button with icon */}
            <Link
              to="/signin"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full 
                         text-sm font-semibold hover:bg-blue-600 transition-all duration-300 
                         shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <HiOutlineUserCircle className="text-xl" />
              <span>Sign In</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 text-base font-medium transition-all duration-300
                  ${isActive(link.path)
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'}
                `}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}

            <Link
              to="/signin"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-primary text-white px-6 py-2 
                         rounded-full hover:bg-blue-600 transition-all duration-300 text-center"
            >
              <HiOutlineUserCircle className="text-xl" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
