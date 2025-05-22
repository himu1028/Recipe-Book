import React, { useEffect, useState } from 'react';
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const TopRecipes = () => {

const [top,setTop]=useState([]);
console.log(top)

    useEffect(()=>{
        fetch('http://localhost:3000/top')
        .then(res => res.json())
    .then(data => {
      console.log(data) 
      setTop(data)
    });
},[]);


    return (
        <>
        <div className='bg-gray-300 w-11/12 mx-auto mt-3 rounded-lg'>
          {/* <h2 className="text-5xl pt-10 font-bold my-4 text-center text-purple-700">Top Recipes</h2> */}
<div className="text-5xl pt-10 my-4 text-center text-purple-700 font-bold">
      <Typewriter
        words={['Top Recipe', 'Welcome to Top Recipe!', 'Top Recipe']}
        loop={5}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
  />
</div>


    <div className='grid grid-cols-3 pl-14  gap-y-5 py-5'>
        {
        top.map(topCard =>(

  
    <div key={topCard._id} className="card bg-base-100 w-98 h-[90%]  shadow-sm ">
  <figure>
    <img className='w-98'
      src={topCard.image}
      alt="Recipe" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-amber-900 text-2xl font-bold">
      {topCard.title}
      <div className="badge badge-secondary">TOP</div>
    </h2>
    <p className=' text-xl'>Cuisine Type: {topCard.
cuisineType}</p>
    <div className="card-actions justify-between mt-2">

      <button 
      data-tooltip-id="like-tooltip" 
      data-tooltip-content="Total Likes"
      className="badge font-bold  cursor-pointer text-3xl mt-1"><AiFillLike />{topCard.likes}</button>
      <Tooltip id="like-tooltip"/>

      <Link to={`/top/${topCard._id}`}>

      <button 
        data-tooltip-id="like-tooltip" 
         data-tooltip-content="You can see details"
      className=" font-bold cursor-pointer btn btn-accent">See Details</button>
     <Tooltip id="like-tooltip"/>
   


      </Link>
    </div>
  </div>
</div>
  
    ))
    }
    </div>
    <div className='text-center my-4 pb-6'>
       <Link to={"/all"}>
        <button 
         data-tooltip-id="like-tooltip" 
         data-tooltip-content="You can see details"
        className='text-center p-6 btn btn-primary text-2xl'>Show All Recipe</button>
        <Tooltip id="like-tooltip"/>
       </Link>
    </div>
        </div>
        </>
    );
};

export default TopRecipes;


