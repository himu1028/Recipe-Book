import React from 'react';
import TopRecipes from './TopRecipes';
import HeroSlider from './HeroSlider';
import Query from './Query';
import Review from './Review';

const Home = () => {
    return (
        <>
       <div className='w-11/12 mx-auto mt-3 rounded-lg'>
         <HeroSlider></HeroSlider>
       </div>
           <TopRecipes></TopRecipes> 
           <div className='w-11/12 bg-gray-300 px-5 py-10 mx-auto mt-3 rounded-lg'>
            <Query></Query>
           </div>
           <div className='w-11/12 bg-gray-300 px-5 py-10 mx-auto mt-3 rounded-lg'>
            <Review></Review>
           </div>
        </>
    );
};

export default Home;