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

export default function FoodCard(){
    return(
        <div>
            <Card className="card p-12 m-5 bg-[#daffd6] rounded content-center">
            <div className="image">
                <Image
                    src={IMAGE_BASE_URL + props.searchResult.image}
                    width={100}
                    height={100}
                    alt={text}
                    className="mx-auto"
                />
            </div>
            <div className="text pt-5 font-medium">
                <p></p>
            </div>
        </Card>
        </div>
    );
}