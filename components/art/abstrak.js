import React from 'react';
import Image from 'next/image';

export default function Abstrak() {
  return (
    <>
        <div className='abstrak'>
            <Image src="/image/abstrak1.png" layout="fill" objectFit="fit"/>
        </div>
        <h1>Abstrak 1</h1>
        <img src="image/heading.png" alt="" class="heading-image"></img>
    </>
  )
}
