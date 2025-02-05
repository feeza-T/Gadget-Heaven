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


const removeFromStoredCartList = (id) => {
    let storedList = getStoredCartList();
    storedList = storedList.filter(item => item !== id); // Remove the item
    localStorage.setItem('add-list', JSON.stringify(storedList));
};

const getStoredWishList = ()=>{
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [];
    }

}

const addToStoredWishList = (id) =>{
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)) {
        console.log(id , ' already added to wish list.')
    }
    else{
   storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem('wish-list',storedWishListStr);
    }
    
}
const removeFromStoredWishList = (id) => {
    let storedWishList = getStoredWishList();
    storedWishList = storedWishList.filter(item => item !== id); // Remove the item
    localStorage.setItem('wish-list', JSON.stringify(storedWishList));
};

export { 
    addToStoredCartList, 
    addToStoredWishList, 
    getStoredCartList, 
    getStoredWishList, 
    removeFromStoredCartList,
    removeFromStoredWishList  // Export the new function
};
