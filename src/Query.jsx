import React from 'react';

const Query = () => {
    return (<>

<h2 className='text-5xl text-purple-700 font-bold pb-10 text-center'>Know Your Querry About Support</h2>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">How do I create an account?</div>
  <div className="collapse-content text-sm">Click the "Register" button in the top right corner and fill up the form.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">How I Added a new Recipe?</div>
  <div className="collapse-content text-sm">Go to "Add Recipe" and fill the form  to add a recipe.</div>
</div>
</>
    );
};

export default Query;