import * as React from "react"
import FoodCard from "./FoodCard";
import UserFoodCard from "./UserFoodCard"

export default function CardSection(props: {searchResult : Array<{
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
        <div className="grid grid-cols-3 gap-2 ">
            {props.searchResult
            ? ingredients
            : <p>Search for ingredients!</p>
            }
        </div>
    );


}