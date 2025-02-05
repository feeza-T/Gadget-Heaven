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
export {addToStoredCartList}