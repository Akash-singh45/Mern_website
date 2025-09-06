import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5 min-h-[80px]">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight flex items-center">
            <span className="text-indigo-700">Ada</span>
            <span className="text-purple-500">codeAI</span>
          </h1>
        </Link>

        {/* Desktop Search Bar */}
        <form className="hidden md:flex bg-gray-100 px-4 py-2 rounded-lg items-center shadow-inner w-80">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-base focus:outline-none w-full text-gray-700 placeholder-gray-500"
          />
          <FaSearch className="text-gray-500 ml-2" />
        </form>

        {/* Hamburger menu button for mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-5 items-center text-base font-medium">
          <Link to="/">
            <li className="text-gray-700 hover:text-indigo-700 transition duration-200">
              Home
            </li>
          </Link>

          <Link to="/internships">
            <li className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold">
              Apply for Internship
            </li>
          </Link>

          <Link to="/partner">
            <li className="text-gray-700 hover:text-indigo-700 transition duration-200">
              Partner with Us
            </li>
          </Link>

          <Link to="/about">
            <li className="text-gray-700 hover:text-indigo-700 transition duration-200">
              About
            </li>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="profile"
                className="rounded-full h-10 w-10 object-cover border-2 border-indigo-500 hover:scale-105 transition"
              />
            ) : (
              <li className="text-gray-700 hover:text-indigo-700 transition duration-200">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col gap-6 px-6 mt-4 text-lg font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <li className="text-gray-700 hover:text-indigo-700 transition duration-200">
              Home
            </li>
          </Link>

          <Link to="/internships" onClick={() => setMenuOpen(false)}>
            <li className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold text-center">
              Apply for Internship
            </li>
          </Link>

          <Link to="/partner" onClick={() => setMenuOpen(false)}>
            <li className="text-gray-700 hover:text-indigo-700 transition duration-200">
              Partner with Us
            </li>
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <li className="text-gray-700 hover:text-indigo-700 transition duration-200">
              About
            </li>
          </Link>

          <Link to="/profile" onClick={() => setMenuOpen(false)}>
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="profile"
                className="rounded-full h-10 w-10 object-cover border-2 border-indigo-500 hover:scale-105 transition"
              />
            ) : (
              <li className="text-gray-700 hover:text-indigo-700 transition duration-200">
                Sign in
              </li>
            )}
          </Link>

          {/* Mobile Search Bar */}
          <form className="flex bg-gray-100 px-4 py-2 rounded-lg items-center shadow-inner mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-base focus:outline-none w-full text-gray-700 placeholder-gray-500"
            />
            <FaSearch className="text-gray-500 ml-2" />
          </form>
        </ul>
      </div>
    </header>
  );
}




