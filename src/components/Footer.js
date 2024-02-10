const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Oyo Clone</h1>
          <p className="text-sm">Your tagline goes here</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="text-gray-300 hover:text-white">
            Terms
          </a>
          <a href="/guest-policy" className="text-gray-300 hover:text-white">
            Guest Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
