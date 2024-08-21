import { CirclePlus, AlarmClock, HandPlatter, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function RecipeCard(props: {recipe : any, handleAdd : any}){
    console.log(props.recipe)
    let {handleAdd} = props;
    let recipe = props.recipe.metadata ? props.recipe.metadata : props.recipe;
    return(
    <div className="recipe-card flex flex-col bg-green-300 m-4 sm:w-2/5 w-1/5 h-2/4 rounded overflow-hidden relative">
        {handleAdd
        ?<button id={recipe.id} className="absolute bottom-0 right-0 z-20 bg-green-300 rounded-full hover:text-white" onClick={handleAdd}>
            <CirclePlus size={48} />
        </button>
        : null
        }

        <div className="relative h-1/2">
            <Link href={`/recipes/${recipe.id}`}>
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
            <Link href={`/recipes/${recipe.id}`}>
                <p><b>{recipe.title}</b></p>
            </Link>
            <div className="h-1/4 absolute bottom-0">
                <p className="flex"><AlarmClock /> &nbsp; {recipe.readyInMinutes ? recipe.readyInMinutes + ' minutes' : 'N/A'} </p>
                <p className="flex"><HandPlatter /> &nbsp; {recipe.servings}</p>
                <p className="flex"><Heart /> &nbsp; {recipe.aggregateLikes}</p>
            </div>
        </div>
    </div>
    );
}