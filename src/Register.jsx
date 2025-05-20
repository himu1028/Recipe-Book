import React, { use, useState } from 'react';
// import Link from 'react-router';
import { Link, useNavigate } from "react-router";
import { AuthContext } from './Context/AuthContext';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

const Register = () => {

const { createUser} = use(AuthContext)
const navigate = useNavigate()
const [error,setError]=useState('')


const handleRegister = (e) => {
  e.preventDefault();
  setError(""); // Clear previous error

  const name = e.target.name.value;
  const email = e.target.email.value;
  const photo = e.target.photo.value;
  const password = e.target.password.value;

  // Password Validations
  if (!/[A-Z]/.test(password)) {
    setError("Password must contain at least one uppercase letter.");
    return;
  }

  if (!/[a-z]/.test(password)) {
    setError("Password must contain at least one lowercase letter.");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters long.");
    return;
  }

  const profile = { name, email, photo, password };
  console.log(profile);

  // Create user
  createUser(email, password)
.then((userCredential)=>{
  const user = userCredential.user;

  updateProfile(user,{
    displayName:name,
    photoURL:photo,
  })
})


    .then((result) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You Have Successfully Registered",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      }).then(() => {
        navigate("/");
      });
      console.log(result);
    })
    .catch((error) => {
       Swal.fire("please try again !");
      console.log(error);
    });
};






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

{
  error && (<p className='text-red-500 text-sm mt-1'> {error}</p>)
}

  <button  
  className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded-lg hover:bg-blue-700 transition"
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