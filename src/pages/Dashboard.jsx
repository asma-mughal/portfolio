import React from 'react';
import { useState } from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Bot from '../components/Bot';
import Carousel from '../components/Carousel';
import Clients from '../components/Clients';
import Card from './Card';
import Footer from '../components/Footer';
import Contactus from '../components/Contactus';
const Dashboard = () => {
    
  const [click, setClick] = useState(false)
  const [color, setColor] = useState(false);
  return (
    <div className=''>
  <Bot />
  <Navbar click={click} setClick={setClick}
 color={color}
 setColor={setColor}
 />
 <HeroSection click={click}  />
<Card />
<div className=''>
<Carousel  />
</div>
<div className='bg-white text-transparent' style={{
  marginTop:'-2rem'
}}>hellow
<div className=''><text className='text-transparent'>hellow</text></div>
<div className='text-transparent'>hellow</div>
</div>

<div clasName="bg-red-500">

<Clients />

</div>
<div className=' text-transparent' style={{
  backgroundColor:'#F4F4F4',
   marginTop:'-1rem'
}}>hellow
<div className=''><text className='text-transparent'>hellow</text></div>
<div className='text-transparent'>hellow</div>
<div className='text-transparent'>hellow</div>
</div>
<Contactus />
<Footer />
</div>
  )
}

export default Dashboard
