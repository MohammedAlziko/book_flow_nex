import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
const ConClo = () => {

const title ="Working with Apple Books.";
const desc ="Apple Books is the single destination to find, buy, and dive into audiobooks and ebooks. Browse curated collections and get personalized recommendations. Share your books with up to five family members.* All with no subscription or monthly commitment."


  return (
    <section className="dark:bg-gray-900 bg-gray-100 text-black dark:text-white ">
  <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
  
  <FaBookOpen className='py-4 px-3 text-white dark:border dark:bg-transparent dark:border-white bg-orange-400 rounded-3xl text-6xl mx-auto mb-5 ' />
  
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl">
      {title}
    </h1>
    <p className="mb-8 text-lg dark:text-white text-black/90 font-semibold lg:text-xl sm:px-16 lg:px-48">
   {desc}
    </p>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
     
    </div>
  </div>
</section>

  )
}

export default ConClo