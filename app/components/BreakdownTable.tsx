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
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  
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
  