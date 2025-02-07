import useTitle from "../../hooks/useTitle";

import Banner from "../Banner/Banner";
import Gadgets from "../gadgets/Gadgets";


const Home = () => {
   useTitle("Gadget | Home");
    return (
        <div className="bg-white">
             
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;