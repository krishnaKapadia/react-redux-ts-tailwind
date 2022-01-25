/** @format */
import React, { FunctionComponent } from "react";

import { Card } from "../card";

type Props = {};

const Assets = [
  {
    name: "",
    cost: "",
    ownedUnits: "",
    changeValue: "",
    changePercentage: "",
  },
  {
    name: "",
    cost: "",
    ownedUnits: "",
    changeValue: "",
    changePercentage: "",
  },
  {
    name: "",
    cost: "",
    ownedUnits: "",
    changeValue: "",
    changePercentage: "",
  },
  {
    name: "",
    cost: "",
    ownedUnits: "",
    changeValue: "",
    changePercentage: "",
  },
  {
    name: "",
    cost: "",
    ownedUnits: "",
    changeValue: "",
    changePercentage: "",
  },
  {
    name: "",
    cost: "",
    ownedUnits: "",
    changeValue: "",
    changePercentage: "",
  },
  {
    name: "",
    cost: "",
    ownedUnits: "",
    changeValue: "",
    changePercentage: "",
  },
];

export const AssetSlider: FunctionComponent<Props> = () => {
  return (
    <section className="my-8">
      <div className="flex justify-between items-center mb-4">
        <p className="font-bold text-lg">Cryptocurrency</p>
      </div>

      <div className="slider flex flex-row">
        {Assets.map((a) => (
          <Card {...a} />
        ))}
      </div>
    </section>
  );
};
