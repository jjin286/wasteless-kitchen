import * as React from "react"
import FoodCard from "./FoodCard";
import UserFoodCard from "./UserFoodCard"

export default function FoodCardSection(props: {searchResult : Array<{
    id: number;
    name: string;
    image: string;
    }>, info: Boolean})
{
    const ingredients = props.searchResult.map((ingredient) => {
        if(props.info)
            return (
                <UserFoodCard key={ingredient.id} ingredient={ingredient} />
            );

        return (
            <FoodCard key={ingredient.id} ingredient={ingredient}/>
        );
    })

    return(
        <div className="flex flex-wrap justify-center">
            {props.searchResult
            ? ingredients
            : <p>Search for ingredients!</p>
            }
        </div>
    );


}