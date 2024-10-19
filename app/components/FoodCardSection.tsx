import * as React from "react"
import FoodCard from "./FoodCard";
import UserFoodCard from "./UserFoodCard"

export default function FoodCardSection(props: {
    searchResult : Array<{
        id: number;
        name: string;
        image: string;
    }>,
    info: Boolean,
    delete: any
})
{


    const ingredients = props.searchResult.map((ingredient) => {
        if(props.info)
            return (
                <UserFoodCard key={ingredient.id} ingredient={ingredient} delete={props.delete}/>
            );

        return (
            <FoodCard key={ingredient.id} ingredient={ingredient}/>
        );
    })

    return(
        // <div className="flex flex-wrap justify-center">
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 xl:grid-cols-5">
            {props.searchResult
            ? ingredients
            : <p>Search for ingredients!</p>
            }
        </div>
    );


}