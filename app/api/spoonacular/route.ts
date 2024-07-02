const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.spoonacular.com";
const RESULT_COUNT = 10;
const SORT_DIRECTION = 'desc'

export default async function searchIngredients(props : {term ?: string | null, sort ?: string | null, offset ?: number}){
  const {term, sort, offset} = props;
  console.log("API key", API_KEY)
  let query = `${BASE_URL}/food/ingredients/search?apiKey=${API_KEY}&number=${RESULT_COUNT}&sortDirection=${SORT_DIRECTION}`;

    console.log(query)
  if(term) query = query + `&query=${term}`;
  if(sort && sort !== "(empty)") query = query + `&sort=${sort}`;
  if(offset) query = query + `&offset=${offset}`;

  const response = await fetch(query);

  if(!response.ok){
    console.log(response)
    throw new Error('Failed to fetch data')
  }

  const data = await response.json();
  console.log(data);
  return data.results;
}