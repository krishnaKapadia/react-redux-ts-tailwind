/** @format */
import React, { FunctionComponent } from "react";

export const DateRangeSelector: FunctionComponent = () => {
  return (
    <div className="flex flex-row">
      <button className="p-2 w-8 bg-gray-100 rounded-lg mr-4 font-semibold text-gray-400">
        D
      </button>
      <button className="p-2 w-8 bg-gray-100 rounded-lg mr-4 font-semibold text-gray-400">
        W
      </button>
      <button className="p-2 w-10 bg-gray-100 rounded-lg font-semibold">
        All
      </button>
    </div>
  );
};
