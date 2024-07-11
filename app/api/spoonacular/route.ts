import { createClient } from "@/utils/supabase/client";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.spoonacular.com";
const RESULT_COUNT = 12;
const SORT_DIRECTION = 'desc'

const supabase = createClient();


export async function searchIngredients(props : {term ?: string | null, sort ?: string | null, offset ?: number}){
  const {term, sort, offset} = props;
  console.log("API key", API_KEY) //**********CONSOLE LOG************/
  let query = `${BASE_URL}/food/ingredients/search?apiKey=${API_KEY}&number=${RESULT_COUNT}&sortDirection=${SORT_DIRECTION}`;

    console.log(query) //**********CONSOLE LOG************/
  if(term) query = query + `&query=${term}`;
  if(sort && sort !== "(empty)") query = query + `&sort=${sort}`;
  if(offset) query = query + `&offset=${offset}`;

  const response = await fetch(query);

  if(!response.ok){
    console.log(response) //**********CONSOLE LOG************/
    throw new Error('Failed to fetch data')
  }

  const data = await response.json();
  console.log(data); //**********CONSOLE LOG************/
  return data.results;
}

export async function getUser(){
  const { data: { user } } = await supabase.auth.getUser();
  console.log(user) //**********CONSOLE LOG************/
  return user;
}

export async function getUserIngredients(){
  const user = await getUser();

  const { data, error } = await supabase
    .from('ingredients')
    .select()
    .eq('user_id', user!.id);

    console.log("Get ingredient data", data, user!.id, error)
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

  console.log("Values", values)
  // console.log()
  // console.log()
  // console.log()
  const { error } = await supabase
  .from('ingredients')
    .update(values)
    .eq('user_id', user!.id)
    .eq('id', values.id)

    console.log("Triggered inside updateIngredient in route", error)
}