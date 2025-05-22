import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AiFillLike } from "react-icons/ai";
import { Typewriter } from 'react-simple-typewriter';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const AllRecipe = () => {
    const AllRecipe = useLoaderData();
    console.log(AllRecipe)
    const [filter,setFilter]=useState(AllRecipe)
    console.log(filter)

const handleSortClick = async(cuisineType)=>{
  const res = await fetch (`http://localhost:3000/topsF?cuisineType=${cuisineType}`);
  const data = await res.json()
  setFilter(data)
}




    return (
        <>
          <div className='bg-gray-300 w-11/12 mx-auto pb-5 pt-2 mt-3 px-5 rounded-lg'>

<h1 className='text-5xl text-center font-bold '>All Recipes</h1>
<div className="text-xl  my-8 text-center text-red-900 font-bold">
      <Typewriter
        words={['Here You Can see All recipe that added by Recipe Book  authority & their  users', 'Here You Can see All recipe that added by Recipe Book  authority & their  users', 'Here You Can see All recipe that added by Recipe Book  authority & their  users']}
        loop={5}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
  />
</div>

{/* Dropdown */}
<div className='ml-135 my-5'>
   <div className="dropdown text-center dropdown-bottom dropdown-center">
  <div tabIndex={0} role="button" className="btn text-2xl m-1 py-4">Filter by cuisine ⬇️</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSortClick("Italian")}>Italian</a></li>
    <li><a onClick={()=>handleSortClick("Mexican")}>Mexican</a></li>
    <li><a onClick={()=>handleSortClick("Indian")}>Indian</a></li>
    <li><a onClick={()=>handleSortClick("American")}>American</a></li>
    <li><a onClick={()=>handleSortClick("Chinese")}>Chinese</a></li>
  </ul>
</div>
</div>


  <div className='w-11/12 mx-auto grid grid-cols-4 gap-5'>
    {
        filter.map(singRecipe =>(

  
    <div key={singRecipe._id} className="card bg-base-100  shadow-sm w-70 h-[90%]">
  <figure>
    <img
    className='w-98 h-[100%] '
      src={singRecipe.image ||  "https://i.ibb.co/vCzbmLwB/hhh.jpg"}
      alt="Recipe" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-amber-900 text-xl font-bold">
      {singRecipe.title}
      <div className="badge badge-secondary">Delicious</div>
    </h2>
    

    <p className=' text-xl'>Cuisine Type: {singRecipe.
cuisineType || singRecipe.cuisine}</p>
    <div className="card-actions justify-between mt-2">
      <button 
       data-tooltip-id="like-tooltip" 
      data-tooltip-content="Total Likes"
      className="badge font-bold  cursor-pointer   text-3xl mt-1"><AiFillLike />{singRecipe.likes}</button>
      <Tooltip id="like-tooltip"/>
      <Link to={`/top/${singRecipe._id}`}>
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

          </div>

        </>
    );
};

export default AllRecipe;