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
import { getUserRecipe } from '@/app/api/spoonacular/route';

export default function RecipePage({ params }: { params: { id: number } }){
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        async function getRecipeInfo(){
          const recipe = await getUserRecipe(params.id);
          console.log(recipe)
          setRecipe(recipe[0].metadata);
        }

        getRecipeInfo()
    }, [])


    const IMAGE_BASE_URL = 'https://img.spoonacular.com/ingredients_100x100/';

    const RECIPE_IMAGE_BASE_URL = 'https://img.spoonacular.com/recipes/';

    if(recipe)
    return(
        <div className='flex h-full overflow-hidden'>
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
                    <div className="p-12" dangerouslySetInnerHTML={{__html: recipe.summary}}></div>
                </div>
                <div className='p-12'>
                    <h2 className='text-xl'><b>Ingredients</b></h2>
                    <div className='grid grid-cols-3 p-12'>
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
            </div>
        </div>
    );
}
