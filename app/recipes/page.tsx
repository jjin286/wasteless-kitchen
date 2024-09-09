'use client';

import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { deleteUserRecipe, getUserRecipe } from "../api/spoonacular/route";
import RecipeCard from "../components/RecipeCard";
import Link from "next/link";

export default function Recipes(){
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function loadRecipes(){
            const userRecipes = await getUserRecipe();
            setRecipes(userRecipes);
            console.log("Recipes page user recipes", userRecipes)
        }
        loadRecipes();
    }, [])

    // let cards = recipes.map((recipe) => {
    //     return(
    //       <RecipeCard recipe={recipe} handleAdd={handleAdd}/>
    //     )
    // })

    function handleDelete(id: number){
        console.log("ID", id)
        deleteUserRecipe(id);
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
    }

    return(
        <div>
            <Nav />
            <div className="pt-24">
                Your Recipes
                <div className="flex justify-end">
                    <Link href={'/recipes/create'}>
                        <button className="mx-1 p-3 bg-green-300 rounded">Create new recipe</button>
                    </Link>
                    <Link href={'/recipes/add'}>
                        <button className="mx-1 p-3 bg-green-300 rounded">Add new recipe</button>
                    </Link>
                </div>
                <div className="flex w-4/5 mx-auto h-screen flex-wrap mb-24">
                    { recipes.length > 0
                    ?
                         recipes.map((recipe) => {
                            return <RecipeCard recipe={recipe} handleAdd={null} delete={handleDelete}/>
                            }
                        )
                    : null

                    }
                </div>
            </div>
        </div>
    );
}