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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function AddRecipes(){
    let [recipes, setRecipes] = useState<any>([]);
    let [activePage, setActivePage] = useState<number>(1);
    let [itemsPerPage, setItemsPerPage] = useState<number>(12);

    const searchParams = useSearchParams();

    async function handleSearch(){
      const search = {
          term: searchParams.get('query'),
          sort: searchParams.get('sort'),
          offset: (activePage - 1) * itemsPerPage
      }

      const data = await searchRecipe(search);
      setRecipes(data);
    }

    async function handleAdd(e: any){
      console.log(e.target.parentElement.id)
      addRecipe(e.target.parentElement.id);
      toast.success('Successfully added ' + e.target.parentElement.id, {
        position: "top-center"
      })
    }

    async function handlePagination(page: number){
      setActivePage(page);
    }

    useEffect(() => {
      if(searchParams.get('query')){
        handleSearch();
      }
    }, [activePage])


    return(
        <div>
            <Nav />
            <ToastContainer />
            <div className="p-24">
              <h1 className="mt-12 text-3xl">Add new recipes</h1>
              <SearchBar handleSearch={handleSearch}/>

              {/* <div className="flex mx-auto h-screen flex-wrap mb-24"> */}
              <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 xl:grid-cols-5">
                {recipes === undefined || recipes.length == 0
                ?
                <div className="flex mx-auto col-span-3 row-start-8">
                  <p>Search for some recipes to add to your recipe collection!</p>
                </div>
                : <>
                    {recipes.results.map((recipe : any) => {
                        return(
                          <RecipeCard recipe={recipe} handleAdd={handleAdd} ingredients={[]}/>
                        )
                    })}
                  </>
                }
              </div>
              <div className="w-full">
                {recipes === undefined || recipes.length == 0
                  ? null
                  : <PaginationSection itemsPerPage={itemsPerPage} totalResults={recipes.totalResults} setPage={handlePagination} activePage={activePage}/>
                }
              </div>
            </div>
        </div>
    );
}