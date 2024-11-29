import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Corporate from './Pages/Corporate';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path:'corporate',
    element: <Corporate></Corporate>,
  },
  {
    path:'blogs',
    element: <Blogs></Blogs>,
  },
  {
    path: 'contact',
    element: <Contact></Contact>,
  },
  {
    path: 'products',
    element: <Products></Products>,
  }
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
