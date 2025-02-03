import { useEffect, useState } from "react";


const Gadgets = () => {
    const [gadgets,setGadgets] = useState([]);

    useEffect(()=>{
        fetch('./gadgetsData.json')
        .then(res=> res.json())
        .then(data=> setGadgets(data))
    },[])

    return (
        <div>
                <h1 className="text-4xl font-bold text-center text-black m-10">Explore Cutting-Edge Gadgets</h1>
                <p className="text-black">{gadgets.length}</p>
            <div>
                <div>
                    <button>All Products</button>
                    <button>Laptops</button>
                    <button>Phones</button>
                    <button>Accessories</button>
                    <button>Smart Watches</button>
                    <button>Mac Books</button>
                    <button>IPhone</button>
                </div>
                <div className=" flex grid-cols-3">
                <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                </div>

            </div>
            
        </div>
    );
};

export default Gadgets;