'use client';

import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { getUserRecipe } from "../api/spoonacular/route";
import RecipeCard from "../components/RecipeCard";

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

    return(
        <div>
            <Nav />
            <div className="pt-24">
                Your Recipes
                <div className="flex w-4/5 mx-auto h-screen flex-wrap mb-24">
                    { recipes.length > 0
                    ?
                         recipes.map((recipe) => {
                            return <RecipeCard recipe={recipe} handleAdd={null}/>
                        }
                        )
                    : null

                    }
                </div>
            </div>
        </div>
    );
}