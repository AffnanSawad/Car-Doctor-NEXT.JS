import { FaTools, FaClock, FaThumbsUp } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="py-16 px-4 md:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
          <FaTools className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-xl text-black font-bold mb-2">Expert Technicians</h3>
          <p className="text-gray-600 font-bold">Our mechanics are highly trained and certified to repair all vehicle types with precision.</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
          <FaClock className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-xl text-black font-bold mb-2">Quick Service</h3>
          <p className="text-gray-600 font-bold">We value your time and aim to get you back on the road fast—without sacrificing quality.</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
          <FaThumbsUp className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-xl text-black font-bold mb-2">Trusted by Clients</h3>
          <p className="text-gray-600 font-bold">Over 500+ happy customers and counting. We believe in honest work and fair pricing.</p>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
