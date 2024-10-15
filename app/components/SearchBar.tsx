'use client';

import * as React from "react"
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import SortBySelect from "./SortBySelect";
import { searchIngredients } from "../api/spoonacular/route";
import { useState } from "react";

export default function SearchBar(props: {handleSearch : () => void}){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const params = new URLSearchParams(searchParams);

    function handleTerm(term : string) {
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
    };

    function handleSort(value:string){
        if(value) {
            params.set('sort', value);
        } else {
            params.delete('sort');
        }

        replace(`${pathname}?${params.toString()}`);
    };

    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>){
        if (event.key === 'Enter') {
         props.handleSearch();
        }
    };

    return(
        <div className="flex justify-center pt-12">
            <Input
                type="text"
                placeholder="Search"
                className="p-3 w-3/4"
                defaultValue={searchParams.get('query')?.toString()}
                onChange={(e) => {
                    handleTerm(e.target.value);
                }}
                onKeyDown={handleKeyPress}
            />
            <SortBySelect handleSort={handleSort}/>
            <Button variant="outline" onClick={props.handleSearch} >Search</Button>
        </div>
    );
}