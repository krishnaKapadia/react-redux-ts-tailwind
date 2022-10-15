/** @format */

import React, { FunctionComponent, useState } from "react";
import { MenuIcon } from "../../assets/icons";

export const Header: FunctionComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="z-40 py-4 bg-white">
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        <button
          className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>

        {isMobileMenuOpen && (
          <div className="mob-nav flex flex-col md:hidden absolute">
            <a className="link relative">Dashboard</a>
            <a className="link relative">Add Asset</a>
            <a className="link relative">Log out</a>
          </div>
        )}

        <div className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>

        <div className="flex-row justify-between items-center flex-shrink-0 space-x-6 w-full hidden md:flex">
          <div className="flex items-center space-x-2">
            <img
              width="32"
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/htc/37/flexed-biceps_1f4aa.png"
              alt=""
            />
            <p className="font-semibold">Gym meals</p>
          </div>
          <ul className="flex flex-row justify-items-center">
            {/* <a className="relative mr-8">Dashboard</a>
            <a className="relative">Add Asset</a> */}
          </ul>

          <a className="relative">Log out</a>
        </div>
      </div>
    </header>
  );
};
