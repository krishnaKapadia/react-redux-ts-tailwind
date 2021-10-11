/** @format */

import React, { FunctionComponent } from "react";

import { PageTitle } from "../../components";
import { useGetAccounts } from "../../queries";

const Dashboard: FunctionComponent = () => {
  const { data: accounts = [] } = useGetAccounts();

  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      <p className="font-small text-gray-400">Welcome back!</p>

      <section className="my-8">
        <div className="flex justify-between items-center mb-4">
          <p className="font-bold text-lg">OVERVIEW</p>
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
        </div>

        <div className="flex sm:flex-row">
          <div className="h-32 w-full md:float-left p-4 mb-8 bg-gray-100 rounded-lg">
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-lg font-semibold">Accounts</p>
              <p className={`text-3xl font-semibold mb-4`}>
                {accounts.length}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
