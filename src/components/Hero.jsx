import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
const Hero = () => {

const title =(<>Read, listen, discover. <br/>All in one app.</>);
const desc ="Apple Books is the single destination to find, buy, and dive into audiobooks and ebooks. Browse curated collections and get personalized recommendations. Share your books with up to five family members.* All with no subscription or monthly commitment."


  return (
    <section className="dark:bg-gray-900 bg-white text-black dark:text-white ">
  <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
  
  <FaBookOpen className='py-4 px-3 text-white dark:border dark:bg-transparent dark:border-white bg-orange-400 rounded-3xl text-8xl mx-auto mb-5 ' />
  
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl">
      {title}
    </h1>
    <p className="mb-8 text-lg dark:text-white text-black/90 font-semibold lg:text-xl sm:px-16 lg:px-48">
   {desc}
    </p>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
      <a
        href="#"
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Get started
       
        <FaArrowRight className="ml-2" />
 
      </a>
      <a
        href="#"
        className="inline-flex justify-center  items-center py-3 px-5 sm:ms-4 text-base font-medium text-center  rounded-lg border border-gray-900 dark:border-white hover:bg-gray-100 dark:hover:text-black duration-150 focus:ring-4 focus:ring-gray-400"
      >
        Learn more
      </a>
    </div>
  </div>
</section>

  )
}

export default Hero