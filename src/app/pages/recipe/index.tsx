import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";
import { Rating } from "app/components";
import { DetailBox } from "./detailBox";
import { Link, useParams } from "react-router-dom";
import { useGETRecipe } from "app/queries";
import { capitalize } from "lodash";

const Recipe: FunctionComponent = () => {
  const { id = "" } = useParams<any>();
  const { data, isLoading } = useGETRecipe(id);

  if (isLoading && !data) {
    return (
      <div className="container justify-between">
        <Helmet>
          <title>Home</title>
        </Helmet>

        <Link to="/app" className="flex items-center mb-2 py-2 pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-yellow-600 hover:text-yellow-700 transition-all"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <p className="uppercase text-yellow-600 text-sm tracking-widest hover:text-yellow-700  transition-all">
            Back
          </p>
        </Link>
      </div>
    );
  }

  return (
    <div className="container justify-between">
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Link to="/app" className="flex items-center mb-2 py-2 pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 text-yellow-600 hover:text-yellow-700 transition-all"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <p className="uppercase text-yellow-600 text-sm tracking-widest hover:text-yellow-700  transition-all">
          Back
        </p>
      </Link>

      <div className="flex flex-col md:flex-row">
        <div className="left">
          <img className="rounded-3xl mb-6" src={data.imgSrc} alt="" />
          <div className="space-y-4">
            <p className="uppercase text-yellow-600 text-sm tracking-widest">
              {data.tags.map((t) => capitalize(t)).join(", ")}
            </p>
            <h2 className="text-3xl font-semibold">{data.name}</h2>
            <Rating rating={data.rating} />
          </div>

          <div className="md:hidden pt-8 min-w-[320px]">
            <DetailBox recipe={data} />
          </div>

          <div className="content space-y-12 my-12">
            {/* <h2 className="text-2xl font-semibold pb-4">Method</h2> */}
            {data.instructions.map(({ stepNumber, description }) => (
              <div className="section">
                <div className="text-yellow-600 tracking-widest uppercase text-xs font-semibold mb-2">
                  Step {stepNumber}
                </div>
                <div className="">{description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block right md:px-4 min-w-[320px]">
          <DetailBox recipe={data} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
