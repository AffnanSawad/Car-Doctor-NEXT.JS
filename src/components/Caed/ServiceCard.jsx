import Image from "next/image";
import Link from "next/link";


const ServiceCard = ({services}) => {

    const {img , title ,price} = services || {}
    return (
        <div className="card  w-96 shadow-sm bg-white">
  <figure className="px-10 pt-10">
   
    <Image alt="notfound"  src={img} width={400} height={250}  ></Image>


  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-bold text-black"> {title} </h2>
   
   <p className="text-black font-semibold"> <span className="font-2xl">Price :</span>  $ {price} </p>
    <div className="card-actions">
    
   
    
   </div>
  </div>
</div>
    );
};

export default ServiceCard;