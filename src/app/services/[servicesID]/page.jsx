


const ServiceDetailPage = async ({ params }) => {
  
    console.log(await params)
     
    const {servicesID} = await params ;
  
    const res = await fetch(`http://localhost:5000/ProvideServicesData/${servicesID}`);
  
    const singleproduct = await res.json()
  
   
     
  
    return (
     <div>
  
  
  
     </div>
    );
  };


  export default ServiceDetailPage;