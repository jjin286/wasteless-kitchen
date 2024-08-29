import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useState } from "react";

export default function FoodListEdit(props: {ingredient : any}){
    const [edit, setEdit] = useState(false);
    const {ingredient} = props;

    if(edit)
    return(
        <TableRow>
            <TableCell className="font-medium">{ingredient.name}</TableCell>
                <TableCell><input value={new Date(ingredient.created_at).toLocaleDateString()}></input></TableCell>
                <TableCell>{ingredient.exp_date ? ingredient.exp_date : "N/A"}</TableCell>
                <TableCell> {ingredient.amount + " " + ingredient.unit}</TableCell>
                <TableCell>
                    <button className="bg-green-200 rounded p-2 m-1">Edit</button>
                    <button className="bg-green-200 rounded p-2 m-1">Delete</button>
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