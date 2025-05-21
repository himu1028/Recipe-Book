import React, { use, useEffect, useState } from 'react';
import { AuthContext } from './Context/AuthContext';
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router';
const MyRecipe = () => {
    const {user} = use(AuthContext)
const [recipes,setRecipes]=useState([])
console.log(recipes)
    useEffect(()=>{
        const myRecipes = async () => {
            const res = await fetch(`http://localhost:3000/recipes?email=${user?.email}`);
            const data = await res.json();
            setRecipes(data)
        };
        myRecipes();
    },[user?.email])
    return (
        <>
     <div className='w-11/12 mx-auto grid grid-cols-3'>
          {
        recipes.map((recipe)=>(

 <div key={recipe._id} className="card bg-base-100 w-96 shadow-sm ">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {recipe.title}
      
    </h2>
    <p className='font-bold text-xl'>{recipe.
cuisine}</p>
    <div className="card-actions justify-between mt-2">
      <button className="badge font-bold  cursor-pointer   text-3xl mt-1"><AiFillLike /></button>
      <Link to={`/top/${recipe._id}`}>
      <button className=" font-bold cursor-pointer btn btn-accent">See Details</button>
      </Link>
    </div>
  </div>
</div>

        ))
       }
     </div>
        </>
    );
};

export default MyRecipe;