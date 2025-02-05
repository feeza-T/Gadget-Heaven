import { useLoaderData, useParams } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";

const GadgetDetail = () => {
    const { product_id } = useParams();
    const data = useLoaderData();

    const gadget = data.find(gadget => String(gadget.product_id) === product_id);

    if (!gadget) {
        return <div className="text-center text-red-500">Gadget not found!</div>;
    }

    const { product_image, product_title, price, availability, description, Specification, rating } = gadget;

    return (
        <div className="hero bg-white min-h-screen p-6 ">
            <div className="hero-content flex-col lg:flex-row gap-10">
                
                {/* Left: Product Image */}
                <img src={product_image} className="max-w-sm rounded-lg shadow-2xl" alt={product_title} />

                {/* Right: Product Details */}
                <div className="max-w-lg">
                    <h1 className="text-4xl font-bold text-black">{product_title}</h1>
                    <p className="text-2xl font-semibold text-[#9538E2] mt-2">${price.toFixed(2)}</p>
                    <p className={`mt-2 font-medium ${availability ? "text-green-600" : "text-red-500"}`}>
                        {availability ? "In Stock ✅" : "Out of Stock ❌"}
                    </p>

                    {/* Description */}
                    <p className="py-4 text-gray-700">{description}</p>

                    {/* Specifications List */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-black">Specifications:</h3>
                        <ol className="list-decimal pl-6 text-gray-800">
                            {Specification.map((spec, index) => (
                                <li key={index} className="mt-1">{spec}</li>
                            ))}
                        </ol>
                    </div>

                    {/* Rating with Stars */}
                    <div className="mt-4 flex items-center">
                        <span className="text-lg font-semibold text-black">Rating:</span>
                        <span className="ml-2 text-yellow-500 flex items-center">
                            {[...Array(Math.floor(rating))].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                            {rating % 1 !== 0 && <FaStar className="half-star" />}
                        </span>
                        <span className="ml-2 text-gray-700">({rating.toFixed(1)})</span>
                    </div>

                    {/* Add to Cart and Wishlist Buttons */}
                    <div className="mt-6 flex gap-4">
                        <button className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 transition">
                            <FaShoppingCart /> Add to Cart
                        </button>
                        <button className="flex items-center gap-2 text-purple-500 border border-purple-500 px-5 py-2 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition">
                            <FaHeart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetail;
