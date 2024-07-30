import React from 'react'

const Experinces = () => {
  return (
    <section className='p-36 mx-auto flex w-full flex-col items-center  bg-gray-100 dark:bg-gray-800 ' >

{/* WRAPPER */}
      <div className="flex w-[350] sm:w-[650px] md:w-[700px] lg:w-[850px]   md:max-w-3xl justify-center items-center lg:max-w-7xl flex-col ">

        <h1 className='text-4xl   text-black dark:text-white md:text-5xl lg:text-6xl font-bold text-center  mb-14 ' >A novel reading and <br className='hidden sm:block' />
          listening experience.</h1>


{/* CARD ONE */}

        <div className="py-10 mx-auto px-2 w-full bg-white rounded-xl ">
          <h1 className='text-black px-5 md:text-center text-xl md:text-2xl font-medium ' >Listen to audiobooks right in the app.</h1>
          <p className='text-gray-500 mb-6 px-5 text-xl font-medium py-1 ' >
            Audiobooks is a tab right inside the Apple Books app, so you can easily find and get immersed in storytelling brought to life by talented narrators and celebrities.
          </p>
<img src="/cardsImgs/apple01.jpg" className='!w-full hidden sm:block '  alt="" />
<img src="/cardsImgs/apple_1.jpg" className='!w-full block sm:hidden '  alt="" />
        </div>



{/* Card2 Parent */}
<div className="flex flex-col xl:flex-row my-7 gap-5 ">


{/* CARD2_1 */}
<div className="py-7 flex justify-center items-center flex-col sm:flex-row xl:flex-col mx-auto px-2 w-full bg-white rounded-xl ">
      
      <div className='' >
           <h1 className='text-black px-5  text-left xl:text-center text-xl md:text-2xl  font-semibold md:font-medium ' >Reach your
page-turning potential.</h1>
          <p className='text-gray-500 mb-6 px-5 text-md lg:text-xl font-semibold md:font-medium py-1 ' >
          Track your reading progress and celebrate achievements with Reading Goals — whether that’s how much you read in a day, a new streak record, or how many books you’ve read this year. And get encouragement to reach your daily goals.  </p>

      </div>
       

<img src="/cardsImgs/card02-1.jpg" className=''  alt="" />
        </div>


{/* CARD2_2 */}
<div className="py-7 flex justify-center items-center flex-col sm:flex-row xl:flex-col mx-auto px-2 w-full bg-white rounded-xl ">
      
      <div className='w-auto sm:w-1/2 xl:w-auto sm:px-5' >
           <h1 className='text-black px-5 text-left xl:text-center text-xl md:text-2xl  font-semibold md:font-medium ' >Get personalized recommendations.</h1>
          <p className='text-gray-500 mb-6 px-5 text-md lg:text-xl font-semibold md:font-medium py-1 ' >
          The For You collection is a curated list of audiobooks, ebooks, authors, and a Weekly Top 5 based on what’s already in your library.</p>

      </div>
       

<div className='px-3'  >
<h1 className='font-bold my-2' >For You</h1>

<div className="flex flex-row gap-4 ">

{/*  */}
<div className=' cursor-pointer' >
  <img src="/cardsImgs/card02-2-2.jpg" alt="book" />
  <p className='sm:text-sm text-xs mt-2 -mb-1 ' >The Midnight Library</p>
<span className='sm:text-sm text-xs font-medium text-gray-400 ' >Matt Haig </span>
</div>

{/*  */}
<div  className=' cursor-pointer' >
  <img src="/cardsImgs/card02-1-2.jpg" alt="book" />
  <p className='sm:text-sm text-xs mt-2 -mb-1 ' >The Midnight Library</p>
<span className='sm:text-sm text-xs font-medium text-gray-400 ' >Matt Haig </span>
</div>


</div>


</div>


        </div>






</div>


{/* CARD 3 */}

<div className="py-10 mx-auto px-2 w-full bg-white rounded-xl ">
          <h1 className='text-black px-5 md:text-center text-xl md:text-2xl font-medium ' >Listen to audiobooks right in the app.</h1>
          <p className='text-gray-500 mb-6 px-5 text-xl font-medium py-1 ' >
            Audiobooks is a tab right inside the Apple Books app, so you can easily find and get immersed in storytelling brought to life by talented narrators and celebrities.
          </p>
<img src="/cardsImgs/card03.jpg" className=' mx-auto'  alt="" />
        </div>




{/* End OF Wrapper */}
      </div>



    </section>
  )
}

export default Experinces