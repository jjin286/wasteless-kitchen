import { createClient } from "@/utils/supabase/client";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.spoonacular.com";
const RESULT_COUNT = 12;
const SORT_DIRECTION = 'desc'

const supabase = createClient();


export async function searchIngredients(props : {term ?: string | null, sort ?: string | null, offset ?: number}){
  const {term, sort, offset} = props;
  let query = `${BASE_URL}/food/ingredients/search?apiKey=${API_KEY}&number=${RESULT_COUNT}&sortDirection=${SORT_DIRECTION}`;

  if(term) query = query + `&query=${term}`;
  if(sort && sort !== "(empty)") query = query + `&sort=${sort}`;
  if(offset) query = query + `&offset=${offset}`;

  const response = await fetch(query);

  if(!response.ok){
    throw new Error('Failed to fetch data')
  }

  const data = await response.json();
  return data.results;
}

export async function searchRecipe(props: {term ?: string | null, sort ?: string | null, offset ?: number}){
  const {term, sort, offset} = props;
  let query = `${BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=${RESULT_COUNT}&sortDirection=${SORT_DIRECTION}&addRecipeInformation=true`;

  if(term) query = query + `&query=${term}`;
  if(sort && sort !== "(empty)") query = query + `&sort=${sort}`;
  if(offset) query = query + `&offset=${offset}`;

  const response = await fetch(query);

  if(!response.ok){
    throw new Error('Failed to fetch data')
  }

  const data = await response.json();
  console.log("Console", data)
  return data.results;
}

export async function getUser(){
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function getUserIngredients(){
  const user = await getUser();

  const { data, error } = await supabase
    .from('ingredients')
    .select()
    .eq('user_id', user!.id);

  return data;
}

export async function addIngredient(values: {} ){
  const user = await getUser();
  values = {...values, user_id: user!.id};

  const { error } = await supabase
    .from('ingredients')
    .insert(values);

  if(error) console.log("Adding error: ", error)
}

export async function addRecipe(id: number){
  const user = await getUser();
  const recipe = await getRecipe(id);

  const values = {id: id, metadata: recipe, user_id: user!.id};

  const { error } = await supabase
    .from('recipes')
    .insert(values);

  if(error) console.log("Adding error: ", error)
}

export async function getUserRecipe(id?: number){
  const user = await getUser();

  console.log(id)
  if(id){
    const { data, error } = await supabase
    .from('recipes')
    .select()
    .eq('user_id', user!.id)
    .eq('id', id);

    return data;
  } else {
    const { data, error } = await supabase
    .from('recipes')
    .select()
    .eq('user_id', user!.id);

    return data;
  }
}

export async function updateIngredient(values: {
  id: number,
  name: string,
  image: string,
  created_at: Date | null,
  exp_date: Date | null,
  unit: string | null,
  amount: number | null
}){
  const user = await getUser();

  const { error } = await supabase
  .from('ingredients')
    .update(values)
    .eq('user_id', user!.id)
    .eq('id', values.id)
}

export async function getRecipe(id:number){
  let query = `${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=true`;

  const response = await fetch(query);

  if(!response.ok){
    throw new Error('Failed to fetch data')
  }

  const data = await response.json();
  return data;
}

export async function getSimilar(id:number){
  let query = `${BASE_URL}/recipes/${id}/similar?apiKey=${API_KEY}&number=6`;

  const response = await fetch(query);

  if(!response.ok){
    throw new Error('Failed to fetch data')
  }

  const data = await response.json();
  return data;
}

export async function getPriceBreakdown(id:number){
  let query = `${BASE_URL}/recipes/${id}/priceBreakdownWidget.json?apiKey=${API_KEY}`;

  const response = await fetch(query);

  if(!response.ok){
    throw new Error('Failed to fetch data')
  }

  const data = await response.json();
  return data;
}