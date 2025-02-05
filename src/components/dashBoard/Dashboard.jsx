import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredCartList} from "../utility/addToCart";
import { removeFromStoredCartList } from "../utility/addToCart";


const Dashboard = () => {
  const [addList, setAddList] = useState([]);
  const allCarts = useLoaderData();

  useEffect(() => {
    if (!allCarts || allCarts.length === 0) return;

    const storedCartList = (getStoredCartList() || []).filter(id => id !== null);
    console.log("Stored Cart List (Filtered):", storedCartList);

    const cartList = allCarts.filter(cart => storedCartList.includes(cart.product_id));

    console.log("Filtered Cart List:", cartList);
    setAddList(cartList);
  }, [allCarts]);

  // Function to remove item from cart
  const handleRemove = (product_id) => {
    removeFromStoredCartList(product_id);
    setAddList(addList.filter(item => item.product_id !== product_id)); // Update UI
  };

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Cart</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-purple-600 font-bold text-xl text-center mb-4">Your Cart Items: {addList.length}</h2>

          {addList.length > 0 ? (
            <div className="space-y-2">  
              {addList.map((gadget) => (
                <div key={gadget.product_id} className="flex items-center justify-between bg-white shadow-md rounded-lg p-2 border">
                  
                 <div className="flex gap-5">
                 <img className="w-20 h-20 object-contain" src={gadget.product_image} alt={gadget.product_title} />
                  <div className="mt-3">
                    <h3 className="font-semibold text-gray-800">{gadget.product_title}</h3>
                    <p className="text-purple-600 font-bold">${gadget.price}</p>
                  </div>
                 </div>
                  {/* Remove Button */}
                  <button 
                    onClick={() => handleRemove(gadget.product_id)} 
                    className="text-red-600 hover:bg-red-200 p-1 rounded-full"
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          )}
        </TabPanel>

        <TabPanel>
          <h2>Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
