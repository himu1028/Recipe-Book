import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { AiFillLike } from "react-icons/ai";
import { Typewriter } from 'react-simple-typewriter';
const AllRecipe = () => {
    const AllRecipe = useLoaderData();
    console.log(AllRecipe)
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


  <div className='w-11/12 mx-auto grid grid-cols-4 gap-5'>
    {
        AllRecipe.map(singRecipe =>(

  
    <div key={singRecipe._id} className="card bg-base-100  shadow-sm w-70 h-[90%]">
  <figure>
    <img
    className='w-98 h-[100%]'
      src={singRecipe.image || singRecipe.photo || "https://i.ibb.co/vCzbmLwB/hhh.jpg"}
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
      <button className="badge font-bold  cursor-pointer   text-3xl mt-1"><AiFillLike />{singRecipe.likes}</button>
      <Link to={`/top/${singRecipe._id}`}>
      <button className=" font-bold cursor-pointer btn btn-accent">See Details</button>
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