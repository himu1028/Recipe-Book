import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './Context/AuthContext';

const Login = () => {
const { SignInUser,user} = use(AuthContext)
console.log(user)

const handleLogIn= e =>{
e.preventDefault();
const email = e.target.email.value;
const password = e.target.password.value;

const profile2 = {email,password}
console.log(profile2)

// Create user
SignInUser(email,password)
.then(result =>{
  console.log(result)
})
.catch(error =>{
  console.log(error)
})
}








    return (
        <>
       
       <h1 className='text-4xl bg-base-200 text-center mt-16 font-bold text-blue-500 w-11/12 mx-auto p-5'>Please Log In</h1>
            <div className="hero bg-base-200 w-11/12 mx-auto mb-10 ">
 
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogIn} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <div><h2>New User?
            <Link to="/register" className="text-blue-600 hover:underline">
            Please Register
          </Link>
            </h2></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;