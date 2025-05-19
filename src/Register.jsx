import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './Context/AuthContext';

const Register = () => {

const { createUser} = use(AuthContext)


const handleRegister= e =>{
e.preventDefault();
const name = e.target.name.value;
const email = e.target.email.value;
const photo = e.target.photo.value;
const password = e.target.password.value;

const profile = {name,email,photo,password}
console.log(profile)

// Create user
createUser(email,password)
.then(result =>{
  console.log(result)
})
.catch(error =>{
  console.log(error)
})
}







    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Please Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>

          
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="photo">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Link to your photo"
            />
          </div>

          
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Password"
            />
          </div>



  <button  
  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >     Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already registered?
          <Link to="/login" className="text-blue-600 hover:underline">
            Please login
          </Link>
        </p>
      </div>
    </div>
        </>
    );
};

export default Register;