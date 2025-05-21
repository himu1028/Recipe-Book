import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
 const recipe = useLoaderData()
  const [likes,setLikes]=useState(recipe.likes || 0)


const handleLike =async ()=>{


await fetch(`http://localhost:3000/top/${recipe._id}`, {
      method: 'PATCH',
      headers: {'content-type':'application/json'},
    });
    setLikes(prev => prev + 1)


}
    return (
        <>
   <div className="w-10/12 mx-auto mt-10 p-6 bg-white rounded shadow">
      <img src={recipe.image}  alt={recipe.title} className="w-full h-60 object-cover rounded mb-4" />
      <h2 className="text-3xl font-bold text-purple-700 mb-2">{recipe.title}</h2>
     <p className="text-lg font-semibold">Cuisine Type: {recipe.cuisineType || recipe.cuisine}</p>
      <h3 className="text-xl font-semibold mt-4">Ingredients:</h3>
      <ul className="list-disc list-inside">
         {Array.isArray(recipe.ingredients)
    ? recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)
    : recipe.ingredients?.split(',').map((item, index) => <li key={index}>{item.trim()}</li>)
  }
      </ul>
      <h3 className="text-xl font-semibold mt-4">Instruction:</h3>
      <p>{recipe.instructions || recipe.instruction}</p>
      <h3 className="text-xl font-semibold mt-4">Preparation time:
      {recipe.preparationTime || recipe.time}</h3>
      <div>
    <button className='text-3xl' onClick={handleLike}>
          likes  ({likes})
</button>
</div>
    </div>



        </>
    );
};

export default Details;