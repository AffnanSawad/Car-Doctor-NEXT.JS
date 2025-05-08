import Link from 'next/link';
import React from 'react';




const ProductCard = ({SingleProduct}) => {
    return (
        
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300 ease-in-out">
              <img className="w-full h-48 object-cover" src={SingleProduct.img} alt={SingleProduct.title} />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{SingleProduct.title}</h2>
                <p className="text-lg text-green-700 font-semibold mt-2">$Price : {SingleProduct.price}</p>
               
               
               
              {/* Dynamic Button */}

             <div className='flex items-center justify-center  my-1'>
             

             <Link href={`/services/${SingleProduct.service_id}`}>
              
              
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition  ">
                  View Details
                </button>

                </Link>

             </div>
              
              
              
             
             
             
             
              </div>
            </div>
    );
};

export default ProductCard;