import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { useState, useEffect } from "react";
import { getStoredCartList, getStoredWishList } from "../utility/addToCart";

const Root = () => {
  const location = useLocation();
  
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedCartList = getStoredCartList() || [];
    const storedWishList = getStoredWishList() || [];
    
    setCartList(storedCartList);
    setWishList(storedWishList);
  }, []);

  const isGadgetDetailPage = location.pathname.startsWith("/gadgets/");

  return (
    <div>
      <div className={`${isGadgetDetailPage ? "w-full" : "max-w-6xl mx-auto "}`}>
        <Navbar cartList={cartList} wishList={wishList} />
      </div>

      {/* Banner Section: Only on Gadget Detail Page */}
      {isGadgetDetailPage && (
        <div className="bg-purple-600 text-white text-center py-10 pb-50 relative">
          <h1 className="text-4xl font-bold">Product Details</h1>
          <p className="text-lg mt-2 max-w-3xl mx-auto">
            Explore the latest gadgets that will take your experience to the next level.
            From smart devices to the coolest accessories, we have it all!
          </p>
        </div>
      )}

      {/* Keep Outlet and Footer Centered */}
      <div className="max-w-6xl mx-auto bg-white">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
