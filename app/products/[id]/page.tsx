import Image from 'next/image'
import React, { useState } from 'react'
import CustomImage from '../../image/index'
import MultipleImages from '@/app/image/multipleImages'


export async function generateStaticParams (){
const {products} = await fetch('https://dummyjson.com/products').then((res) => res.json())
return products.map((product:any)=>({
  id:product.id.toString()
}))
}

const page = async({params}:any) => {
  const product = await fetch(`https://dummyjson.com/products/${params.id}`).then((res)=> res.json())
  const {images,description,price,stock,brand,category} = product

  return (
  <div className='flex gap-x-4 justify-evenly mt-10'>
  <div>
  <MultipleImages images={images} />
  </div>
  <div className='flex flex-col mt-4'>
  <h1>{brand} &gt; {category}</h1>
  <h1 className='text-2xl font-bold'>{description}</h1>
  <h2>$ {price}</h2>
  <h2>{stock} in Stock</h2>
  </div>
  </div>  
  )
}

export default page