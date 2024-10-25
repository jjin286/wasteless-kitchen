import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"



  export default function BreakdownTable(props: {
    ingredients: Array<{
      name: string,
      image: string,
      price: number,
      amount: {
        metric:{
          value: number,
          unit: string
        },
        us:{
          value: number,
          unit: string
        }
      }
    }>,
    totalCost: number,
    totalCostPerServing: number
  }) {
    return (
      <Table className="w-1/2 ">
        <TableHeader>
          <TableRow className="w-full">
            <TableHead className="w-3/4">Ingredient</TableHead>
            <TableHead className="text-right w-1/4">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.ingredients.map((ingredient) => (
            <TableRow key={ingredient.name}>
              <TableCell colSpan={3} className="font-medium">{ingredient.amount.metric.value} {ingredient.amount.metric.unit} of {ingredient.name}</TableCell>
              <TableCell className="text-right">${Math.trunc(ingredient.price) / 100}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Cost Per Serving</TableCell>
            <TableCell className="text-right">${Math.trunc(props.totalCostPerServing) / 100}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
