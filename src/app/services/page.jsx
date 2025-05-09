import ProductCard from "@/components/HomePage/ProductCard";



const  page = async() => {

   
    // Fetching Data :

    const res = await fetch("http://localhost:5004/ProvideServicesData", {

        next : {
            revalidate: 5
        }
    })
    
    const ServiceProducts = await res.json();

    console.log(ServiceProducts)


    return (
     <div className="px-4 py-10">
 
 {/*  Mapping Data */}
 
 
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
   
   
    {
      ServiceProducts.map(SingleProduct => (
        <ProductCard
          key={SingleProduct.id}
          SingleProduct={SingleProduct}
        />
      ))
    }
  </div>
</div>
    );
};

export default  page;