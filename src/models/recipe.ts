/** @format */

export type Macros = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type Recipe = {
  id: string;
  name: string;
  summary: string;
  rating: 1 | 2 | 3 | 4 | 5;
  imgSrc: string;
  macros: Macros;
  tags: string[];
  difficulty: "Beginner" | "Intermediate" | "Expert";
  timeToCookMinutes: number;
  ingredients: Ingredient[];
  instructions: Instruction[];
};

export type Ingredient = {
  id: number;
  item: string;
  quantity: string;
};

export type Instruction = {
  id: number;
  stepNumber: number;
  description: string;
};
