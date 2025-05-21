import React, { use } from 'react';
import { AuthContext } from './Context/AuthContext';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router';

const AddRecipe = () => {
const { user} = use(AuthContext)
const email =user?.email

const handleAdd = e => {
  e.preventDefault();
const photo = e.target.image.value
const title = e.target.title.value
const ingredients = e.target.ingredients.value
const instruction = e.target.instruction.value
const cuisine = e.target.cuisine.value
const like = e.target.like.value
const category = e.target.category.value
const time = e.target.number.value

const form = {photo,title,ingredients,instruction,cuisine,like,category,time,email}

console.log(form)
// Send data to db
fetch('http://localhost:3000/top',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(form)
})
.then(res => res.json())
.then(data =>{
  console.log('after post',data)
  Swal.fire("Successfully Added")
  Navigate("/myReci");
})

}







  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>
      
      <form onSubmit={handleAdd} className="space-y-4">
        
        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input type="text" name='image' placeholder="Enter image URL"
            className="input input-bordered w-full" />
        </div>

        
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input type="text" name='title' placeholder="Write Recipe Title"
            className="input input-bordered w-full" />
        </div>

       
        <div>
          <label className="block font-semibold mb-1">Ingredients</label>
          <textarea name='ingredients' className="textarea textarea-bordered w-full" placeholder="Write your ingredients..."></textarea>
        </div>

        
        <div>
          <label className="block font-semibold mb-1">Instructions</label>
          <input name='instruction' className="textarea textarea-bordered w-full" placeholder="Write Cooking instructions"></input>
        </div>

        
        <div>
          <label className="block font-semibold mb-1">Cuisine Type</label>
           <select name='cuisine' className="select select-bordered w-full">
            <option>Italian</option>
            <option>Mexican</option>
            <option>Indian</option>
            <option>Chinese</option>
            <option>Others</option>
          </select>
        </div>

       
        <div>
          <label className="block  font-semibold mb-1">Preparation Time (minutes)</label>
          <input type="number" name='number' className="border-2 w-full" />
        </div>

       
        <div>
          <label name='category' className="block font-semibold mb-1">Categories</label>
          <div className="flex flex-wrap gap-4">
            {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map(cat => (
              <label key={cat} className="flex items-center gap-2">
                <input type="checkbox" name='category' className="checkbox" />
                {cat}
              </label>
            ))}
          </div>
        </div>

        
        <div>
          <label className="block font-semibold mb-1">Like Count</label>
          <input type="number" name="like" value="0" readOnly className="input input-bordered w-full bg-gray-100" />
        </div>

        
        <div className="text-center pt-4">
          <button className="btn btn-primary w-full">Add Recipe</button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
