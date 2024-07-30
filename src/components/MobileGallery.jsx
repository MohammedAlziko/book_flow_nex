"use client"

import Image from "next/image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

const MobileImages = [
    {src: '/assets/images/iphone_01.png', title: 'Audio1 Book 01', speed: 15},
    {src: '/assets/images/iphone_02.png', title: 'Audio Book 02', speed: 25},
    {src: '/assets/images/iphone_03.png', title: 'Audio Book 03', speed: 15},
    {src: '/assets/images/iphone_04.png', title: 'Audio Book 04', speed: 25},
    {src: '/assets/images/iphone_05.png', title: 'Audio Book 05', speed: 15},
]

export const MobileGallery = () => {
    return (
        <ParallaxProvider>
               <div className="w-full overflow-hidden" >
            <div className='flex gap-10 w-[1000px] sm:w-auto items-end sm:items-center px-2 h-[60vh] md:h-[38rem] max-w-[1600px] mx-auto mt-16 justify-center align-middle overflow-hidden dark:bg-gray-900'>
          
                    {MobileImages.map(({ src, title, speed }, index) => (
                    <Parallax key={ index } speed={speed}><Image src={src}  alt={title} width={279} height={576}/></Parallax>
                ))}  
             </div>
          

            </div>
        </ParallaxProvider>
    )
}



