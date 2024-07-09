'use client';

import Nav from '../components/Nav';
import CardSection from '../components/CardSection';
import FoodList from '../components/FoodList';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useEffect, useState } from 'react';
import { getUserIngredients } from '../api/spoonacular/route';

export default function Ingredients(){
    const [view, setView] = useState('grid');
    const [ingredients, setIngredients] = useState<Array<{
        id: number;
        name: string;
        image: string;}>
    >([]);

    useEffect(() => {
        async function getIngredients(){
            const userIngredients = await getUserIngredients();
            setIngredients(userIngredients!);
            console.log("Ingredients page",userIngredients);
        }
        getIngredients();
    }, [])

    function changeView(value:string){
        setView(value);
    }

    return(
        <div>
            <Nav/>
            <div className='pt-24 bg-blue-100'>
                <h1 className='text-3xl p-12'>Your Ingredients</h1>
            </div>
            <div className='bg-yellow-100 mx-12'>
                <ToggleGroup
                    type="single"
                    defaultValue='grid'
                    onValueChange={(value) => changeView(value)}
                    className='flex justify-end'
                >
                    <ToggleGroupItem value="grid" aria-label="Toggle grid view">
                        Grid
                    </ToggleGroupItem>
                    <ToggleGroupItem value="list" aria-label="Toggle list view">
                        List
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
            <div className='mx-12'>
                {view === 'grid'
                    ? <CardSection searchResult={ingredients}/>
                    : <FoodList searchResult={ingredients}/>
                }
            </div>
        </div>
    );
}