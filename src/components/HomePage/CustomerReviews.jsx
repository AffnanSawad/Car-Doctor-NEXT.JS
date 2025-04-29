const CustomerReviews = () => {
    return (
      <div className="bg-white py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="text-gray-600 mb-4 font-bold">"Excellent service, fair pricing, and super quick turnaround!"</p>
            <h4 className="font-bold text-red-500">— Ali Hossain</h4>
          </div>
  
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="text-gray-600 mb-4 font-bold">"The mechanics explained everything clearly. Highly recommend."</p>
            <h4 className="font-bold text-red-500">— Farzana Akter</h4>
          </div>
  
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="text-gray-600 mb-4 font-bold">"Their team fixed an issue other shops couldn’t. 10/10!"</p>
            <h4 className="font-bold text-red-500">— Rakib Hasan</h4>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default CustomerReviews;
  