import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleMenuToggle();
    }
  };
  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/result', label: 'RESULT' },
    { path: '/student-corner', label: 'STUDENT CORNER' },
    { path: '/select-center', label: 'SELECT CENTER' },
    { path: '/career', label: 'CAREER' },
    { path: '/employee', label: 'EMPLOYEE' },
    { path: '/gallery', label: 'GALLERY' },
    { path: '/enquiry', label: 'ENQUIRY' },
  ];
  return (
    <div className="sticky top-0 z-50">
      {/* Special Offer Banner */}
      <div className="w-full bg-yellow-300 py-3 text-center">
        <h2 className="text-2xl font-bold text-red-500">
          Hurry Special Fee benefits Offer on All Courses
        </h2>
      </div>
      {/* Main Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center"
              aria-label="Go to homepage"
              tabIndex="0"
            >
              <img
                src={'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2021/02/Logo-Dnyanjyoti-Copy.png'}
                alt="Dnyanjyoti Education Logo"
                className="h-16"
              />
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300"
                  aria-label={link.label}
                  tabIndex="0"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="p-2 rounded-md hover:bg-gray-100"
                onClick={handleMenuToggle}
                onKeyDown={handleKeyDown}
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
                tabIndex="0"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
                  aria-label={link.label}
                  tabIndex="0"
                  onClick={handleMenuToggle}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;