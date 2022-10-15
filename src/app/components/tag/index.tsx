import React, { FunctionComponent, useState } from "react";

type Props = {
  readonly?: boolean;
  size?: "small" | "medium";
  onClick?: () => void;
};

export const Tag: FunctionComponent<Props> = ({
  children,
  readonly,
  size,
  onClick: externalOnClick,
}) => {
  const [selected, setSelected] = useState(false);

  const onClick = () => {
    setSelected(!selected);
  };

  return (
    <button
      onClick={!readonly ? onClick : undefined}
      className={`
      border-2 py-1 rounded-xl capitalize
      ${
        selected
          ? "bg-green-100 text-green-400 border-green-300"
          : "bg-slate-100 border-transparent"
      } 
      ${readonly ? "cursor-default" : ""}
      ${size === "small" ? "text-xs px-2" : "text-sm px-3"}
      `}
    >
      {children}
    </button>
  );
};
