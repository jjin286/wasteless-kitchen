import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function FoodList(props: {searchResult : Array<{
    id: number;
    name: string;
    image: string;
}>})
{

    console.log(props.searchResult)
    const list = props.searchResult.map((ingredient) => {
        return(
            <TableRow>
                <TableCell className="font-medium">{ingredient.name}</TableCell>
                    <TableCell>{new Date(ingredient.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>{ingredient.exp_date ? ingredient.exp_date : "N/A"}</TableCell>
                    <TableCell> {ingredient.amount + " " + ingredient.unit}</TableCell>
            </TableRow>
        );
    })
    return(
        <Table>
            <TableCaption>A list of your ingredients</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead>Ingredients</TableHead>
                <TableHead>Date added</TableHead>
                <TableHead>Expiration date</TableHead>
                <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {list}
            </TableBody>
        </Table>
    );
}