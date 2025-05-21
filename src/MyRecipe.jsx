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

const handleDelete = async (id) => {
 const res = await fetch(`http://localhost:3000/top/${id}`, {
 method: 'DELETE',
 });
 const data = await res.json();
 console.log(data);

 if(data.deletedCount > 0){
  setRecipes(prev => prev.filter(recipe => recipe._id.toString() !== id.toString()));
 }
};

    return (
        <>
     <div className='w-11/12 mt-5 mx-auto grid grid-cols-3'>
          {
        recipes.map((recipe)=>(

 <div key={recipe._id} className="card bg-base-100 w-96 shadow-sm ">
  <figure>
    {/* image */}
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  {/* Title */}
  <div className="card-body">
    <h2 className="card-title">
      {recipe.title} 
    </h2>
    {/* ingredient */}
    <h2 className="card-title">
      {recipe.ingredients} 
    </h2>
    {/* Instruction */}
    <h2 className="card-title">
      {recipe.instruction} 
    </h2>
{/* cuisine */}
    <p className='font-bold text-xl'>{recipe.
cuisine}</p>
{/* preparation */}
<p className='font-bold text-xl'>{recipe.
time}</p>
{/* Category */}


{/* Like */}
    <div className="card-actions justify-between mt-2">
      <button className="badge font-bold  cursor-pointer   text-3xl mt-1"><AiFillLike /></button>

{/* Update */}
<Link >
      <button className=" font-bold cursor-pointer btn btn-accent">Update</button>
      </Link>


      {/* delete */}
      <Link >
      <button onClick={()=>handleDelete(recipe._id)} className=" font-bold cursor-pointer btn btn-accent">Delete</button>
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