import React, { FunctionComponent } from "react";

type Props = {};

export const RecipeCardSkeleton: FunctionComponent<Props> = () => {
  return (
    <div className="m-2 cursor-pointer">
      <div className="h-48 w-full bg-slate-100 rounded-2xl animate-pulse" />
      <div className="container p-4 space-y-2">
        <div className="flex justify-between space-x-1 bg-slate-200 w-full"></div>
        <div className="py-2 flex justify-between">
          <p className="text-xs bg-slate-100 w-16 h-8 animate-pulse"></p>
          <p className="text-xs bg-slate-100 w-16 h-8 animate-pulse"></p>
          <p className="text-xs bg-slate-100 w-16 h-8animate-pulse"></p>
        </div>
        <div className="flex space-x-3">
          {/* <Tag  size="small">
            Breakfast
          </Tag>
          <Tag readonly size="small">
            Lunch
          </Tag>
          <Tag readonly size="small">
            Dinner
          </Tag>
          <Tag readonly size="small">
            Snack
          </Tag> */}
        </div>
      </div>
    </div>
  );
};
