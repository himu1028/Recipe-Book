import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from './Context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
const { SignInUser,user,googleSignIn} = use(AuthContext)
console.log(user)
const navigate = useNavigate()

const handleGoogle = () =>{
  googleSignIn()
  .then(result =>{
  console.log(result)
   navigate("/");
})
.catch(error =>{
  console.log(error)
})
}



const handleLogIn= e =>{
e.preventDefault();
const email = e.target.email.value;
const password = e.target.password.value;

const profile2 = {email,password}
console.log(profile2)



// Create user
SignInUser(email,password)
.then(result =>{
  Swal.fire("You Have Successfully Log In !");
  navigate("/");
    
  console.log(result)
})
.catch(error =>{
  Swal.fire("Email or Password is incorrrect !");
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
          <div>
           
          </div>
        </form>

        <p className='text-gray-600 text-xs text-center' >Or</p>
         <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;