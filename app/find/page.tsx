'use client';
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { getUserIngredients } from '../api/spoonacular/route';
import { Plus } from "lucide-react";

export default function findByIngredient(){
    const [ingredients, setIngredients] = useState([]);
    const [selected, setSelected] = useState([]);

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
                </div>
            </div>
        </div>
    )
}