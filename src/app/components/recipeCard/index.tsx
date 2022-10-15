import React, { FunctionComponent } from "react";
import { Recipe } from "models";
import { Rating, Tag } from "app/components";
import { map } from "lodash";
import { Link } from "react-router-dom";

export * from "./skeleton";

type Props = {
  recipe: Recipe;
};

export const RecipeCard: FunctionComponent<Props> = ({ recipe }) => {
  const { id, imgSrc, name, rating, macros, tags } = recipe;
  return (
    <Link to={`/app/recipe/${id}`} className="m-2">
      <img src={imgSrc} className="h-48 w-full bg-slate-50 rounded-2xl" />
      {/* <div className="h-48 bg-slate-50 rounded-2xl"></div> */}
      <div className="container p-4 space-y-2">
        <div className="flex justify-between space-x-1">
          <h3 className="font-bold">{name}</h3>
          <Rating rating={rating} />
        </div>
        <div className="description">
          {/* <p className="text-sm text-gray-600">{summary}</p> */}
        </div>
        <div className="py-2 flex justify-between">
          <p className="text-xs">
            Calories <b className="">{macros.calories}</b>
          </p>
          <p className="text-xs">
            Protein <b className="">{macros.protein}g</b>
          </p>
          <p className="text-xs">
            Carb <b className="">{macros.carbs}g</b>
          </p>
          <p className="text-xs">
            Fat <b className="">{macros.fat}g</b>
          </p>
        </div>
        <div className="flex space-x-3">
          {map(tags, (t) => (
            <Tag readonly size="small">
              {t}
            </Tag>
          ))}
        </div>
      </div>
    </Link>
  );
};
