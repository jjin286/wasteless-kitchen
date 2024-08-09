'use client';

import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { getUserRecipe } from "../api/spoonacular/route";

export default function Recipes(){
    const [recipes, setRecipes] = useState();

    useEffect(() => {
        async function loadRecipes(){
            const userRecipes = await getUserRecipe();
            setRecipes(userRecipes);
            console.log("Recipes page user recipes", userRecipes)
        }
        loadRecipes();
    }, [])

    return(
        <div>
            <Nav />
            <div className="pt-24">
                Your Recipes

            </div>
        </div>
    );
}