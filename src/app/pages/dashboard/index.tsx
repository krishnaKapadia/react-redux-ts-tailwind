/** @format */

import React, { FunctionComponent } from "react";

import { PageTitle } from "../../components";
import { AssetSlider } from "../../components/assetSlider";
import { useGetAccounts } from "../../queries";

const Dashboard: FunctionComponent = () => {
  const { data: accounts = [] } = useGetAccounts();

  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      <p className="font-small text-gray-400">Welcome back!</p>

      <div className="container">
        <AssetSlider />
      </div>
    </>
  );
};

export default Dashboard;
