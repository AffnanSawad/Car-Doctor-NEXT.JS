import ProductCard from "@/components/HomePage/ProductCard";





const page = async() => {

   
    // Fetching Data :

    const res = await fetch("http://localhost:5000/ProvideServicesData", {

        next : {
            revalidate: 5
        }
    })
    
    const ServiceProducts = await res.json();

    console.log(ServiceProducts)


    return (
        <div>
            
            {/* Mapping Data */}
    
    <div className="grid grid-cols-3 gap-10 w-[90%] mx-auto my-10  py-10">

  {
    ServiceProducts.map( SingleProduct => <ProductCard
    
        key={SingleProduct.id}

        SingleProduct={SingleProduct}
    
    
    ></ProductCard>  )
  }


    </div>


        </div>
    );
};

export default page;