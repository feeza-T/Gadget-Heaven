const Footer = () => {
    return (
        <footer className=" flex flex-col items-center bg-white text-black p-10">
        <div className="text-center w-full flex flex-col items-center mb-6">
        <h1 className="text-xl font-bold text-black">Gadget Heaven</h1>
        <p className="text-gray-600">Loading the way in cutting-edge technology and innovation.</p>
      </div>
    <div className="footer sm:footer-horizontal bg-white text-black p-10">
    <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping and Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
    
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
    </div>
      </footer>
    );
  };
  
  export default Footer;
  