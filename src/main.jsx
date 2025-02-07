import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; // ✅ Import HelmetProvider
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
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      { path: "/", element: <Home /> },
      { 
        path: "gadgets/:product_id",
        element: <GadgetDetail />,
        loader: () => fetch('/gadgetsData.json')
      },
      { path: "aboutus", element: <AboutUs /> },
      { 
        path: "dashboard",
        element: <Dashboard />,
        loader: () => fetch('/gadgetsData.json')
      },
      { path: "statistics", element: <Statistics /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* ✅ Wrap everything with HelmetProvider */}
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
