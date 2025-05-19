import React from 'react';

const Login = () => {
    return (
        <>
       <h1 className='text-4xl bg-base-200 text-center mt-16 font-bold text-blue-500 w-11/12 mx-auto p-5'>Please Log In</h1>
            <div className="hero bg-base-200 w-11/12 mx-auto mb-10 ">
 
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;