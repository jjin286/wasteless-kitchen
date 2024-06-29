import * as React from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
  } from "@/components/ui/select";
import { useSearchParams } from "next/navigation";

const SORTABLE = ["(empty)","meta-score","popularity","healthiness","price","time","random",
"max-used-ingredients","min-missing-ingredients","alcohol","caffeine","copper","energy","calories","calcium","carbohydrates",
"carbs","choline","cholesterol","total-fat","fluoride","trans-fat","saturated-fat","mono-unsaturated-fat",
"poly-unsaturated-fat","fiber","folate","folic-acid","iodine","iron","magnesium","manganese","vitamin-b3",
"niacin","vitamin-b5","pantothenic-acid","phosphorus","potassium","protein","vitamin-b2","riboflavin","selenium",
"sodium","vitamin-b1","thiamin","vitamin-a","vitamin-b6","vitamin-b12","vitamin-c","vitamin-d","vitamin-e",
"vitamin-k","sugar","zinc"
]

export default function SortBySelect({handleSort}){
    const searchParams = useSearchParams();
    const sortable = SORTABLE.map((sortable) => {
        return(
            <SelectItem
                value={`${sortable}`}
                key={sortable}
            >
                    {sortable.charAt(0).toUpperCase() + sortable.slice(1)}
            </SelectItem>
        );
    })

    return(
        <Select
            onValueChange={(value:string) => {
                handleSort(value);
            }}
            defaultValue={searchParams.get("sort")}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>

                    {sortable}

                </SelectGroup>
            </SelectContent>
        </Select>
    );
  }