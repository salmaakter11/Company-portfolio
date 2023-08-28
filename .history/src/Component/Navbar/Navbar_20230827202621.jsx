import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 nav z-40 shadow-sm shadow-yellow-800 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            {/* mobile device nav */}

            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl font-bold"
            >
              <li>
                <a href="#About">About Me </a>
              </li>
              <li>
                <a href="#Service">Service</a>
              </li>
              <li>
                <a href="#Experience">Experience</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
              <li>
                <a href="#Project">Project/Thisis</a>
              </li>
              <li>
                <a href="#Team">TeamMember</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>

          <a
            id=""
            href="/"
            className="btn btn-ghost normal-case text-xl font-bold text-xl front-bold"
          >
            {' '}
            SALMA
          </a>
        </div>

        {/* pc device nav */}
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-xl font-bold">
            <li>
              <a href="#About">About Me</a>
            </li>
            <li>
              <a href="#Service">Service</a>
            </li>
            <li>
              <a href="#Skill">Skill's</a>
            </li>
            <li>
              <a href="#Project">Project/Thisis</a>
            </li>
            <li>
              <a href="#Team">TeamMember</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end pr-10"></div>
      </div>
    </div>
  );
};

export default Navbar;
