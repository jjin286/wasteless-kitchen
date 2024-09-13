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
                <div className='mt-12'>
                    <FoodCardSection searchResult={searchResult} info={false} delete={()=>console.log("Hello")}/>
                </div>
            </div>
        </div>
    );
}