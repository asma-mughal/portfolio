import React from 'react'
import Slider from "react-slick";
import { slider2 } from '../data/data';
const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    autoplay:true,
  };
  return (
   <>
     <div name="about"  className="w-full pt-10 border-0" style={{
      backgroundColor:'#F4F4F4'
     }}>
        <div className=" text-center">
          <h1 className="text-2xl font-bold text-center text-black font-poppins">
            Our Work Gets Attention<span className='text-secondary font-poppins'>.</span></h1>
          <p className="mt-8 mb-16 mx-28 text-center font-poppins text-gray-700">
            We’ve been 
          involved in some great projects over the years and love seeing
           our work getting showcased and winning some cool industry awards along the way.</p>
  
        </div>
        <div class="">
        <Slider {...settings}
        
        >
          {slider2.map((i)=>{
            return (  <div class=" w-full lg:w-full md:ml-10 lg:flex lg:ml-20
            pb-10">
            <img
                  className="
                  "
                  src={i.image}
                  alt="image"
              />
              </div>)
          })}
          
      
        </Slider>
      </div>
      </div>
 
   </>
  )
}

export default Clients
