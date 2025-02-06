import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import ErrorPage from './components/errorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/dashBoard/Dashboard';
import Statistics from './components/statistics/Statistics';
import GadgetDetail from './components/gadgetDetails/GadgetDetail';
import AboutUs from './components/aboutus/AboutUs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"gadgets/:product_id",
        element:<GadgetDetail></GadgetDetail>,
        loader:()=> fetch('/gadgetsData.json')
      },
      {
         path:'aboutus',
         element:<AboutUs></AboutUs>
      },
   
      {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        loader: ()=> fetch('/gadgetsData.json')
      },
      {
        path:"statistics",
        element:<Statistics></Statistics>
      }
    ]


  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
