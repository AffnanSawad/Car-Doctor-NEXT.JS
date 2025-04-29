const OurPromises = () => {
    return (
      <div className="bg-black text-white py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-orange-600 font-bold mb-4">What Makes Us Stand Out</h2>
          <p className="font-bold text-gray-300 max-w-xl mx-auto">
            At Car Fusion, we combine technology, experience, and dedication to deliver top-tier car repair solutions with integrity and precision.
          </p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition">
            <h3 className="text-xl text-orange-600 font-bold mb-2">Fast Turnaround</h3>
            <p className="text-white font-bold">We respect your time. Most repairs completed in a day or less.</p>
          </div>
  
          <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition">
            <h3 className="text-xl text-orange-600 font-bold mb-2">Transparent Pricing</h3>
            <p className="text-white  font-bold">No hidden costs. Honest estimates and fair service.</p>
          </div>
  
          <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition">
            <h3 className="text-xl text-orange-600 font-bold mb-2">Certified Technicians</h3>
            <p className="text-white font-bold">Our experts are trained, certified, and passionate about cars.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default OurPromises;
  