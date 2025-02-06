// Utility functions for managing cart and wishlist in localStorage

// ✅ Get Cart List from localStorage
const getStoredCartList = () => {
    const storedListStr = localStorage.getItem("add-list");
    if (storedListStr) {
        try {
            const storedList = JSON.parse(storedListStr);
            if (Array.isArray(storedList)) {
                return storedList.filter(id => id !== null && id !== "NaN" && id.trim() !== ""); // Remove invalid values
            }
        } catch (error) {
            console.error("Error parsing localStorage:", error);
        }
    }
    return []; // Always return an array
};

// ✅ Add to Cart List
const addToStoredCartList = (id) => {
    if (!id || typeof id !== "string" || id.trim() === "") { 
        console.error("Invalid product ID:", id);
        return;
    }

    let storedList = getStoredCartList(); 
    if (!storedList.includes(id)) {  
        storedList.push(id);
        localStorage.setItem("add-list", JSON.stringify(storedList));
        console.log("Updated localStorage:", storedList);
    } else {
        console.log(id, " already added to cart.");
    }
};

// ✅ Remove from Cart List
const removeFromStoredCartList = (id) => {
    let storedList = getStoredCartList();
    storedList = storedList.filter(item => item !== id); // Remove the item
    localStorage.setItem('add-list', JSON.stringify(storedList));
};

// ✅ Get Wishlist from localStorage
const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        try {
            let storedWishList = JSON.parse(storedWishListStr);
            if (Array.isArray(storedWishList)) {
                // ✅ Filter out null, undefined, empty strings, and non-string values
                storedWishList = storedWishList.filter(id => id && typeof id === 'string' && id.trim() !== '');
                return storedWishList;
            }
        } catch (error) {
            console.error("Error parsing wishlist from localStorage:", error);
        }
    }
    return []; // Always return an empty array if invalid
};


// ✅ Add to Wishlist
const addToStoredWishList = (id) => {
    if (!id || typeof id !== "string" || id.trim() === "") {
        console.error("Invalid product ID:", id);
        return;
    }

    let storedWishList = getStoredWishList(); 

    if (!storedWishList.includes(id)) {
        storedWishList.push(id);
        
        // ✅ Remove any `null` values before saving
        storedWishList = storedWishList.filter(item => item && typeof item === "string");

        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
        console.log("Updated wishlist in localStorage:", storedWishList);
    } else {
        console.log(id, " already added to wish list.");
    }
};


// ✅ Remove from Wishlist
const removeFromStoredWishList = (id) => {
    let storedWishList = getStoredWishList();
    storedWishList = storedWishList.filter(item => item !== id);
    localStorage.setItem('wish-list', JSON.stringify(storedWishList));
};

export { 
    addToStoredCartList, 
    addToStoredWishList, 
    getStoredCartList, 
    getStoredWishList, 
    removeFromStoredCartList,
    removeFromStoredWishList  
};
