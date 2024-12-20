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
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const IMAGE_BASE_URL = 'https://img.spoonacular.com/ingredients_100x100/';
const UNITS = [
    'tsp', 'tbsp', 'c', 'pt', 'qt', 'gal',
    'oz', 'lb', 'mL', 'L', 'g', 'kg'
]

export default function FoodCard(props: {ingredient : { id: number, name: string, image: string,}}){
    const [unit, setUnit] = useState(UNITS[0]);
    const [amount, setAmount] = useState(0);

    const src = `${IMAGE_BASE_URL}${props.ingredient.image}`;

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

    async function add(){
        const values = {
            id: props.ingredient.id,
            name: props.ingredient.name,
            image: props.ingredient.image,
            exp_date: null,
            unit: unit,
            amount: amount,
        }

        if(values.amount === 0) {
            toast.error("Please add an amount for " + values.name);
        }

        const error = await addIngredient(values);

        if(error){
            // Figure out how to handle already added ingredients, either overwrite, or add onto existing(Might need to convert if this is the decision)
            toast.error("Ingredient has already been added.")
        } else {
            toast.success('Successfully added' + values.amount + " " + values.unit + " of " + values.name, {
                position: "top-center"
             }
            );
        }
    }

    function handleAmount(e: any){
        setAmount(e.target.value);
    }

    function handleUnit(value:string){
        setUnit(value);
    }

    return(
        <Card className="h-96 w-full m-1 border-green-500 relative">
            <CardHeader>
                <Button
                    size="icon"
                    className="bg-white text-black-500"
                    onClick={add}
                >
                    <CirclePlus className="h-4 w-4"/>
                </Button>
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
            <CardFooter className="flex justify-center">
                <div className="flex bottom-0 absolute px-12 py-12">
                    <Input
                        type="number"
                        defaultValue={0}
                        onChange={handleAmount}

                    />

                    <Select
                        defaultValue={UNITS[0]}
                        onValueChange={(value:string) => {
                            handleUnit(value);
                        }}
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
                </div>

            </CardFooter>
        </Card>
    );
}