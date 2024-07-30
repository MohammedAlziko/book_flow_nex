import React from 'react'

const FavoriteDevices = () => {
  return (
    <section className='bg-white py-16 ' >
        

<div className="flex justify-center  items-center flex-col " >


<h1 className=' text-3xl md:text-5xl  font-bold text-black  ' >
Read and listen on <br/>
your favorite devices.
</h1>

{/*  */}
<div className="pt-12 flex flex-row sm:flex-col gap-12  " >


{/* 1 row */}
<div className="flex gap-x-32 gap-y-10 flex-col sm:flex-row  " >

<div className="flex flex-col justify-center items-center gap-10 " >
    <img src="/devs/devs1.jpg" alt="" />
    <h1 className='text-xl text-black  font-bold ' >iPhone</h1>
</div>

<div className="flex flex-col justify-center items-center gap-10 " >
    <img src="/devs/devs2.jpg" alt="" />
    <h1 className='text-xl text-black  font-bold ' >iPad</h1>
</div>

<div className="flex flex-col justify-center items-center gap-10 " >
    <img src="/devs/devs3.jpg" alt="Mac" />
    <h1 className='text-xl text-black  font-bold ' >Mac</h1>
</div>



</div>


{/* 2 row */}
<div className="flex gap-x-28 gap-y-10 flex-col sm:flex-row  " >

<div className="flex flex-col justify-center items-center gap-10 " >
    <img src="/devs/devs4.jpg" alt="" />
    <h1 className='text-xl text-black  font-bold ' >Apple Watch</h1>
</div>

<div className="flex flex-col justify-center items-center gap-10 " >
    <img src="/devs/devs5.jpg" alt="" />
    <h1 className='text-xl text-black  font-bold ' >CarPlay</h1>
</div>

<div className="flex flex-col justify-center items-center gap-10 " >
    <img src="/devs/devs6.jpg" alt="" />
    <h1 className='text-xl text-black  font-bold ' >Apple Vision Pro
</h1>
</div>



</div>



</div>




</div>


    </section>
  )
}

export default FavoriteDevices