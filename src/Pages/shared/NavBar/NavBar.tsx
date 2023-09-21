import React, { useEffect, useState } from 'react';
import NavEnd from './NavEnd';
import logo from '../../../Images/main-logo.svg'
import NavMobile from './NavMobile';
import DesktopNav from './DesktopNav';


const NavBar = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <>
      <header
        className={`${bg ? 'bg-gradient-to-r from-[#FB4051] to-[#c54485] h-20' : 'h-24'
          } flex items-center fixed top-0 w-full px-5 text-white z-10 transition-all duration-300 `}
      >
        <div className='container mx-auto h-full flex items-center justify-between w-11/12'>

          <div className='hidden lg:block'>
            <DesktopNav />
          </div>
          <div className='hidden lg:block'>
            <a href='/' className=''>
              <h3 className='w-48'> <img src={logo} alt="" /> </h3>
            </a>
          </div>
          <div className='hidden lg:block'>
            <NavEnd />
          </div>
          <div className='lg:hidden'>
            <NavMobile />
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;