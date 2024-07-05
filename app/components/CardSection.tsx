import * as React from "react"
import FoodCard from "./FoodCard";

export default function CardSection(props: {searchResult : Array<{
    id: number;
    name: string;
    image: string;
    }>})
{
    function addIngredient(){

    }

    const ingredients = props.searchResult.map((ingredient) => {
        return (
            <FoodCard ingredient={ingredient}/>
        );
    })

    return(
        <div className="grid grid-cols-3 gap-2 ">
            {props.searchResult
            ? ingredients
            : <p>Search for ingredients!</p>
            }
        </div>
    );


}