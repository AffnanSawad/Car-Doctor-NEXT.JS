import Image from "next/image";
import { FaOilCan, FaCarCrash, FaBatteryFull } from "react-icons/fa";

const FeaturedServices = () => {
  return (
    <div className="py-16 px-4 md:px-20 bg-black text-center">
      <h2 className="text-3xl font-bold text-white mb-10">Meet Our Experts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
          <Image
            src="/assets/images/team/1.jpg"
            alt="John"
            width={400}
            height={300}
            className="mx-auto rounded-full mb-4"
          />
          <h3 className="text-2xl font-bold mb-1">John Hossain</h3>
          <p className="font-bold text-red-600">Senior Mechanic</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
          <Image
            src="/assets/images/team/2.jpg"
            alt="Nina"
            width={400}
            height={300}
            className="mx-auto rounded-full mb-4"
          />
          <h3 className="text-2xl font-bold mb-1">Nina Karim</h3>
          <p className="font-bold text-red-600">Electrical Specialist</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
          <Image
            src="/assets/images/team/3.jpg"
            alt="Rahim"
            width={400}
            height={300}
            className="mx-auto rounded-full mb-4"
          />
          <h3 className="text-2xl font-bold mb-1">Rahim Uddin</h3>
          <p className="font-bold text-red-600">Body Repair Expert</p>
        </div>

      </div>
    </div>
  );
};

export default FeaturedServices;
