'use client'
import Nav from '../components/Nav';
import CardSection from '../components/CardSection';
import FoodList from '../components/FoodList';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useState } from 'react';

const SAMPLE_INGREDIENT =  [
    {
        "id": 19400,
        "name": "banana chips",
        "image": "banana-chips.jpg"
    },
    {
        "id": 93779,
        "name": "banana liqueur",
        "image": "limoncello.jpg"
    }
];

export default function Ingredients(){
    const [view, setView] = useState('grid');

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
                    ? <CardSection searchResult={SAMPLE_INGREDIENT}/>
                    : <FoodList searchResult={SAMPLE_INGREDIENT}/>
                }
            </div>
        </div>
    );
}