import About from "./About";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import CustomerReviews from "./CustomerReviews";
import FeaturedServices from "./FeaturedServices";
import OurPromises from "./OurPromises";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";


const HomePage = () => {
    return (
        <div className="max-w-full mx-auto">
              
     <Banner/>
     <About/>
     <Services/> 
     <ContactUs/>
     <WhyChooseUs/>
     <FeaturedServices/>
     <CustomerReviews/>
     <OurPromises/>
    
     


        </div>
    );
};

export default HomePage;