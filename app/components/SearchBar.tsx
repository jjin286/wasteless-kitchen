'use client';

import * as React from "react"
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';
import { Input } from "@/components/ui/input";
import SortBySelect from "./SortBySelect";
import { useState } from "react";

export default function SearchBar(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [sortBy, setSortBy] = useState("");
    const params = new URLSearchParams(searchParams);

    const handleSearch = useDebouncedCallback((term) => {
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const handleSort = useDebouncedCallback((value:string) => {
        if(value) {
            params.set('sort', value);
        } else {
            params.delete('sort');
        }

        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return(
        <div className="flex justify-center pt-12">
            <Input
                type="text"
                placeholder="Search"
                className="p-3 w-3/4"
                defaultValue={searchParams.get('query')?.toString()}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
            />
            <SortBySelect handleSort={handleSort}/>
        </div>
    );
}