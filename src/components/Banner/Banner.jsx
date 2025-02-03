import bannerimg from "../../assets/banner.jpg";

const Banner = () => {
    return (
        <div className="relative flex flex-col items-center text-center">
          
            {/* Text Section */}
            <div className="w-full flex flex-col items-center justify-center py-12 px-6
                bg-[#9538E2] rounded-b-[32px] absolute pb-60">
                <h2 className="text-white text-3xl font-bold mb-4">
                    Upgrade Your Tech Accessories with <br></br> Gadget Heaven Accessories
                </h2>
                <p className="text-white text-lg max-w-2xl">
                    Explore the latest gadgets that will take your experience to the next level. 
                    From smart devices to the coolest accessories, we have it all!
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-[#9538E2] font-semibold 
                    rounded-lg shadow-md hover:bg-gray-200">
                    Shop Now
                </button>
            </div>
              {/* Image Section */}
              <div className="relative mt-70 w-full flex justify-center">
              <img 
    src={bannerimg} 
    alt="Banner" 
    className="w-[80%] h-[450px] max-w-[1062px] object-cover mt-10 
        border-[8px] rounded-[20px] shadow-lg" 
    style={{ borderColor: "rgba(255, 255, 255, 0.4)" }} 
/>

            </div>

        </div>
    );
};

export default Banner;
