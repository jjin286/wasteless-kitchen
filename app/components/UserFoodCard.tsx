'use client';

import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
} from "@/components/ui/select";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CirclePlus, Plus, Minus } from "lucide-react"
import { addIngredient } from "../api/spoonacular/route";
import { useState } from "react";

const IMAGE_BASE_URL = 'https://img.spoonacular.com/ingredients_100x100/';

export default function UserFoodCard(props: {
    ingredient : { 
        id: number, 
        name: string, 
        image: string,
        created_at: Date,
        exp_date: Date,
        unit: string,
        amount: number
    }
}){
    const [isEditing, setIsEditing] = useState(false);
    const src = `${IMAGE_BASE_URL}${props.ingredient.image}`;
    
    return(
        <div>
            <Card className="h-full w-full aspect-square transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 border-green-500">
                <CardHeader>
                    <CardTitle className="text-center">{props.ingredient.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Image
                        loader={() => src}
                        unoptimized={true}
                        src={src}
                        width={0}
                        height={0}
                        alt={props.ingredient.name}
                        className="w-auto max-h-[100px] aspect-auto m-auto"
                    />
                </CardContent>
                <CardFooter className="grid">
                    <p>Amount: {props.ingredient.amount + " " + props.ingredient.unit}</p>
                    <p>Date added: {props.ingredient.created_at}</p>
                    <p>Expiration date: {props.ingredient.exp_date ? props.ingredient.exp_date : "N/A"}</p>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                </CardFooter>
            </Card>
        </div>
    );
}