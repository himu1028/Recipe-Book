import React from 'react';

const Review = () => {

    const handleReview = ()=>{
alert("Thanks for Your Kind Suggestion")
    }
    return (
        <>
           <div >
            <h2 className='text-4xl text-center font-bold text-purple-700'>Please Give Your Suggestion/Complain</h2>
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