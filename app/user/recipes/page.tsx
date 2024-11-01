'use client';

import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import { deleteUserRecipe, getUserIngredients, getUserRecipe } from "../../api/spoonacular/route";
import RecipeCard from "../../components/RecipeCard";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Recipes(){
    const [recipes, setRecipes] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        async function loadRecipes(){
            const userRecipes = await getUserRecipe();
            setRecipes(JSON.parse(JSON.stringify(userRecipes)));
            console.log("Recipes page user recipes", userRecipes)
            const userIngredients = await getUserIngredients();
            setIngredients(JSON.parse(JSON.stringify(userIngredients)));
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

        toast.success('Successfully deleted ' + id, {
            position: "top-center"
        }
        );
    }

    return(
        <div>
            <Nav />
            <div className="p-24">
                <ToastContainer />

                Your Recipes
                <div className="flex justify-end">
                    <Link href={'/recipes/create'}>
                        <button className="mx-1 p-3 bg-green-300 rounded">Create new recipe</button>
                    </Link>
                    <Link href={'/recipes/add'}>
                        <button className="mx-1 p-3 bg-green-300 rounded">Add new recipe</button>
                    </Link>
                </div>
                <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 xl:grid-cols-5">

                    { recipes.length > 0
                    ?
                         recipes.map((recipe) => {
                            return <RecipeCard recipe={recipe} ingredients={ingredients} handleAdd={null} delete={handleDelete}/>
                            }
                        )
                    : null

                    }
                </div>
            </div>
        </div>
    );
}