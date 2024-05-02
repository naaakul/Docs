import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from 'react-icons/lu';

function Card() {
  return (
    <div className='w-60 p-5 h-72 rounded-[35px] overflow-hidden bg-zinc-900/90 relative text-white'>
        <FaRegFileAlt />
        <p className='text-sm mt-5 leading-tight font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 w-full left-0'>
          <div className='flex items-center py-3 px-6 justify-between mb-2'>
            <h5>.4mb</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
              <LuDownload size=".7em" color='#fff'/>
            </span>
          </div>
          <div className='tag w-full flex items-center justify-center py-3 bg-green-600'>
            <h3 className='text-sm font-semibold'>Download Now</h3>
          </div>
        </div>
    </div>
  )
}

export default Card