import React, { useRef, useState } from "react";
import { video } from '../assets/index';
const HeroSection = ({click}) => {
  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY>=90){
    setColor(true)
    
    }
    else {
        setColor(false)
    }
}
    const videoRef = useRef();
    window.addEventListener('scroll', changeColor)
  return (
    <>
    <div name="home" className="flex items-end justify-center w-full h-screen text-center ">
       <div class="ParallaxVideo">
    <video
      ref={videoRef}
      src={video}
      autoPlay
      loop
      muted
      className={`h-auto w-auto object-cover ${color && 'opacity-70'}`}
    />
    </div>
    <div
        className={`pb-48 flex flex-col  items-center font-poppins justify-center duration-500 w-full`}
      >
        <h1 className="text-2xl font-bold text-white  md:text-4xl  lg:text-2xl">Hellow. We're studio 3k.</h1>
        <h1 className="text-2xl lg:text-5xl md:text-5xl font-bold text-white capitalize mb-12">
        Award Winning
Design Agency
        </h1>

</div>
    </div>
    </>
  )
}

export default HeroSection
