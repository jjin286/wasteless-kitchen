import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
} from "@/components/ui/select";
import { useState } from "react";
import { updateIngredient } from "../api/spoonacular/route";

export default function FoodListEdit(props: {ingredient : any}){
    const [edit, setEdit] = useState(false);
    const [ingredient, setIngredient] = useState(props.ingredient)

    const UNITS = [
        'tsp', 'tbsp', 'c', 'pt', 'qt', 'gal',
        'oz', 'lb', 'mL', 'L', 'g', 'kg'
    ]

    async function handleSave(){
        updateIngredient(ingredient);
        setEdit(!edit);
        console.log("Save", ingredient)
    }


    function handleChange(e: any){
        // setIngredient({...ingredient, unit: e})
        const name = e.target.name;
        const value = e.target.value;
        console.log("Change occur", e.target, "name", name, "value", value)
        setIngredient({...ingredient, [name]: value});
    }

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

    if(edit)
    return(
        <TableRow>
            <TableCell className="font-medium">{ingredient.name}</TableCell>
                <TableCell><input value={new Date(ingredient.created_at).toLocaleDateString()}></input></TableCell>
                <TableCell>{ingredient.exp_date ? ingredient.exp_date : "N/A"}</TableCell>
                <TableCell className="flex">
                    <input className="text-end" name={'amount'}  defaultValue={props.ingredient.amount || 0} onChange={handleChange}/>
                    <Select
                        defaultValue={ingredient.unit || 'tsp'}
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
                    <input value={ingredient.unit}></input>
                </TableCell>
                <TableCell>
                    <button className="bg-green-200 rounded p-2 m-1" onClick={handleSave}>Save</button>
                </TableCell>
        </TableRow>
    )

    return(
        <TableRow>
            <TableCell className="font-medium">{ingredient.name}</TableCell>
                <TableCell>{new Date(ingredient.created_at).toLocaleDateString()}</TableCell>
                <TableCell>{ingredient.exp_date ? ingredient.exp_date : "N/A"}</TableCell>
                <TableCell> {ingredient.amount + " " + ingredient.unit}</TableCell>
                <TableCell>
                    <button className="bg-green-200 rounded p-2 m-1" onClick={() => setEdit(!edit)}>Edit</button>
                    <button className="bg-green-200 rounded p-2 m-1">Delete</button>
                </TableCell>
        </TableRow>
    )
}