import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";


const ErrorPage = () => {
    return (
      
        <div>
            <Navbar></Navbar>
            <h1 className="text-center text-8xl bg-purple-600 p-20">Page Not Found!!</h1>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;