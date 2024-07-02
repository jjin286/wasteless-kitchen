'use client';

import CardSection from '../components/CardSection';
import Nav from '../components/Nav'
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import searchIngredients from '../api/spoonacular/route';
import { usePathname, useSearchParams, useRouter } from "next/navigation";


export default function Ingredients(){
    const [searchResult, setSearchResult] = useState([]);
    const searchParams = useSearchParams();

    async function handleSearch(){
        const search = {
            term: searchParams.get('query'),
            sort: searchParams.get('sort'),
            offset: 0
        }
        console.log("Term", searchParams.get('term'), "sort", searchParams.get('sort'))

        const data = await searchIngredients(search);
        setSearchResult(data);
    }

    return(
        <div className="ingredients-page bg-green-200">
            <Nav />
            <div className='h-full pt-24'>
                <SearchBar handleSearch={handleSearch}/>
                <CardSection searchResult={searchResult}/>
            </div>
        </div>
    );
}