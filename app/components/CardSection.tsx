import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import Image from "next/image";

const IMAGE_BASE_URL = 'https://img.spoonacular.com/ingredients_100x100/';

export default function CardSection(props: {searchResult : Array<{
    id: number;
    name: string;
    image: string;  
    }>})
{
    const ingredients = props.searchResult.map((ingredient) => {
        const src = `${IMAGE_BASE_URL}${ingredient.image}`;
        return (
        <Card>
            <Image
                loader={() => src}
                src={src}
                width={200}
                height={200}
                alt={ingredient.name}
                className="mx-auto"
            />
            <p>{ingredient.name}</p>
        </Card>
        );
    })

    return(
        <div>
            {props.searchResult 
            ? ingredients 
            : <p>Search for ingredients!</p>
            }
        </div>
    );
   
    
}