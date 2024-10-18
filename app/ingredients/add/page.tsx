'use client';

import Nav from '../../components/Nav'
import SearchBar from '../../components/SearchBar';
import { useState } from 'react';
import { useSearchParams } from "next/navigation";
import FoodCardSection from '../../components/FoodCardSection';
import { searchIngredients } from '../../api/spoonacular/route';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


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
            <ToastContainer />
            <div className='h-full pt-24 mx-12'>
                <Link href={'/ingredients'}>
                    <Button>
                        Back
                    </Button>
                </Link>
                <SearchBar handleSearch={handleSearch}/>
                <div>
                    {
                        searchResult === undefined || searchResult.length == 0
                        ?
                        <div className="flex col-span-3 row-start-8">
                            <p className='mx-auto'>Search for some ingredients to add to your recipe collection!</p>
                        </div>
                        :
                    // Handle delete function
                        <FoodCardSection searchResult={searchResult} info={false} delete={()=>console.log("Hello")}/>
                    }
                </div>
            </div>
        </div>
    );
}