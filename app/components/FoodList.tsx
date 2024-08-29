import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import FoodListEdit from "@/app/components/FoodListEdit"

export default function FoodList(props: {searchResult : Array<{
    id: number;
    name: string;
    image: string;
}>})
{

    console.log(props.searchResult)
    const list = props.searchResult.map((ingredient) => {
        return(
            <FoodListEdit ingredient={ingredient}/>
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
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {list}
            </TableBody>
        </Table>
    );
}

