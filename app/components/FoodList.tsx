
export default function FoodList(props: {searchResult : Array<{
    id: number;
    name: string;
    image: string;
}>})
{
    const list = props.searchResult.map((ingredient) => {
        return(
        <li
            id={`${ingredient.id}`}
            className="p-5 bg-green-100"
        >
            {ingredient.name}
        </li>
        );
    })
    return(
        <ul>
            {list}
        </ul>
    );
}