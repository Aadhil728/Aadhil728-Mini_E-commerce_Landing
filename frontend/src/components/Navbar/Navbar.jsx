import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSun, FaMoon, FaShoppingCart } from 'react-icons/fa';
import SearchComponent from '../Search/Search'

const Navbar = () => {

  const MenuLinks = [
    {
      id: 1,
      name: 'Home',
      link: '/'
    },
    {
      id: 2,
      name: 'Shop',
      link: '/shop'
    },
    {
      id: 3,
      name: 'About',
      link: '/about'
    },
    {
      id: 4,
      name: 'Blogs',
      link: '/blog'
    },
  ]

  const [darkMode, setDarkMode] = useState(false);

  // Load the theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  // Toggle theme and save to localStorage
  const toggleDarkMode = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className='navbar bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='container py-4 flex items-center justify-between'>
        <div className="flex items-center justify-between w-2/4">
          <div className="logo">
            <Link to={'/'} className='text-primary font-bold tracking-wider text-2xl uppercase sm:text-3xl'>AARASHOP</Link>
          </div>
          <div className="menuItems hidden">
            <ul className='flex gap-8 text-lg items-center'>
              {
                MenuLinks.map((link, index) => {
                  return <li key={index}>
                    <Link className='inline-block font-semibold text-gray-500 hover:text-primary dark:hover:text-white duration-200' to={link.link}>{link.name}</Link>
                  </li>
                }
                )
              }
            </ul>
          </div>
        </div>

        <div className="icons w-2/4 flex items-center justify-end gap-8">
          <SearchComponent />
          <div className="cart relative flex justify-center items-center">
            <FaShoppingCart />
            <span className='flex justify-center items-center absolute top-[-15px] right-[-12px] bg-primary w-[20px] h-[20px] rounded-full text-white text-[13px]'>1</span>
          </div>
          <button
            onClick={toggleDarkMode}
            className='theme-toggle-button'
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={15} />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar