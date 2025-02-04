import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
<<<<<<< HEAD
=======
import ErrorPage from './components/errorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/dashBoard/Dashboard';
import Statistics from './components/statistics/Statistics';
>>>>>>> recovered-changes

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
<<<<<<< HEAD
    
=======
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"dashboard",
        element:<Dashboard></Dashboard>
      },
      {
        path:"statistics",
        element:<Statistics></Statistics>
      }
    ]

>>>>>>> recovered-changes
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
