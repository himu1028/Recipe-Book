import React, { useEffect, useState } from 'react';
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router';
const TopRecipes = () => {

const [top,setTop]=useState([]);
console.log(top)

    useEffect(()=>{
        fetch('http://localhost:3000/top')
        .then(res => res.json())
        .then(data => setTop(data));
},[]);


    return (
        <>
        <h2 className="text-5xl pt-10 font-bold mb-6 text-center text-purple-700">Top Recipes</h2>
    <div className='grid grid-cols-3 w-11/12 mx-auto gap-y-5 py-5'>
        {
        top.map(topCard =>(

  
    <div key={topCard._id} className="card bg-base-100 w-96 shadow-sm ">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {topCard.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className='font-bold text-xl'>{topCard.
cuisineType}</p>
    <div className="card-actions justify-between mt-2">
      <button className="badge font-bold  cursor-pointer   text-3xl mt-1"><AiFillLike /></button>
      <Link to={`/top/${topCard._id}`}>
      <button className=" font-bold cursor-pointer btn btn-accent">See Details</button>
      </Link>
    </div>
  </div>
</div>
  
    ))
    }
    </div>
    <div className='text-center mt-4'>
       <Link to={"/all"}>
        <button className='text-center p-6 btn btn-primary text-2xl'>Show All Recipe</button>
       </Link>
    </div>
        </>
    );
};

export default TopRecipes;


