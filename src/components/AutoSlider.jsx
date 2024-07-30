

import Image from 'next/image';
import React from 'react';
import { FaPlayCircle } from "react-icons/fa";
export const AutoSlider = ({ images, duration }) => {


    return (
        <>
            <div className='slider  mt-10 overflow-hidden flex'>
                <div   className='flex gap-5 cursor-pointer  animate-swipe  hover:[animation-play-state:paused]' style={{animationDuration : `${duration}s  `,  }}>
             {/* animate-swipe   */}
                  { 
                        [...images, ...images, ...images, ...images].map(({ src, title, author }) => (
                            <div className='flex group relative  flex-col items-start flex-shrink-0'>
     <div className='flex   flex-col items-start flex-shrink-0'>
          <Image src={src} alt={'Nuclear War'} width={185} height={185} className='w-48 group-hover:brightness-50	duration-500 h-48 object-cover  rounded-md' />
                                <span className='pt-2 font-bold'>{title}</span>
                                <span className='text-gray-600 dark:text-gray-300'>{author}</span>

     </div>
                              
<div className="absolute inset-0 bg-transparent ">
<button className='flex hover:bg-white/70 active:scale-90 translate-x-1/3 text-black duration-300 absolute group-hover:bottom-1/2 opacity-0 group-hover:opacity-100 bottom-1/4 justify-center items-center bg-white px-3 py-1 text-sm gap-1 rounded-full ' >Listen Now   
    <FaPlayCircle className='text-sm' />
     </button>

</div>
                            </div>
                      ))  
                    }                    
                  
                </div>
            </div>
        </>
    );
};