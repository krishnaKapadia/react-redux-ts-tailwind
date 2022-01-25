/** @format */
import React, { FunctionComponent } from "react";

import ada from "../../assets/crypto-icons/color/btc.svg";

type Props = {
  name: string;
  cost: string;
  ownedUnits: string;
  changeValue: string;
  changePercentage: string;
};

export const Card: FunctionComponent<Props> = () => {
  return (
    <div className="card bg-green-50 rounded-lg">
      <div className="flex flex-col p-4 justify-between items-center h-full">
        <img className="mt-4" src={ada} alt={ada} width={86} height={86} />
        <div className="flex flex-col items-center">
          <p className="text-lg">Bitcoin</p>
          <p className={`text-3xl font-semibold`}>$48,400</p>
        </div>

        <div className="flex justify-between w-full">
          <div className="flex flex-col items-center">
            <p className="text-xs">Owned</p>
            <p className="text-xs font-semibold">2.4</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-xs">Change ($)</p>
            <p className="text-xs font-semibold">$2,321</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-xs">Change (%)</p>
            <p className="text-xs font-semibold">32%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
