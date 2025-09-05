import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

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

    {/* Search Bar */}
    <form className="hidden md:flex bg-gray-100 px-4 py-2 rounded-lg items-center shadow-inner w-80">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent text-base focus:outline-none w-full text-gray-700 placeholder-gray-500"
      />
      <FaSearch className="text-gray-500 ml-2" />
    </form>

    {/* Navigation */}
    <ul className="flex gap-5 items-center text-base font-medium">
      
      <Link to="/">
        <li className="hidden sm:inline text-gray-700 hover:text-indigo-700 transition duration-200">
          Home
        </li>
      </Link>

      <Link to="/internships">
        <li className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold">
          Apply for Internship
        </li>
      </Link>

      <Link to="/partner">
        <li className="hidden sm:inline text-gray-700 hover:text-indigo-700 transition duration-200">
          Partner with Us
        </li>
      </Link>

      <Link to="/about">
        <li className="hidden sm:inline text-gray-700 hover:text-indigo-700 transition duration-200">
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
</header>

  );
}



