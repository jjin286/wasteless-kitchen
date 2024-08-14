'use client';

import Nav from "../../components/Nav";
import Image from "next/image";
import { Heart, HandPlatter, AlarmClock, CookingPot, CirclePlus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { addRecipe, searchRecipe } from "@/app/api/spoonacular/route";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/app/components/SearchBar";
import PaginationSection from "@/app/components/PaginationSection";
import RecipeCard from "@/app/components/RecipeCard";

export default function AddRecipes(){
    let [recipes, setRecipes] = useState([]);
    let [page, setPage] = useState(0);
    const searchParams = useSearchParams();
  console.log("RECIPES", recipes)
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

    async function handlePagination(page: number){
      setPage(page);
    }

    useEffect(() => {
      if(searchParams.get('query')){
        handleSearch();
      }
    }, [])

    

    return(
        <div>
            <Nav />
            <div className="pt-24">
              <SearchBar handleSearch={handleSearch}/>

              <div className="flex w-4/5 mx-auto h-screen flex-wrap mb-24">
                {recipes.length > 0 ?  
                  <>
                    {recipes.map((recipe) => {
                        return(
                          <RecipeCard recipe={recipe} handleAdd={null}/>
                        )
                    })}
                    <div className="w-full">
                      <PaginationSection page={page} totalResults={recipes.totalResults} handlePagination={handlePagination}/>
                    </div>
                  </>
                : null
                }
              </div>

d            </div>
        </div>
    );
}