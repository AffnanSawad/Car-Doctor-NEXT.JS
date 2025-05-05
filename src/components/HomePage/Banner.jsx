import Link from "next/link";


const Banner = () => {
   
    // Banner Data's :
    const BannerDatas = [
            
        {
            title :"Drive Smooth, Repair Fast",
            description : "Expert car repairs to get you back on the road safely and quickly. Quality service you can trust.",
            next: "#slide2",
            prev: "#slide4"
        },
        {
            title :"Engine Trouble? We Fix It All!",
            description : "From diagnostics to complete engine repairs, our certified mechanics bring your car back to life.",
            next: "#slide3",
            prev: "#slide2"
        },
        {
            title :"Your Trusted Car Care Partner",
            description : "Full-service auto repair with affordable pricing, top-quality parts, and skilled technicians.",
            next: "#slide1",
            prev: "#slide3"
        }

    ]



    return (
        <div className="carousel w-full h-[100vh] bg-white">
        
        {/* Mapping Data */}
        
        {BannerDatas.map((Banner, index) => (
          <div
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
            key={index}
          >
            {/* Image with gradient overlay */}
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(/assets/images/banner/${index + 1}.jpg)`,
              }}
            >
              {/* Content over image */}
              <div className="absolute top-1/2 transform -translate-y-1/2 text-white space-y-4 px-4 md:left-20 md:max-w-lg max-w-xs w-full">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
                  {Banner.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg">{Banner.description}</p>
      
                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Link href="/about">
                    <button className="btn btn-error btn-sm text-white sm:btn-md">Discover More</button>
                  </Link>
                  <Link href="/contacts">
                    <button className="btn btn-dash btn-warning btn-sm sm:btn-md">Contact Us</button>
                  </Link>
                </div>
              </div>
      
              {/* Arrows */}
              <div className="absolute left-3 right-3 top-1/2 flex justify-between transform -translate-y-1/2">
                <a href={Banner.prev} className="btn btn-circle btn-sm sm:btn-md">❮</a>
                <a href={Banner.next} className="btn btn-circle btn-sm sm:btn-md">❯</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    );
};

export default Banner;