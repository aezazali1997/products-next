'use client'

import React, { useState } from 'react'
import CustomImage from './index'
import Image from 'next/image'

const MultipleImages = ({images}:any) => {
  const [selectedImage,setSelectedImage]= useState(images[0] || '');

  return (
    <div className='flex gap-x-4 mt-4'>
    <div>
    {
    images.map((image:string,index:number)=>{
      return  <div onClick={()=> setSelectedImage(image)} key={index} className={`border border-1 p-2 my-2 cursor-pointer ${selectedImage===image ? 'border-blue-500 ' : 'border-gray-200 '}`}> <Image alt='picture of product' className=' object-contain' src={image}  width={200} height={500}  /> </div>
    })
  }
    </div>
    <div className='border border-1 border-gray-200'> 
    <CustomImage image={selectedImage} />

    </div>
    </div>
  )
}

export default React.memo(MultipleImages)