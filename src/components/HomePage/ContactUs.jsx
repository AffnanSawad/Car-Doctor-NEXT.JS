import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-white pt-15">

<div className="bg-black text-white w-full py-10 px-4 md:px-20 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        {/* Phone */}
        <div className="space-y-2">
          <FaPhoneAlt className="mx-auto text-3xl text-red-500" />
          <h3 className="text-xl font-semibold">Call Us</h3>
          <p className="text-gray-300">+880 1234 567890</p>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <FaEnvelope className="mx-auto text-3xl text-red-500" />
          <h3 className="text-xl font-semibold">Email Us</h3>
          <p className="text-gray-300">info@cardoctor.com</p>
        </div>

        {/* Address */}
        <div className="space-y-2">
          <FaMapMarkerAlt className="mx-auto text-3xl text-red-500" />
          <h3 className="text-xl font-semibold">Visit Us</h3>
          <p className="text-gray-300">123 Car Street, Chittagong, Bangladesh</p>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
