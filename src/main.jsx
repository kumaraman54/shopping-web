import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";
  import Product from './components/Product.jsx';
  import Contact from './components/Contact.jsx';
  import About from './components/About.jsx';
  import Login from './components/Login.jsx';
  import Home from './components/Home.jsx';

  const router = createBrowserRouter([
  
    {
      path:"",
      element:<App/>,
      children:[
        {
          path:"product",
          element:<Product/>
        },
        {
          path:"contact",
          element:<Contact/> 
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"home",
          element:<Home/>
        },

      ]
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
