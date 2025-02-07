

const AboutUs = () => {
    return (

      <div>
      
        {/* Banner Section */}
        <div className="bg-purple-600 text-white text-center py-20">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">Learn more about our mission, values, and the team behind the website!</p>
        </div>
  
        {/* Cards Section */}
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-black">Our Mission</h3>
            <p className="mt-4 text-gray-700">
              Our mission is to provide the best gadgets and tech accessories that enhance your experience and make your life easier.
            </p>
          </div>
  
          {/* Values Card */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-black">Our Values</h3>
            <p className="mt-4 text-gray-700">
              We value innovation, customer satisfaction, and sustainability, aiming to provide top-notch products that are eco-friendly.
            </p>
          </div>
  
          {/* Team Card */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-black">Meet the Team</h3>
            <p className="mt-4 text-gray-700">
              We are a passionate team of tech enthusiasts who strive to deliver high-quality products and exceptional customer service.
            </p>
          </div>
        </div>
  
        {/* Contact Form Section */}
        <div className="bg-gray-300 py-12">
          <div className="container  mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center text-purple-600 mb-6">Contact Us</h2>
            <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full text-black p-3 border border-gray-300 rounded-lg"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  className="w-full text-black p-3 border border-gray-300 rounded-lg"
                  placeholder="Your Email"
                  required
                />
              </div>
              <textarea
                className="w-full text-black p-3 border border-gray-300 rounded-lg mt-6"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full mt-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  