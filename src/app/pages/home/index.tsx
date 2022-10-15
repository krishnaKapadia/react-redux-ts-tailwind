import React, { FunctionComponent, useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { filter, includes, intersection, map } from "lodash";
import {
  PageTitle,
  Rating,
  Tag,
  RecipeCard,
  RecipeCardSkeleton,
} from "app/components";
import { useGETRecipies } from "app/queries";
import { Recipe } from "../../../models/recipe";

type Props = {};

const GoalTags = ["bulk", "weight loss"];
const ProteinTags = ["fish", "chicken", "pork", "beef"];
const MealTags = ["breakfast", "lunch", "dinner", "snack"];

const Home: FunctionComponent<Props> = () => {
  const { data, isLoading } = useGETRecipies();
  console.log(data);

  return (
    <div className="container">
      <Helmet>
        <title>Home</title>
      </Helmet>

      <PageTitle>Recipes</PageTitle>

      <div className="flex flex-wrap">
        <div className="flex flex-col space-y-2 mt-4 mr-8">
          <p className="text-sm font-semibold text-gray-600">By goal</p>
          <div className="flex space-x-3 px-2">
            {map(GoalTags, (t) => (
              <Tag>{t}</Tag>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-2 mt-4 mr-8">
          <p className="text-sm font-semibold text-gray-600">By protein</p>
          <div className="flex space-x-3 px-2">
            {map(ProteinTags, (t) => (
              <Tag>{t}</Tag>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <p className="text-sm font-semibold text-gray-600">By meal</p>
          <div className="flex space-x-3 px-2">
            {map(MealTags, (t) => (
              <Tag>{t}</Tag>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex">
          <p className="text-sm font-semibold text-gray-600 mr-1">Results:</p>
          <p className="text-sm">{data?.length}</p>
        </div>
      </div>
      <div className="mt-8 flex flex-col flex-wrap md:flex-row justify-between">
        {map<Recipe>(data, (recipe) => (
          <div className="w-full md:w-1/2 lg:w-1/3  p-2">
            {isLoading ? (
              <RecipeCardSkeleton />
            ) : (
              <RecipeCard recipe={recipe} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

{
  /* <div className="pt-2 flex items-center justify-between">
                  <div className="bg-slate-100 p-4 rounded-2xl text-center">
                    <p className="text-xs text-cool-gray-400">Protein</p>
                    <p className="text-xs font-bold text-gray-800">32g</p>
                  </div>
                  <div className="bg-slate-100 p-4 rounded-2xl text-center">
                    <p className="text-xs text-cool-gray-400">Protein</p>
                    <p className="text-xs font-bold text-gray-800">32g</p>
                  </div>
                  <div className="bg-slate-100 p-4 rounded-2xl text-center">
                    <p className="text-xs text-cool-gray-400">Protein</p>
                    <p className="text-xs font-bold text-gray-800">32g</p>
                  </div>
                </div> */
}

{
  /* <div className="pt-2 flex justify-between">
                  <p className="text-xs">
                    Protein <b className="bg-pink-300 rounded p-1">32g</b>
                  </p>
                  <p className="text-xs">
                    Carb <b className="bg-blue-300 rounded p-1">32g</b>
                  </p>
                  <p className="text-xs">
                    Fat <b className="bg-green-300 rounded p-1">32g</b>
                  </p>
                </div> */
}
