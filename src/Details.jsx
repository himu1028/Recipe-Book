import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
 const recipe = useLoaderData()
  console.log(recipe)

    return (
        <>
   <div className="w-10/12 mx-auto mt-10 p-6 bg-white rounded shadow">
      <img src={recipe.image}  alt={recipe.title} className="w-full h-60 object-cover rounded mb-4" />
      <h2 className="text-3xl font-bold text-purple-700 mb-2">{recipe.title}</h2>
      <p className="text-lg font-semibold">Cuisine Type: {recipe.cuisineType}</p>
      <h3 className="text-xl font-semibold mt-4">Ingredients:</h3>
      <ul className="list-disc list-inside">
        {recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <h3 className="text-xl font-semibold mt-4">Instructions:</h3>
      <p>{recipe.instructions}</p>
      <div>
    Like it
</div>
    </div>



        </>
    );
};

export default Details;