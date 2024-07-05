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

const IMAGE_BASE_URL = 'https://img.spoonacular.com/ingredients_100x100/';
const UNITS = [
    'tsp', 'tbsp', 'c', 'pt', 'qt', 'gal', 
    'oz', 'lb', 'mL', 'L', 'g', 'kg'
]

export default function FoodCard(props: {ingredient : {
    id: number;
    name: string;
    image: string;
    }}
){
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

    return(
        <Card className="h-full w-full aspect-square transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 border-green-500">
            <CardHeader>
                <CirclePlus />
                <CardTitle className="text-center">{props.ingredient.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <Image
                    loader={() => src}
                    src={src}
                    width={100}
                    height={100}
                    alt={props.ingredient.name}
                    className="max-w-[100px] max-h-[100px] aspect-auto m-auto"

                />
            </CardContent>
            <CardFooter>
                {/* <Button variant="outline" size="icon">
                    <Minus className="h-4 w-4"/>    
                </Button> */}
                <Input type="number"/>
                {/* <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4"/>
                </Button> */}
                <Select defaultValue={UNITS[0]}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Units" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>

                            {unitOption}

                        </SelectGroup>
                    </SelectContent>
                </Select>
            </CardFooter>
        </Card>
    );
}