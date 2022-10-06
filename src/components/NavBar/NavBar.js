import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
  const [open , setOpen] = useState(false)
  return (
    <nav className='bg-green-400 w-full py-4 flex items-center justify-between fixed z-10 top-0 '>
      <div>
           {/* <h3 className='text-2xl font-bold mx-4'> MealDb</h3> */}
           <img src="favicon.ico" alt="logo" />
      </div>

      <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden mx-4'>
      {
        open ? <XMarkIcon /> : <Bars3Icon />      
      }
      </div>

      <div className={`bg-green-400 text-center w-full md:mx-4 md:pb-0 pb-3 flex md:flex-row flex-col gap-5 justify-end md:static absolute duration-500 ease-in ${
          open ? "top-12" : "top-[-160px]"
        }`}>
      <NavLink className={({ isActive }) =>
              isActive ? 'active' : undefined
            } to='/home'>Home</NavLink>
      <NavLink to='products'>Meal</NavLink>
      <NavLink to='/blog'>Blog</NavLink>
      <NavLink to='/about'>About Us</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;