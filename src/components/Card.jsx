import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";

function Card() {
  return (
    <div className='w-60 p-5 h-72 rounded-[35px] overflow-hidden bg-zinc-900/90 relative text-white'>
        <FaRegFileAlt />
        <p className='text-sm mt-5 leading-tight font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 bg-sky-600 w-full h-14 left-0'></div>
    </div>
  )
}

export default Card