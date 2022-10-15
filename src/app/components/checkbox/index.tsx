import React, { FunctionComponent, useState } from "react";

type Props = {};

export const Checkbox: FunctionComponent<Props> = ({ children }) => {
  const [selected, setSelected] = useState(false);

  const onClick = () => {
    setSelected(!selected);
  };

  return (
    <div className="flex items-center cursor-pointer w-full" onClick={onClick}>
      <div className="mr-4">
        {!selected && (
          <div className="transition-all rounded-full w-6 h-6 border-2 hover:border-yellow-500"></div>
        )}
        {selected && (
          <div className="flex items-center justify-center cursor-pointer rounded-full bg-yellow-500 text-white w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>

      <p className="select-none w-full flex items-center">{children}</p>
    </div>
  );
};
