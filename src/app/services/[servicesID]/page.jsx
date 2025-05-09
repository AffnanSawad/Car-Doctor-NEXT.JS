import Link from "next/link";



const ServiceDetailPage = async ({ params }) => {


  // Dynamically Details Page Data :
  
   console.log(await params)
     
    const {servicesID} = await params ;
  
    const res = await fetch(`http://localhost:5004/ProvideServicesData/${servicesID}`);
  
    const singleproductDetails = await res.json()
  
   console.log(singleproductDetails)
     
  
    return (

    // Dynamic  Details Page Design



      <div className="max-w-5xl mt-10 mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 shadow-xl border p-6 rounded-xl">
        <img
          src={singleproductDetails.img}
          alt={singleproductDetails.title}
          className="w-full h-80 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-4xl text-white font-bold  mb-4">
            {singleproductDetails.title}
          </h1>
          <p className="text-lg text-white mb-6">
            {singleproductDetails.description}
          </p>
          <p className="text-2xl text-blue-600 font-semibold mb-4">
            Price: ${singleproductDetails.price}
          </p>
          <Link href="/services">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Back to Services
            </button>
          </Link>
        </div>
      </div>
    </div>
    );
  };


  export default ServiceDetailPage;