import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { AiFillLike } from "react-icons/ai";
const AllRecipe = () => {
    const AllRecipe = useLoaderData();
    console.log(AllRecipe)
    return (
        <>
          <div className='bg-gray-300 w-11/12 mx-auto pb-5 pt-2 mt-3 px-5 rounded-lg'>

<h2 className='text-center text-4xl font-bold text-blue-400 my-8'>Here You Can see All recipe that added by <span className='text-accent'>Recipe Book</span> authority & their  users</h2> 

  <div className='w-11/12 mx-auto grid grid-cols-4 gap-5'>
    {
        AllRecipe.map(singRecipe =>(

  
    <div key={singRecipe._id} className="card bg-base-100  shadow-sm ">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {singRecipe.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className='font-bold text-xl'>{singRecipe.
cuisineType}</p>
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