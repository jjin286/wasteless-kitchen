'use client';

import CardSection from '../components/CardSection';
import Nav from '../components/Nav'
import SearchBar from '../components/SearchBar';

export default function Ingredients(){
    return(
        <div className="ingredients-page bg-green-200">
            <Nav />
            <div className='h-full pt-24'>
                <SearchBar />
                <CardSection />
            </div>
        </div>
    );
}