import Image from 'next/image'
import React from 'react'

const CustomImage = ({image}:any) => {
  return (
    <Image src={image} width={800} height={800} alt='picture of' />
  )
}

export default React.memo(CustomImage)