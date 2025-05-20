import React, { use } from 'react';
import { AuthContext } from './Context/AuthContext';
import { useNavigate } from 'react-router';

const MyProfile = () => {
const navigate = useNavigate()
const {user,signOutUser}=use(AuthContext)
const handleSignOut = ()=>{
  signOutUser()
  .then(()=>{
    navigate("/");
    alert('Log Out successfully')
  })
}
    return (
        <>
             <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md text-center">
      <img
        src={user?.photoURL || "https://i.ibb.co/YTjW3vF/default-avatar.png"}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
      />
      <h2 className="text-2xl font-bold mb-2">My Name: {user?.displayName}</h2>
      <p className="text-gray-600 mb-4">Email: {user?.email}</p>
      <button onClick={handleSignOut}
        className="btn btn-error font-semibold"
      >
        Log Out
      </button>
    </div>
        </>
    );
};

export default MyProfile;