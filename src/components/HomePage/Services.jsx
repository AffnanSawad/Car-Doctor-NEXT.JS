
import {services, servicesData} from "../../lib/services"
import ServiceCard from "../Caed/ServiceCard";

const Services = () => {

    console.log(servicesData)
    return (
        <div className="bg-white">
        
        <div className="flex justify-center items-center py-4">
  <h1 className="text-orange-600 text-3xl font-bold text-center">OUR SERVICES</h1>
</div>

     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 space-x-10 bg-white">

     {
            servicesData.map( services => (

               
                    <ServiceCard key={services._id} services={services}></ServiceCard>
                
            ))
        }

     </div>




        </div>
    );
};

export default Services;