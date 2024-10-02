'use client';

import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { addRecipe, getUserIngredients, searchRecipeWithIngredients } from '../api/spoonacular/route';
import { Plus } from "lucide-react";
import RecipeCard from "../components/LongRecipeCard";
import LongRecipeCard from "../components/LongRecipeCard";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function findByIngredient(){
    // Clean up any here
    const [ingredients, setIngredients] = useState<[any | null]>([null]);
    const [selected, setSelected] = useState<string[]>([]);
    const [results, setResults] = useState([]);
    const [ignore, setIgnore] = useState(false)
    const [sort, setSort] = useState(false)


    useEffect(() => {
        async function getUserIngredient(){
            // Clean up any here
            const userIngredients : any = await getUserIngredients();
            setIngredients(JSON.parse(JSON.stringify(userIngredients)));
        }
        getUserIngredient();
    }, [])

    //Clean up duplicates into variable
    function handleClick(e : React.MouseEvent<HTMLButtonElement>){
        let copy : string [] = [...selected];
        if(copy.includes((e.target as HTMLButtonElement).id)){
            copy.splice(copy.indexOf((e.target as HTMLButtonElement).id), 1);
        } else {
            if((e.target as HTMLButtonElement).id))
            copy.push((e.target as HTMLButtonElement).id));
        }
        setSelected(copy);
    }
    // searchRecipeWithIngredients(ingredients:Array<String>, sort:string | undefined)
    async function handleSearch(){
        const result = await searchRecipeWithIngredients(selected, sort, ignore);
        setResults(result);
    }

    async function handleAdd(e: any){
        addRecipe(e.target.parentElement.id);
    }
    //Used any for type, fix it
    const tags = ingredients.map((ingredient : any) => {
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
                    <div className="flex justify-evenly">
                        <div className="flex items-center space-x-2">
                            <Label htmlFor="ignore-pantry">Ignore Common Pantry Items</Label>
                            <Switch id="ignore-pantry" checked={ignore} onCheckedChange={setIgnore} />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Label htmlFor="sort">Max Used</Label>
                            <Switch id="sort" checked={sort} onCheckedChange={setSort} />
                            <Label htmlFor="sort">Min Missing</Label>
                        </div>
                    </div>
                    <div className="flex justify-center my-5">
                        <button className="bg-green-100 px-24 py-5" onClick={handleSearch}>Search</button>
                    </div>
                    <div>
                        {results.length > 0
                        ? results.map((recipe) =>{
                            return <LongRecipeCard recipe={recipe} handleAdd={handleAdd}/>
                          })
                        : <p>Search something</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}