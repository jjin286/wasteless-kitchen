'use client';
import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar(){
    // const [searchTerm, setSearchTerm] = useState("");
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
        // setSearchTerm(term);
    }, 300);

    return(
        <div className="flex justify-center pt-12">
            <input
                type="text"
                placeholder="Search"
                className="p-3 w-3/4"
                onChange={(e) => {handleSearch(e.target.value)}}
                defaultValue={searchParams.get('query')?.toString()}
                // value={searchTerm}

            />

        </div>
    );
}