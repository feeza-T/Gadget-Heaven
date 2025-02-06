import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredCartList, addToStoredCartList, removeFromStoredCartList } from "../utility/addToCart";
import { getStoredWishList, removeFromStoredWishList } from "../utility/addToCart";

const Dashboard = () => {
  const [addList, setAddList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [isSorted, setIsSorted] = useState(false); 
  const allCarts = useLoaderData();

  useEffect(() => {
    const storedCartList = getStoredCartList() || [];
    const storedWishList = getStoredWishList() || [];

    if (!allCarts || allCarts.length === 0) return;

    const cartList = allCarts.filter(cart => storedCartList.includes(cart.product_id));
    const wishListItems = allCarts.filter(cart => storedWishList.includes(cart.product_id));

    setAddList(cartList);
    setWishList(wishListItems);
    setTotalPrice(cartList.reduce((acc, item) => acc + item.price, 0));
  }, [allCarts]);

  // Remove item from cart
  const handleRemoveCart = (product_id) => {
    removeFromStoredCartList(product_id);
    const updatedCart = addList.filter(item => item.product_id !== product_id);
    setAddList(updatedCart);
    setTotalPrice(updatedCart.reduce((acc, item) => acc + item.price, 0));
  };

  // Add item to cart from wishlist
  const handleAddToCartFromWishList = (product_id) => {
    addToStoredCartList(product_id);
    removeFromStoredWishList(product_id);
    const addedItem = wishList.find(item => item.product_id === product_id);
    setWishList(wishList.filter(item => item.product_id !== product_id));
    if (addedItem) {
      const updatedCart = [...addList, addedItem];
      setAddList(updatedCart);
      setTotalPrice(updatedCart.reduce((acc, item) => acc + item.price, 0));
    }
  };

  const handleSortByPrice = () => {
    const sortedList = [...addList].sort((a, b) => b.price - a.price);
    setAddList(sortedList);
    setIsSorted(true);
  };
  const handleCloseModal = () => {
    // Reset cart and wishlist
    setAddList([]);
    setWishList([]);
    setTotalPrice(0);
  
    // Clear local storage
    localStorage.removeItem('cartList'); 
    localStorage.removeItem('wishList');
  
    // Update state to reflect in navbar
    document.getElementById('my_modal_3').close();
  };
  

  return (
    <div>
      <div className="bg-purple-600 text-white text-center py-10 pb-30">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-2 text-lg">
          Explore the latest gadgets that will take your experience to the next level.
          From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Tabs Section */}
      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <TabList className="flex justify-center gap-5 -mt-20 mb-20">
          <Tab
            className={`px-6 py-2 rounded-lg font-bold cursor-pointer ${
              activeTab === 0 ? "bg-purple-600 text-white" : "bg-white text-purple-600 border border-purple-600"
            }`}
          >
            Cart
          </Tab>
          <Tab
            className={`px-6 py-2 rounded-lg font-bold cursor-pointer ${
              activeTab === 1 ? "bg-purple-600 text-white" : "bg-white text-purple-600 border border-purple-600"
            }`}
          >
            Wishlist
          </Tab>
        </TabList>

        {/* Cart Panel */}
        <TabPanel>
          <div className="flex justify-center items-center my-5 gap-10">
            <h2 className="text-black text-xl text-center mb-4">Your Cart Items: {addList.length}</h2>
            <div className="rounded-lg">
              <button className="btn bg-white p-3 text-black">Total Price: ${totalPrice}</button>
            </div>
            <button 
              className="btn bg-white text-black" 
              onClick={handleSortByPrice}
            >
              Sort By Price
            </button>
           {/* You can open the modal using document.getElementById('ID').showModal() method */}
           <button 
  className="btn bg-purple-600 border-none" 
  onClick={() => document.getElementById('my_modal_3').showModal()}
>
  Purchase
</button>

<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-white text-black">
    <button 
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
      onClick={() => handleCloseModal()}
    >
      ✕
    </button>
    <div className="text-center">
      <h3 className="font-bold text-lg">Payment Successfully</h3>
      <p className="py-4">Thanks for purchasing.</p>
      <p>Total: ${totalPrice}</p>
    </div>
  </div>
</dialog>

          </div>
          
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
                  <button
                    onClick={() => handleRemoveCart(gadget.product_id)}
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

        {/* Wishlist Panel */}
        <TabPanel>
          <h2 className="text-purple-600 font-bold text-xl text-center mb-4">Your Wishlist Items: {wishList.length}</h2>
          {wishList.length > 0 ? (
            <div className="space-y-2">
              {wishList.map((gadget) => (
                <div key={gadget.product_id} className="flex items-center justify-between bg-white shadow-md rounded-lg p-2 border">
                  <div className="flex gap-5">
                    <img className="w-20 h-20 object-contain" src={gadget.product_image} alt={gadget.product_title} />
                    <div className="mt-3">
                      <h3 className="font-semibold text-gray-800">{gadget.product_title}</h3>
                      <p className="text-purple-600 font-bold">${gadget.price}</p>
                    </div>
                  </div>
                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCartFromWishList(gadget.product_id)}
                    className="bg-green-600 text-white px-3 py-1 rounded-lg font-bold hover:bg-green-700"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">Your wishlist is empty.</p>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
