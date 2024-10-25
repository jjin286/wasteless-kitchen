'use client';

import React from 'react'
import Nav from '@/app/components/Nav';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalorieChart } from '@/app/components/CalorieChart';
import NutritionTable from '@/app/components/NutritionTable'
import BreakdownTable from '@/app/components/BreakdownTable';
import { Card } from '@/components/ui/card';
import { getPriceBreakdown, getUserRecipe, getSimilar } from '@/app/api/spoonacular/route';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function RecipePage({ params }: { params: { id: number } }){
    const [recipe, setRecipe] = useState();
    const [priceBreakdown, setPriceBreakdown] = useState();
    const [similarRecipe, setSimilarRecipe] = useState();
    let similarCards;

    useEffect(() => {
        async function getRecipeInfo(){
          const recipe = await getUserRecipe(params.id);
          console.log("Recipe", recipe)
          setRecipe(recipe[0].metadata);
        }

        getRecipeInfo()
    }, [])

    function selectColor() {
      const hue = Math.floor(Math.random() * 100) * 137.508;
      return `hsl(${hue},50%,75%)`;
    }

    const IMAGE_BASE_URL = 'https://img.spoonacular.com/ingredients_100x100/';


    const RECIPE_IMAGE_BASE_URL = 'https://img.spoonacular.com/recipes/';

    if(recipe)
    return(
        <div className='flex h-full overflow-hidden'>
            <Nav />
            <div className='pt-24 w-3/5 bg-green-300 mx-auto '>
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
                    <p>Servings: <Input type="text" className="px-3" value={recipe.servings}/> </p>
                    <p>Ready in: <Input type="text" className="px-3" value={recipe.servings}/> {recipe.readyInMinutes} minutes</p>
                    <p>Price per serving: $ <Input type="text" className="px-3" value={recipe.pricePerServing / 100}/> </p>
                    <p>Created by: <Input type="text" className="px-3" value={recipe.sourceName}/></p>
                    <p className='col-span-2 w-full'>Source: <Input className="w-full" type="text" className="px-3" value={recipe.sourceUrl}/></p>
                </div>
                <div className='p-12'>
                    <h2 className='text-xl'><b>Summary</b></h2>
                    <Textarea name="summary" id="summary" className='w-full h-fit' value={recipe.summary}/>
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
                                    <p className='mx-auto'><Input value={ingredient.name}></Input></p>
                                    <p className='flex mx-auto'><Input value={ingredient.amount}></Input> <Input value={ingredient.unit}></Input></p>
                                </div>)
                        }) : null}
                    </div>
                </div>
                <div className='p-12'>
                    <h2 className='text-xl'><b>Instructions</b></h2>
                    <ol className='list-decimal p-12'>
                      {recipe.instructions.split(".").map((step:string) => {
                        return <li className='flex m-1'><Input value={step}></Input> <Button>Delete step</Button></li>
                      })}
                    </ol>
                    <Button>Add step</Button>
                </div>
                <div>
                    <Button>Save</Button>
                    <Button>Discard</Button>
                </div>
            </div>
        </div>
    );
}
