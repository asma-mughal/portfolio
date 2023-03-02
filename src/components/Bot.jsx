import React from 'react'
import { AiFillCaretUp } from 'react-icons/ai';
const Bot = () => {
  return (
    <div 
    style={{
        backgroundColor:'#333333'
    }}
    className="fixed bottom-5 sm:right-8 right-4 z-[999]
     cursor-pointer text-white text-4xl 
     w-14 h-14 flex items-center justify-center rounded-full animate-bounce"
     onClick={()=> window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
     >
    <AiFillCaretUp size={20} />
    </div>
  )
}

export default Bot
