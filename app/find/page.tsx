'use client';
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { getUserIngredients, searchRecipeWithIngredients } from '../api/spoonacular/route';
import { Plus } from "lucide-react";
import RecipeCard from "../components/LongRecipeCard";
import LongRecipeCard from "../components/LongRecipeCard";

export default function findByIngredient(){
    const [ingredients, setIngredients] = useState([]);
    const [selected, setSelected] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function getUserIngredient(){
            const userIngredients = await getUserIngredients();
            setIngredients(userIngredients);
        }
        getUserIngredient();
    }, [])

    function handleClick(e : any){
        let copy = [...selected];
        if(copy.includes(e.target.id)){
            copy.splice(copy.indexOf(e.target.id), 1);
        } else {
            if(e.target.id)
            copy.push(e.target.id);
        }
        setSelected(copy);
    }
    // searchRecipeWithIngredients(ingredients:Array<String>, sort:string | undefined)
    async function handleSearch(){
        const result = await searchRecipeWithIngredients(selected);
        setResults(result);
    }

    const tags = ingredients.map((ingredient) => {
        return (
            <button className='flex bg-gray-200 p-3 m-1' key={ingredient.name} id={ingredient.name} onClick={handleClick}>
                {selected.includes(ingredient.name) ? <Plus /> : null} {ingredient.name}
            </button>
        )
    })

    const searchTags = selected.map((ingredient) => {
        return (
            <button className='flex bg-gray-200 p-3 m-1' key={ingredient} id={ingredient} onClick={handleClick}>
                {ingredient}
            </button>
        )
    })

    return(
        <div>
            <Nav />
            <div className='pt-24 w-3/5 h-screen mx-auto'>
                <div>
                    Searching with
                    <div className="flex flex-wrap bg-green-200 min-h-28 justify-center items-center">
                        {selected.length > 0
                        ?
                        <div className="flex flex-wrap">
                            {searchTags}
                        </div>
                        :
                        <div className="flex flex-wrap">
                            <Plus /> Select ingredients to search by
                        </div>
                        }
                    </div>
                    Your ingredients
                    <div className="flex flex-wrap">
                        {tags}
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-green-100 px-24 py-5" onClick={handleSearch}>Search</button>
                    </div>
                    <div>
                        {results.length > 0
                        ? results.map((recipe) =>{
                            return <LongRecipeCard recipe={recipe} handleAdd={() => {console.log("Handle Add")}}/>
                          })
                        : <p>Search something</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}