'use client';

import Nav from '../../components/Nav'
import SearchBar from '../../components/SearchBar';
import { useState } from 'react';
import { useSearchParams } from "next/navigation";
import CardSection from '../../components/CardSection';
import { searchIngredients } from '../../api/spoonacular/route';

export default function AddIngredients(){
    const searchParams = useSearchParams();
    const [searchResult, setSearchResult] = useState([]);

    async function handleSearch(){
        const search = {
            term: searchParams.get('query'),
            sort: searchParams.get('sort'),
            offset: 0
        }

        const data = await searchIngredients(search);
        setSearchResult(data);
    }

    return(
        <div className="ingredients-page bg-green-200">
            <Nav />
            <div className='h-full pt-24 mx-12'>
                <SearchBar handleSearch={handleSearch}/>
                <div className='mt-12'>
                    <CardSection searchResult={searchResult} info={false}/>
                </div>
            </div>
        </div>
    );
}