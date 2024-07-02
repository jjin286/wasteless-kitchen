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
        <Card className="h-full w-full aspect-square transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 border-green-500">
            <CardHeader>
                <CardTitle className="text-center">{ingredient.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <Image
                    loader={() => src}
                    src={src}
                    width={100}
                    height={100}
                    alt={ingredient.name}
                    className="max-w-[100px] max-h-[100px] aspect-auto m-auto"

                />
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
        );
    })

    return(
        <div className="grid grid-cols-4 gap-2 ">
            {props.searchResult
            ? ingredients
            : <p>Search for ingredients!</p>
            }
        </div>
    );


}