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
console.log(tags)
    return(
        <div>
            <Nav />
            <div className='pt-24 w-3/5 h-screen mx-auto'>
                <div>
                    Search by your ingredients
                    <div className="flex flex-wrap">
                        {tags}
                    </div>
                </div>
            </div>
        </div>
    )
}