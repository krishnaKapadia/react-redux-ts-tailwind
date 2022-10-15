/** @format */

import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const PageTitle: FunctionComponent = ({ children, back }: any) => {
  if (back) {
    return (
      <div className="flex items-center mb-4">
        <Link to={back}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer "
            fill="none"
            viewBox="0 0 24 24"
            stroke="#34495e"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>

        <h1 className="ml-4 text-2xl font-semibold text-gray-700">
          {children}
        </h1>
      </div>
    );
  }

  return (
    <h1 className="text-2xl font-semibold text-gray-700 mb-4">{children}</h1>
  );
};
