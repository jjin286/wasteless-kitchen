'use client';

import Nav from '../../components/Nav'
import SearchBar from '../../components/SearchBar';
import { act, useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import FoodCardSection from '../../components/FoodCardSection';
import { searchIngredients } from '../../api/spoonacular/route';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import PaginationSection from '@/app/components/PaginationSection';


export default function AddIngredients(){
    const searchParams = useSearchParams();
    const [searchResult, setSearchResult] = useState<{number: number, offset: number, results: Array<any>, totalResults: number}>();
    const [activePage, setActivePage] = useState<number>(1);
    //Do I want this to be a state, looks to be unecessary
    const [itemsPerPage, setItemsPerPage] = useState<number>(12);

    useEffect(() => {
        if(searchParams.get('query')){
          handleSearch();
        }
      }, [activePage])

    async function handleSearch(){
        const search = {
            term: searchParams.get('query'),
            sort: searchParams.get('sort'),
            offset: (activePage - 1) * itemsPerPage
        }

        const data = await searchIngredients(search);
        console.log(data)
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
                    <>
                        <FoodCardSection searchResult={searchResult.results} info={false} delete={()=>console.log("Hello")}/>
                        <PaginationSection itemsPerPage={itemsPerPage} totalResults={searchResult.totalResults} setPage={setActivePage} activePage={activePage}/>
                    </>
                    }
                </div>
            </div>
        </div>
    );
}