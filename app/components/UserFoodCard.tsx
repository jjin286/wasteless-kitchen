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
import { deleteUserIngredients, updateIngredient } from "../api/spoonacular/route";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


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
    },
    delete : any
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
        toast.success('Successfully edited ' + foodInfo.name, {
            position: "top-center"
        }
        );
        console.log("Trigger update in UserFoodCard")
    }

    // function deleteIngredient(){
    //     deleteUserIngredients(foodInfo.id);
    // }

    const unitOption = UNITS.map((unit) => {
        return(
            <SelectItem
                value={`${unit}`}
                key={unit}
            >
                    {unit.charAt(0) + unit.slice(1)}
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
            <div className="border-black border p-9 mb-5">
                <p>Amount: {foodInfo.amount + " " + foodInfo.unit}</p>
                <p>Date added: {new Date(foodInfo.created_at).toLocaleDateString()}</p>
                <p>Expiration date: {foodInfo.exp_date ? foodInfo.exp_date : "N/A"}</p>
            </div>
            <div className="flex justify-evenly w-full">
             <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
             <Button onClick={() => props.delete(foodInfo.id)}>Delete</Button>
            </div>
        </>
   );



    return(
        <Card className="h-108 border-green-500 m-2 flex flex-col justify-end">
            <CardHeader>
            <Image
                    loader={() => src}
                    unoptimized={true}
                    src={src}
                    width={0}
                    height={0}
                    alt={props.ingredient.name}
                    className="w-auto max-h-[100px] aspect-auto m-auto"
                />
            </CardHeader>
            <CardContent>
                <CardTitle className="text-center">{props.ingredient.name}</CardTitle>
            </CardContent>
            <CardFooter className="flex flex-col w-full ">
                {isEditing ? editView : infoView}
            </CardFooter>
        </Card>
    );
}