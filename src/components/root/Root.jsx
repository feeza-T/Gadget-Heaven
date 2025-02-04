import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";


const Root = () => {
    return (
<<<<<<< HEAD
        <div>
=======
        <div className="max-w-6xl mx-auto">
>>>>>>> recovered-changes
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;