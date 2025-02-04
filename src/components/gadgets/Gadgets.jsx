import { useEffect, useState } from "react";
import Gadget from "../gadget/Gadget";

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [filteredGadgets, setFilteredGadgets] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All Products");

    useEffect(() => {
        fetch('./gadgetsData.json')
            .then(res => res.json())
            .then(data => {
                setGadgets(data);
                setFilteredGadgets(data); // Default: show all gadgets
            });
    }, []);

    // Correct categories that match JSON data
    const categories = ["All Products", "Smartphone", "Laptop", "Smartwatch", "Power Bank", "Charger", "Accessories"];

    // Function to filter gadgets based on category
    const handleFilter = (category) => {
        setSelectedCategory(category);

        if (category === "All Products") {
            setFilteredGadgets(gadgets);
        } else {
            const filtered = gadgets.filter(gadget => gadget.category === category);
            setFilteredGadgets(filtered);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold text-center text-black m-10">
                Explore Cutting-Edge Gadgets
            </h1>
            <p className="text-black text-center mb-6">Total Products: {filteredGadgets.length}</p>

            {/* Main container: Flex for layout */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left side - Buttons */}
                <div className="lg:w-1/4 w-full flex lg:flex-col flex-wrap gap-3 lg:gap-4">
                    {categories.map(category => (
                        <button 
                            key={category}
                            onClick={() => handleFilter(category)}
                            className={`px-4 py-2 rounded ${selectedCategory === category ? "bg-purple-600 text-white" : "bg-gray-300 text-black hover:bg-purple-400"}`}>
                            {category}
                        </button>
                    ))}
                </div>

                {/* Right side - Gadgets Grid */}
                <div className="lg:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredGadgets.length > 0 ? (
                        filteredGadgets.map(gadget => (
                            <div key={gadget.product_id} className="flex">
                                <Gadget gadget={gadget} />
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500">No gadgets found for this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
