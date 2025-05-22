import React, { use, useEffect, useState } from 'react';
import { AuthContext } from './Context/AuthContext';
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router';

const MyRecipe = () => {
  const { user } = use(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null); 
  console.log(recipes);

  useEffect(() => {
    const myRecipes = async () => {
      const res = await fetch(`http://localhost:3000/recipes?email=${user?.email}`);
      const data = await res.json();
      setRecipes(data);
    };
    myRecipes();
  }, [user?.email]);

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/top/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    console.log(data);

    if (data.deletedCount > 0) {
      setRecipes(prev => prev.filter(recipe => recipe._id.toString() !== id.toString()));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedRecipe = {
      image: form.image.value,
      title: form.title.value,
      ingredients: form.ingredients.value,
      instruction: form.instruction.value,
      cuisine: form.cuisine.value,
      time: form.time.value,
    };

    const res = await fetch(`http://localhost:3000/top/${selectedRecipe._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedRecipe)
    });

    const data = await res.json();
    if (data.modifiedCount > 0) {
      setRecipes(prev =>
        prev.map(recipe =>
          recipe._id === selectedRecipe._id ? { ...recipe, ...updatedRecipe } : recipe
        )
      );
      document.getElementById('my_modal_4').close();
    }
  };

  return (
    <>
     <section className='bg-gray-300 w-11/12 mx-auto py-5 mt-3 rounded-lg'>

     <h2 className='text-4xl font-bold text-center py-5'>My Added Recipe</h2>
       <div className='w-11/12 mt-5 mx-auto grid grid-cols-3'>
        {
          recipes.map((recipe) => (
            <div key={recipe._id} className="card bg-base-100 w-96 shadow-sm ">
              <figure>
                <img
                  
                  src={recipe.photo || "https://i.ibb.co/vCzbmLwB/hhh.jpg"}
                  alt="Recipe" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-amber-900 font-bold text-2xl">{recipe.title}</h2>
                 <p className=' text-xl'><span className='font-bold'>Cuisine Type:</span>  {recipe.cuisine}</p>

 <h3 className='text-xl' ><span className='font-bold'>Ingredients:</span>   {recipe.ingredients}</h3>
           
                <h2 className='text-xl'><span className='font-bold'>Instruction:</span>   {recipe.instruction}</h2>
               
                <p className=' text-xl'><span className='font-bold'>Preparation time</span>  (Min): {recipe.time}</p>

                <div className="card-actions justify-between mt-2">
                  <button className="badge font-bold cursor-pointer text-3xl mt-1"><AiFillLike />{recipe.likes}</button>

                  <button className="btn btn-accent"
                    onClick={() => {
                      setSelectedRecipe(recipe);
                      document.getElementById('my_modal_4').showModal();
                    }}>
                    Update
                  </button>

                  <Link>
                    <button onClick={() => handleDelete(recipe._id)} className="font-bold cursor-pointer btn btn-accent">Delete</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      {/* Update Modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form onSubmit={handleUpdate} className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Update Recipe</h2>

            <label className="block font-semibold mb-1">Image URL</label>
            <input className="input input-bordered w-full" name="image" placeholder="Image URL" defaultValue={selectedRecipe?.image} />

<label className="block font-semibold mb-1">Title</label>
            <input className="input input-bordered w-full" name="title" placeholder="Title" defaultValue={selectedRecipe?.title} />

<label className="block font-semibold mb-1">Ingredients</label>
       <textarea className="textarea textarea-bordered w-full" name="ingredients" placeholder="Ingredients" defaultValue={selectedRecipe?.ingredients}></textarea>

<label className="block font-semibold mb-1">Instruction</label>
            <textarea className="textarea textarea-bordered w-full" name="instruction" placeholder="Instructions" defaultValue={selectedRecipe?.instruction}></textarea>

<label className="block font-semibold mb-1">Cuisine</label>
            <select name="cuisine" className="select select-bordered w-full" defaultValue={selectedRecipe?.cuisine}>
              <option>Italian</option>
              <option>Mexican</option>
              <option>Indian</option>
              <option>Chinese</option>
              <option>Others</option>
            </select>

<label className="block font-semibold mb-1">Preparation Time</label>
            <input className="input input-bordered w-full" type="number" name="time" placeholder="Time (minutes)" defaultValue={selectedRecipe?.time} />

            <div className="text-center">
              <button type="submit" className="btn btn-primary w-full">Update Recipe</button>
            </div>

          </form>
          <div className="flex justify-center text-accent mt-3">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
     </section>
    </>
  );
};

export default MyRecipe;