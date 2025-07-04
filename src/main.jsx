import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  
  RouterProvider,
} from "react-router";
import Root from './Root.jsx';
import Home from './Home.jsx';
import Error from './Error.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import MyProfile from './MyProfile.jsx';
import AddRecipe from './AddRecipe.jsx';
import AllRecipe from './AllRecipe.jsx';
import Details from './Details.jsx';
import MyRecipe from './MyRecipe.jsx';
import PrivateRout from './Routes/PrivateRout.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true,
     Component: Home},

      { path: "*",
      Component: Error },

      { path: "/login",
      Component: Login },

      { path: "/register",
      Component: Register },

      { path: "/profile",
      Component: MyProfile },

      { path: "/add",
      
      element:<PrivateRout><AddRecipe></AddRecipe></PrivateRout>
    },

      { path: "/myReci",
      
       element:<PrivateRout><MyRecipe></MyRecipe></PrivateRout>
     },

      { path: "/all",
      Component: AllRecipe ,
      loader: ()=> fetch('http://localhost:3000/tops')
    },

      { path: "/top/:id",
      Component: Details,
      loader: ({ params }) => fetch(`http://localhost:3000/top/${params.id}`)

    },

      

    ]}])








createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
