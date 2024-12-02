import SideBarBtn from '../assets/images/header/sidebarImg.svg';
import { FiSearch } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import User from '../assets/images/header/MichaelReeves.jpg';
import { useState } from 'react';
import Sidebar from './sidebar';


export default function HeaderGym(props) {
  const [sidebar, setSidebar] = useState(false);
  const togglesidebar = () => {
    setSidebar((prevState) => !prevState);
  }
  return (
    <>
    <header className="flex items-center p-5 w-full bg-light-blue h-[5rem]">
      <nav className="flex justify-between items-center w-full">
        {/* Left Side (Sidebar button and Page name) */}
        <div className="flex items-center space-x-4">
          <button onClick={togglesidebar}>
          <img src={SideBarBtn} alt="Sidebar" />
          </button>
          <h1 className="font-cambay mt-[0.5rem] font-bold text-lg">{props.pagename}</h1>
        </div>

        {/* Right Side (Search Bar, Notifications, and User Profile) */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="flex items-center max-w-[9rem] p-1 border rounded-full bg-white">
            <FiSearch className="text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="ml-1 font-cambay mt-[0.5rem] outline-none w-full"
            />
          </div>
          <MdNotificationsNone className="text-3xl" />
            <img
              src={User}
              alt="User Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-black"
              />
        </div>
      </nav>
      {sidebar && <Sidebar />}
    </header>
      <section>
      </section>
    
  </>
  );
}
