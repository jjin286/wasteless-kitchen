'use client';

import Nav from "../../components/Nav";
import Image from "next/image";
import { Heart, HandPlatter, AlarmClock, CookingPot, CirclePlus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { addRecipe, searchRecipe } from "@/app/api/spoonacular/route";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/app/components/SearchBar";

export default function AddRecipes(){
    let [recipes, setRecipes] = useState([]);
    const searchParams = useSearchParams();

    async function handleSearch(){
      const search = {
          term: searchParams.get('query'),
          sort: searchParams.get('sort'),
          offset: 0
      }

      const data = await searchRecipe(search);
      setRecipes(data);
  }

    async function handleAdd(e: any){
      addRecipe(e.target.parentElement.id);
    }

    useEffect(() => {
      if(searchParams.get('query')){
        handleSearch();
      }
    }, [])

    let cards = recipes.map((recipe) => {
        return(
          <div className="recipe-card flex flex-col bg-green-300 m-4 sm:w-2/5 w-1/5 h-2/4 rounded overflow-hidden relative">

            <button id={recipe.id} className="absolute bottom-0 right-0 z-20 bg-green-300 rounded-full hover:text-white" onClick={handleAdd}>
              <CirclePlus size={48} />
            </button>

            <div className="relative h-1/2">
              <Link href={`/recipes/${recipe.id}`}>
                <Image
                      loader={() => recipe.image}
                      unoptimized={true}
                      src={recipe.image}
                      fill={true}
                      objectFit="cover"
                      alt={recipe.id.toString()}
                      className=""
                  />
              </Link>
            </div>
            <div className="flex flex-col p-5">
              <Link href={`/recipes/${recipe.id}`}>
                <p><b>{recipe.title}</b></p>
              </Link>
              <div className="h-1/4 absolute bottom-0">
                <p className="flex"><AlarmClock /> &nbsp; {recipe.readyInMinutes ? recipe.readyInMinutes + ' minutes' : 'N/A'} </p>
                <p className="flex"><HandPlatter /> &nbsp; {recipe.servings}</p>
                <p className="flex"><Heart /> &nbsp; {recipe.aggregateLikes}</p>
              </div>
            </div>
          </div>
        )
    })

    return(
        <div>
            <Nav />
            <div className="pt-24">
              <SearchBar handleSearch={handleSearch}/>

              <div className="flex w-4/5 mx-auto h-screen flex-wrap">
                {recipes.length === 0 ? null : cards}
              </div>
            </div>
        </div>
    );
}