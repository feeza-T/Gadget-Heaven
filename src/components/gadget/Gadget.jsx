import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
    const { product_title, product_image, price, product_id } = gadget;

    return (
        <Link to={`gadgets/${product_id}`}>
            <div className="w-60 h-96  "> 
                <div className="bg-white shadow-md rounded-lg p-4 h-full flex flex-col justify-between">
                    <figure className="bg-purple-200 py-4 rounded-lg flex justify-center">
                        <img className="h-32 w-full object-contain" src={product_image} alt={product_title} />
                    </figure>
                    <div className="mt-4 flex flex-col flex-grow">
                        <h2 className="text-lg font-semibold text-gray-900">{product_title}</h2>
                        <p className="text-[#9538E2] font-bold mt-1">${price}</p>
                        <div className="flex justify-end mt-auto">
                            <button className="px-4 py-2 text-[#9538E2] font-bold border hover:bg-purple-600 hover:text-white rounded-md transition">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Gadget;
