import { CirclePlus, AlarmClock, HandPlatter, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Ingredients from "../user/ingredients/page";
import React from "react";
import { usePathname } from 'next/navigation'

export default function RecipeCard(props: {recipe : any, handleAdd ?: any, delete ?: any, ingredients: any}){
    let {handleAdd} = props;
    let recipe = props.recipe.metadata ? props.recipe.metadata : props.recipe;
    const pathname = usePathname();
    const recipeLink = pathname === '/user/recipes' ? `/user/recipes/${recipe.id}` : `/add/recipes/${recipe.id}`
    console.log("Recipe", recipe, props.ingredients, "path", pathname)

    //Figure out if missing counter should be included
    // const missing = recipe.extendedIngredients.map((ingredient) => {
    //     let included = false;
    //     for (let i in props.ingredients){
    //         if(i.id === ingredient.id)
    //             included = true;
    //     }

    //     if(!included) return ingredient.id;
    // })
    // console.log(missing)

    return(
        // Different margins perhaps
    <div className="recipe-card flex flex-col bg-green-300 m-2 h-96 w-full rounded overflow-hidden relative">
        {handleAdd
            ?<button id={recipe.id} className="absolute bottom-0 right-0 z-20 bg-green-300 rounded-full hover:text-white" onClick={handleAdd}>
                <CirclePlus size={48} />
            </button>
            : null
        }

        <div className="relative h-1/2">
            <Link href={recipeLink}>
                <Image
                    loader={() => recipe.image}
                    unoptimized={true}
                    src={recipe.image}
                    fill={true}
                    objectFit="cover"
                    alt={recipe.id.toString()}
                    className=""
                    />
            </Link>
        </div>
        <div className="flex flex-col p-5">
            <Link href={recipeLink}>
                <p><b>{recipe.title}</b></p>
                    {/* <p>Missing {missing.length}</p> */}
            </Link>
            <div className="h-1/4 absolute bottom-0">
                <p className="flex"><AlarmClock /> &nbsp; {recipe.readyInMinutes ? recipe.readyInMinutes + ' minutes' : 'N/A'} </p>
                <p className="flex"><HandPlatter /> &nbsp; {recipe.servings}</p>
                <p className="flex"><Heart /> &nbsp; {recipe.aggregateLikes}</p>
            </div>

            {props.delete
                ? <button className="rounded p-2 bg-white absolute bottom-5 right-5 hover:bg-gray-50" onClick={() => props.delete(recipe.id)}>
                    Delete
                    </button>
                : null
            }
        </div>
    </div>
    );
}