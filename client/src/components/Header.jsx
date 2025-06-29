import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className='bg-white shadow-md border-b border-gray-200'>
      <div className='flex justify-between items-center max-w-7xl mx-auto px-6 py-5'>
        {/* Logo */}
        <Link to='/'>
          <h1 className='text-2xl sm:text-3xl font-extrabold flex flex-wrap'>
            <span className='text-indigo-700'>Ada</span>
            <span className='text-purple-500'>codeAI</span>
          </h1>
        </Link>

        {/* Search */}
        <form className='bg-gray-100 p-2 sm:p-3 rounded-lg flex items-center shadow-inner'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64 text-sm sm:text-base'
          />
          <FaSearch className='text-gray-600 ml-2' />
        </form>

        {/* Nav Items */}
        <ul className='flex gap-4 items-center text-sm sm:text-base font-medium'>
          <Link to='/'>
            <li className='hidden sm:inline text-gray-700 hover:underline hover:text-indigo-600 transition'>Home</li>
          </Link>

          {/* Highlighted Apply Now Button */}
          <Link to='/internships'>
            <li className='text-purple-500 font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition bg-white border border-purple-200 hover:bg-purple-50'
                style={{ boxShadow: '0 0 8px rgba(96, 165, 250, 0.5)' }}>
              
Apply for Internship
            </li>
          </Link>

          {/* Partner with Us (regular nav) */}
          <Link to='/partner'>
            <li className='hidden sm:inline text-gray-700 hover:underline hover:text-indigo-600 transition'>Partner with Us</li>
          </Link>

          <Link to='/about'>
            <li className='hidden sm:inline text-gray-700 hover:underline hover:text-indigo-600 transition'>About</li>
          </Link>

          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-9 w-9 object-cover border-2 border-indigo-500'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className='text-gray-700 hover:underline hover:text-indigo-600 transition'>Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}


