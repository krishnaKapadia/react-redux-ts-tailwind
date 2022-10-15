import { map } from "lodash";
import { Recipe } from "models";

const baseUrl: string = "http://localhost:1337/api";

export async function GETRecipes(): Promise<Recipe[]> {
  const query = "populate=*";
  const res = await fetch(`${baseUrl}/recipes?${query}`);
  const json = await res.json();

  return map(json.data, (d) => transform(d));
}

export async function GETRecipe(id: string): Promise<Recipe> {
  const query = "populate=*";
  const res = await fetch(`${baseUrl}/recipes/${id}?${query}`);
  const json = await res.json();

  return transform(json.data);
}

function transform(data: any): Recipe {
  const { id, attributes } = data;

  return {
    ...attributes,
    id,
    tags: map(attributes.tags.data, (t) => t.attributes.name),
  };
}
