import React, { useState } from 'react'
import User from '../assets/images/header/MichaelReeves.jpg';
import SideBarBtn from '../assets/images/header/sidebarImg.svg';
import { IoHome } from "react-icons/io5";
import { PiBarbellFill } from "react-icons/pi";
import { PiBowlFoodFill } from "react-icons/pi";
import { IoLogOut } from "react-icons/io5";

import { Link } from 'react-router-dom';
export default function Sidebar() {
  const [closeSidebar, setcloseSidebar] = useState(false);
  const toggleSidebar = () => {
    setcloseSidebar((prevState) => !prevState);
  }
  return (
    <>
      <div
        className={`fixed inset-0 z-20 bg-black transition-opacity duration-300 ease-in-out ${
          closeSidebar ? 'opacity-0 pointer-events-none' : 'opacity-50'
        }`}
        onClick={toggleSidebar} 
      >
      </div>
      {/* Sidebar */}
      <main
        className={`fixed inset-0 w-[85vw] z-50 h-full bg-light-blue transform transition-transform duration-300 ease-in-out ${
          closeSidebar ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <header className='flex items-center justify-between h-[5.5rem] p-3 max-h-[5.5rem] border-b-black border-b'>
        <div className='flex'>
          <img
              src={User}
              alt="User Profile"
              className="w-14 h-14 rounded-full object-cover border-2 border-black"
              />
            <span className='flex-col ml-3'>
              <h1 className='font-semibold text-xl'>Where to?</h1>
              <p className='text-base mt-[-5px]'>Michael Reeves</p>
            </span>
        </div>
          <span className='flex items-end mr-5'>
            <button onClick={toggleSidebar}>
              <img src={SideBarBtn} alt="" className='items-end' />
            </button>
          </span>
        </header>

        <section className='p-10'>
          <nav className='flex flex-col gap-10'>
            <Link to={'/home'} className='flex items-center gap-2'>
              <IoHome className='text-4xl' />
              <h1 className='text-xl font-semibold'>Home</h1>
            </Link>

            <Link to={'/exercise'} className='flex items-center gap-2'>
              <PiBarbellFill className='text-4xl' />
              <h1 className='text-xl font-semibold'>Exercise</h1>
            </Link>

            <Link to={'/mealplan'} className='flex items-center gap-2'>
              <PiBowlFoodFill className='text-4xl' />
              <h1 className='text-xl font-semibold'>Diet Plan</h1>
            </Link>

            <Link to={'/logout'} className='flex items-center gap-2'>
              <IoLogOut className='text-4xl' />
              <h1 className='text-xl font-semibold'>Log Out</h1>
            </Link>
          </nav>
        </section>
      </main>
    </>
  )
}
