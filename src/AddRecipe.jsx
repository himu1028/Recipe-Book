import React from 'react';

const AddRecipe = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>
      
      <form className="space-y-4">
        {/* Image URL */}
        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input type="text" placeholder="Enter image URL"
            className="input input-bordered w-full" />
        </div>

        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input type="text" placeholder="Write Recipe Title"
            className="input input-bordered w-full" />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1">Ingredients</label>
          <textarea className="textarea textarea-bordered w-full" placeholder="Write your ingredients..."></textarea>
        </div>

        {/* Instructions */}
        <div>
          <label className="block font-semibold mb-1">Instructions</label>
          <textarea className="textarea textarea-bordered w-full" placeholder="Write Cooking instructions"></textarea>
        </div>

        {/* Cuisine Type Dropdown */}
        <div>
          <label className="block font-semibold mb-1">Cuisine Type</label>
          <select className="select select-bordered w-full">
            <option>Italian</option>
            <option>Mexican</option>
            <option>Indian</option>
            <option>Chinese</option>
            <option>Others</option>
          </select>
        </div>

        {/* Preparation Time */}
        <div>
          <label className="block font-semibold mb-1">Preparation Time (minutes)</label>
          <input type="number" className=" w-full" />
        </div>

        {/* Categories Checkboxes */}
        <div>
          <label className="block font-semibold mb-1">Categories</label>
          <div className="flex flex-wrap gap-4">
            {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map(cat => (
              <label key={cat} className="flex items-center gap-2">
                <input type="checkbox" className="checkbox" />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Like Count */}
        <div>
          <label className="block font-semibold mb-1">Like Count</label>
          <input type="number" value="0" readOnly className="input input-bordered w-full bg-gray-100" />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button className="btn btn-primary w-full">Add Recipe</button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
