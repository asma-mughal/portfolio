import React,{ useState, useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from '../data/data';
const Carousel = ({ images }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
   //autoplay:true,
   arrows: false,
 
  };
   
  return (
    <div id="projects" name="projects">
    <Slider {...settings}
    style={{
      backgroundColor:'white'
    }}
    >
      
      {data.map((i)=>{
        return(
          <div class="grid grid-cols-1 sm:grid-cols-1
           md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 bg-white">
          <div class=" w-full lg:w-full lg:flex ">
          <img
                className="object-cover w-full
                h-80
                lg:w-96 lg:h-96"
                src={i.image}
                alt="image"
            />
            <div class="
              bg-white items-center lg:w-1/2 lg:ml-28 flex flex-col 
              font-poppins
              justify-center leading-normal">
              <div class="m-10">
                
                <div class="text-secondary font-bold text-xl uppercase  mb-2">{i.subtitle}</div>
                <div class="text-gray-900 font-bold text-3xl   mb-2">{i.title}</div>
                <p class="text-gray-700 ml- text-sm">{i.description}.</p>
              </div>
            </div>
          </div>
          </div>
    )
      })}
    
    
  </Slider>
  </div>
  )
}

export default Carousel
