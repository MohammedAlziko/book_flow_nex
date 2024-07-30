import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

import React from 'react';





const aco =[
  {Q:"What is Apple Books?  ",Answer:"Apple Books is a built-in app that lets you find, buy, listen to, and read audiobooks and ebooks all in one place. You can browse curated collections, top audiobooks, and top ebooks and even get personalized recommendations. If you can’t find the app on your device, use the search function or look for Apple Books in the App Store."},
  {Q:"How much does Apple Books cost?  ",Answer:"The Apple Books app is free and there is no subscription. Audiobooks and ebooks are priced individually, and thousands of free audiobooks and ebooks are available. You can also sample audiobooks and ebooks for free while you browse."},
  {Q:"Can I play audiobooks on my devices?  ",Answer:"Yes. Audiobooks can be played on iPhone, iPad, CarPlay, Apple Watch, Mac, and Apple Vision Pro. You can even play audiobooks on a Bluetooth speaker from your iPhone."},
  {Q:"Can I pre-order an audiobook or ebook?  ",Answer:"Yes. Apple Books makes it easy to find the most anticipated audiobooks and ebooks. Search for the title and select the Pre-Order button to confirm the purchase. The title will be added to your library automatically once it is available. To preview upcoming releases, look for the Coming Soon section in the app."},
  {Q:"Can I gift an audiobook or ebook?  ",Answer:"Yes. You can use Apple Books to gift an audiobook or ebook to anyone. Search for the title and select the gift box symbol  to complete the purchase."},
  {Q:"Can I share Apple Books purchases with my family?  ",Answer:"You can share your Apple Books purchases with up to five other family members."},
  {Q:"What happened to iBooks?  ",Answer:"iBooks is now Apple Books. But don’t worry — any books you purchased on iBooks are in your Apple Books library."},
]







const AccordionC = () => {
  return (
<section className="bg-gray-100 p-3 md:p-24 w-full " >
<h1 className=' text-3xl md:text-5xl py-10 text-center font-bold text-black  ' >
Questions? Answers.
</h1>

<Accordion className="w-full max-w-[1230px] mx-auto border-none " >

{
  aco.map((items,index)=>(
    <AccordionPanel key={index} >
    <AccordionTitle className="text-black dark:text-white" >{items.Q}</AccordionTitle>
    <AccordionContent>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
    {items.Answer}
      </p>
 
    </AccordionContent>
  </AccordionPanel>
  ))
}



    
      
    </Accordion>





</section>

 
  )
}

export default AccordionC