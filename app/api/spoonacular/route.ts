const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.spoonacular.com";

export default async function searchIngredients(search:string){
  const response = await fetch(
    `${BASE_URL}/food/ingredients/search?${API_KEY}&query=${search}`
    );

}