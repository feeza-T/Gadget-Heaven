const getStoredCartList = ()=>{
    const storedListStr = localStorage.getItem('add-list');
    if(storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }

}

const addToStoredCartList = (id) =>{
    const storedList = getStoredCartList();
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('add-list',storedListStr);
}

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


export {addToStoredCartList , addToStoredWishList , getStoredCartList , getStoredWishList,  removeFromStoredCartList}