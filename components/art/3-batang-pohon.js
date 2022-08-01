import React from 'react';
import Image from 'next/image';

export default function BatangPohon() {
  return (
    <>
        <div className='batang-pohon'>
            <Image src="/image/3-batang-pohon.png" layout='fill' objectFit='fit' />
        </div>
        <h1>3 Batang Pohon</h1>
        <img src="image/heading.png" alt="" class="heading-image"></img>
    </>
  )
}
