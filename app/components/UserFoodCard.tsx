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
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { updateIngredient } from "../api/spoonacular/route";

const IMAGE_BASE_URL = 'https://img.spoonacular.com/ingredients_100x100/';
const UNITS = [
    'tsp', 'tbsp', 'c', 'pt', 'qt', 'gal',
    'oz', 'lb', 'mL', 'L', 'g', 'kg'
]

//Conflicts in cardsection
export default function UserFoodCard(props: {
    ingredient : {
        id: number,
        name: string,
        image: string,
        created_at: Date | null,
        exp_date: Date | null,
        unit: string | null,
        amount: number | null
    }
}){
    const [isEditing, setIsEditing] = useState(false);
    const [foodInfo, setFoodInfo] = useState({...props.ingredient});
    const src = `${IMAGE_BASE_URL}${props.ingredient.image}`;

    function handleChange(e: any){
        const name = e.target.name;
        const value = e.target.value;
        console.log("Change occur", name, value)
        setFoodInfo({...foodInfo, [name]: value});
    }

    async function updateFood(){
        updateIngredient(foodInfo);
        console.log("Trigger update in UserFoodCard")
    }

    const unitOption = UNITS.map((unit) => {
        return(
            <SelectItem
                value={`${unit}`}
                key={unit}
            >
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </SelectItem>
        );
    })

    const editView = (
        <>
            <Label>Amount</Label>
            <Input name="amount" defaultValue={props.ingredient.amount || 0} onChange={handleChange}></Input>
            <Select
                    defaultValue={props.ingredient.unit || 'tsp'}
                    onValueChange={handleChange}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Units" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {unitOption}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            <Button onClick={() => {setIsEditing(!isEditing); updateFood();}}>Apply</Button>
            <Button onClick={() => {setIsEditing(!isEditing)}}>Cancel</Button>
        </>
    );

    const infoView = (
        <>
            <p>Amount: {foodInfo.amount + " " + foodInfo.unit}</p>
            <p>Date added: {foodInfo.created_at}</p>
            <p>Expiration date: {foodInfo.exp_date ? foodInfo.exp_date : "N/A"}</p>
            <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
            <Button>Delete</Button>
        </>
   );



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
                    {isEditing ? editView : infoView}
                </CardFooter>
            </Card>
        </div>
    );
}