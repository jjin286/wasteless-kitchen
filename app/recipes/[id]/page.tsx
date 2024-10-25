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

export default function RecipePage({ params }: { params: { id: number } }){
    const [recipe, setRecipe] = useState();
    const [priceBreakdown, setPriceBreakdown] = useState();
    const [similarRecipe, setSimilarRecipe] = useState();
    let similarCards;
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
    if(similarRecipe){
      similarCards = similarRecipe.map((recipe) => {
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
    }
    // console.log("Recipe instructions", recipe.instructions)

    if(recipe && priceBreakdown)
    return(
        <div className='flex h-full'>
            <Nav />
            <div className='pt-24 w-3/5 bg-green-300 mx-auto '>
                {/* <p>Post: {params.id}</p> */}
                <div className='relative h-[50vh]'>
                    <h1 className='text-3xl'>{recipe.title}</h1>
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
                <div className='grid bg-green-100 grid-cols-2 grid-rows-2 gap-2 p-5'>
                    <p>Servings: {recipe.servings}</p>
                    <p>Ready in: {recipe.readyInMinutes} minutes</p>
                    <p>Price per serving: ${recipe.pricePerServing / 100}</p>
                    <Link href={recipe.sourceUrl}>Created by: {recipe.sourceName}</Link>
                </div>
                <div className='p-12'>
                    <h2 className='text-xl'><b>Summary</b></h2>
                    <div dangerouslySetInnerHTML={{__html: recipe.summary}}></div>
                </div>
                <div className='p-12'>
                    <h2 className='text-xl'><b>Ingredients</b></h2>
                    <div className='flex flex-wrap'>
                        {/* {cards} */}
                        {recipe ?
                          recipe.extendedIngredients.map((ingredient) => {
                            return (
                                <div className='flex flex-col relative justify-center bg-gray-100 m-2 rounded p-2'>
                                    <Image
                                        loader={() => IMAGE_BASE_URL + ingredient.image}
                                        unoptimized={true}
                                        src={IMAGE_BASE_URL + ingredient.image}
                                        width={150}
                                        height={150}
                                        alt={recipe.id.toString()}
                                        className="p-12 mx-auto"
                                    />
                                    <p className='mx-auto'>{ingredient.name}</p>
                                    <p className='mx-auto'>{ingredient.amount} {ingredient.unit}</p>
                                </div>)


                        }) : null}
                    </div>
                </div>
                <div className='p-12'>
                    <h2 className='text-xl'><b>Instructions</b></h2>
                    {/* <div className="" dangerouslySetInnerHTML={{__html: recipe.instructions}}></div> */}
                    {/* <div className="">{recipe.instructions}</div> */}
                    <ol className='list-decimal p-12'>
                      {recipe.instructions.split(".").map((step:string) => {
                        return <li>{step}</li>
                      })}
                    </ol>

                </div>
                <div className='p-12'>
                    <h2 className='text-xl'><b>Cost breakdown</b></h2>
                    <div className='flex w-screen p-12'>
                      {/* <CalorieChart  data={priceBreakdown.ingredients.map((ingredient) => {
                        return {type: ingredient.name, value:ingredient.price, fill:selectColor()}
                      })}/> */}
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
                    {similarCards}
                </div>
            </div>
        </div>
    );
}
