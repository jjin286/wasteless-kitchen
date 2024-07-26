'use client';

import Nav from '@/app/components/Nav';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalorieChart } from '@/app/components/CalorieChart';
import NutritionTable from '@/app/components/NutritionTable'
import BreakdownTable from '@/app/components/BreakdownTable';
import { Card } from '@/components/ui/card';
import { getPriceBreakdown, getRecipe, getSimilar } from '@/app/api/spoonacular/route';

const SAMPLE_SIMILAR = [
  {
      "id": 209128,
      "title": "Dinner Tonight: Grilled Romesco-Style Pork",
      "imageType": "jpg",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "http://www.seriouseats.com/recipes/2008/07/grilled-romesco-style-pork-salad-recipe.html"
  },
  {
      "id": 31868,
      "title": "Dinner Tonight: Chickpea Bruschetta",
      "imageType": "jpg",
      "readyInMinutes": 45,
      "servings": 2,
      "sourceUrl": "http://www.seriouseats.com/recipes/2009/06/dinner-tonight-chickpea-bruschetta-babbo-nyc-recipe.html"
  }
]

export default function RecipePage({ params }: { params: { id: number } }){
    const [recipe, setRecipe] = useState();
    const [priceBreakdown, setPriceBreakdown] = useState();
    const [similarRecipe, setSimilarRecipe] = useState();

    useEffect(() => {
        async function getRecipeInfo(){
          const recipe = await getRecipe(params.id);
          setRecipe(recipe);

          const priceBreakdown = await getPriceBreakdown(params.id);
          setPriceBreakdown(priceBreakdown);

          const similar = await getSimilar(params.id);
          setSimilarRecipe(similar);
          console.log("Run recipe info")
        }
        getRecipeInfo()
    }, [])

    function selectColor() {
      const hue = Math.floor(Math.random() * 100) * 137.508;
      return `hsl(${hue},50%,75%)`;
    }

    //Extended ingredients at not loadin before, maybe if statement till data arriv
    const IMAGE_BASE_URL = 'https://img.spoonacular.com/ingredients_100x100/';
    // const cards = recipe.extendedIngredients.map((ingredient) => {
    //     return (
    //         <div className='flex flex-col relative justify-center'>
    //             <Image
    //                 loader={() => IMAGE_BASE_URL + ingredient.image}
    //                 unoptimized={true}
    //                 src={IMAGE_BASE_URL + ingredient.image}
    //                 width={150}
    //                 height={150}
    //                 alt={recipe.id.toString()}
    //                 className="p-12 "
    //             />
    //             <p>{ingredient.name}</p>
    //             <p>{ingredient.amount} {ingredient.unit}</p>
    //         </div>)


    // })

    const RECIPE_IMAGE_BASE_URL = 'https://img.spoonacular.com/recipes/';
    const other = SAMPLE_SIMILAR.map((recipe) => {
      return (
        <Link href={`/recipes/${recipe.id}`}>
          <Card className='relative rounded w-[312px] h-[312px] m-5'>
            <Image
                loader={() => RECIPE_IMAGE_BASE_URL + recipe.id + "-312x231.jpg"}
                unoptimized={true}
                src={RECIPE_IMAGE_BASE_URL + recipe.id + "-312x231.jpg"}
                width={312}
                height={231}
                // fill={true}
                // objectFit=''
                alt={recipe.title}
                className=""
            />
            <p>{recipe.title}</p>
          </Card>
        </Link>

      )
    })

    if(recipe && priceBreakdown)
    return(
        <div>
            <Nav />
            <div className='pt-24 w-3/5 bg-green-300 h-screen mx-auto'>
                <p>Post: {params.id}</p>
                <div className='relative h-full'>
                    <h1>{recipe.title}</h1>
                    <Image
                      loader={() => recipe.image}
                      unoptimized={true}
                      src={recipe.image}
                      fill={true}
                      objectFit="contain"
                      alt={recipe.id.toString()}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg"
                      className="p-12 "
                  />
                </div>
                <div className='bg-green-100'>
                    <p>Servings: {recipe.servings}</p>
                    <p>Ready in: {recipe.readyInMinutes} minutes</p>
                    <p>Price per serving: ${recipe.pricePerServing / 100}</p>
                    <Link href={recipe.sourceUrl}>Created by: {recipe.sourceName}</Link>
                </div>
                <div className=''>
                    <h2><b>Summary</b></h2>
                    <div dangerouslySetInnerHTML={{__html: recipe.summary}}></div>
                </div>
                <div>
                    <h2><b>Ingredients</b></h2>
                    <div className='flex flex-wrap'>
                        {/* {cards} */}
                        {recipe ?
                          recipe.extendedIngredients.map((ingredient) => {
                            return (
                                <div className='flex flex-col relative justify-center'>
                                    <Image
                                        loader={() => IMAGE_BASE_URL + ingredient.image}
                                        unoptimized={true}
                                        src={IMAGE_BASE_URL + ingredient.image}
                                        width={150}
                                        height={150}
                                        alt={recipe.id.toString()}
                                        className="p-12 "
                                    />
                                    <p>{ingredient.name}</p>
                                    <p>{ingredient.amount} {ingredient.unit}</p>
                                </div>)


                        }) : null}
                    </div>
                </div>
                <div>
                    <h2><b>Instructions</b></h2>
                    <div dangerouslySetInnerHTML={{__html: recipe.instructions}}></div>

                </div>
                <div>
                    <h2><b>Cost breakdown</b></h2>
                    <div className='flex w-screen items-center'>
                      <CalorieChart  data={priceBreakdown.ingredients.map((ingredient) => {
                        return {type: ingredient.name, value:ingredient.price, fill:selectColor()}
                      })}/>
                      <BreakdownTable ingredients={priceBreakdown.ingredients} totalCost={priceBreakdown.totalCost} totalCostPerServing={priceBreakdown.totalCostPerServing}/>
                    </div>

                </div>
                <div>
                    <h2><b>Nutrional information</b></h2>
                    <CalorieChart data={
                      [
                        {type: 'protein', value: recipe.nutrition.caloricBreakdown.percentProtein, fill:selectColor()},
                        {type: 'fat', value: recipe.nutrition.caloricBreakdown.percentFat, fill:selectColor()},
                        {type: 'carbohydrate', value: recipe.nutrition.caloricBreakdown.percentCarbs, fill:selectColor()}
                      ]
                    }/>
                </div>
                <div className='w-full h-auto'>
                    <h2><b>Similar Recipes</b></h2>
                    <NutritionTable/>
                </div>
                <div className='flex flex-wrap justify-center'>
                    {other}
                    {other}
                    {other}
                </div>
            </div>
        </div>
    );
}
