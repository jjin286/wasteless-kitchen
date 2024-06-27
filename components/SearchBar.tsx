import { useState } from "react";

export default function SearchBar(){
    const [searchTerm, setSearchTerm] = useState("");

    function onChange(e: React.ChangeEvent<HTMLInputElement>){
        const term = e.currentTarget.value;
        setSearchTerm(term);
    }

    return(
        <div className="flex justify-center pt-12">
            <input
                type="text"
                placeholder="Search"
                className="p-3 w-3/4"
                onChange={onChange}
                value={searchTerm}
            />

        </div>
    );
}