/** @format */
import { GETRecipes, GETRecipe } from "api";
import { Recipe } from "models";
import { useQuery } from "react-query";

export function useGETRecipies(onSuccess?: (e: any) => void) {
  return useQuery<Recipe[]>("recipies", GETRecipes, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 2000,
  });
}

export function useGETRecipe(id: string) {
  return useQuery<Recipe>([id, "recipe"], async () => GETRecipe(id), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 2000,
  });
}
