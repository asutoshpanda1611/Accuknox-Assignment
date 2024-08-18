import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdNotificationsActive } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ data = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const navigate = useNavigate();

  function Clickhandler() {
    navigate('/');
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <button onClick={Clickhandler} className='text-gray-400'>Home &nbsp;</button>
          <br />
          <a className=""> {">"}&nbsp;</a>
          <a className="text-sky-700">Dashboard</a>
        </div>
        <div className="flex-none gap-6 mr-10 flex items-center">

          <div className="form-control relative">
            <FaSearch className="absolute top-3 left-2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="border-2 pl-8 pr-4 py-2 w-72 h-10 rounded-none" 
            />
            <ul>
              {filteredData.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>

          <MdNotificationsActive size={29} className="text-black " />
          
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src="https://avatar.iran.liara.run/public" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
