'use client';

import Nav from '../../components/Nav';
import FoodCardSection from '../../components/FoodCardSection';
import FoodList from '../../components/FoodList';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useEffect, useState } from 'react';
import { deleteUserIngredients, getUserIngredients } from '../../api/spoonacular/route';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
            setIngredients(JSON.parse(JSON.stringify(userIngredients)));
            console.log("Ingredients page",userIngredients);
        }
        getIngredients();
    }, [])

    function changeView(value:string){
        setView(value);
    }

    function deleteIngredient(id: number){
        console.log("ID", id)
        deleteUserIngredients(id);
        setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
        toast.success('Successfully deleted ' + id, {
            position: "top-center"
        }
        );
    }

    return(
        <div>
            <Nav/>
            <ToastContainer />
            <div className='pt-24 bg-blue-100 grid'>
                <h1 className='text-3xl p-12'>Your Ingredients</h1>
                <Link href={'/add/ingredients'} className='justify-self-end'>
                    <Button>Add ingredients</Button>
                </Link>
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
                    ? <FoodCardSection searchResult={ingredients} info={true} delete={deleteIngredient}/>
                    : <FoodList searchResult={ingredients} delete={deleteIngredient}/>
                }
            </div>
        </div>
    );
}