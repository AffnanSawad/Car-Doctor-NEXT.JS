import Link from "next/link";
import { servicesData } from "../../lib/services";
import ServiceCard from "../Caed/ServiceCard";

const Services = () => {
  console.log(servicesData);

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-orange-600 text-2xl sm:text-3xl font-bold">OUR SERVICES</h1>
      </div>

      {/* Grid of service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {
          servicesData.slice(0, 3).map(service => (
            <ServiceCard key={service._id} services={service} />
          ))
        }
      </div>

      {/* Centered button below the grid */}
      <div className="flex justify-center mt-10">
        <Link href="/services">
          <button className="btn btn-error text-white">See All Services!</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
