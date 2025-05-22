import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
const Review = () => {

    const handleReview = ()=>{
alert("Thanks for Your Kind Suggestion")
    }
    return (
        <>
           <div >
            {/* <h2 className='text-4xl text-center font-bold text-purple-700'>Please Give Your Suggestion/Complain</h2> */}
<div className="text-5xl pb-10 my-4 text-center text-purple-700 font-bold">
      <Typewriter
        words={['Please Give Your Suggestion/Complain', 'Please Give Your Suggestion/Complain', 'Please Give Your Suggestion/Complain']}
        loop={5}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
  />
</div>


            <form className="fieldset text-center">
  <legend className="fieldset-legend">Sueggestion or Complain</legend>
  <textarea className="textarea w-[100%] h-40" placeholder="write please"></textarea>
  <div className="label">Optional</div>
  <button onClick={handleReview} className='btn btn-accent'>Submit</button>
</form>
            </div> 
        </>
    );
};

export default Review;