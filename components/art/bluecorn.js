import React from 'react';
import Image from 'next/image';

export default function Bluecorn() {
  return (
    <>
        <div className="bluecorn">
            <Image src="/image/bluecorn1.png" layout="fill" object-fit="fit" />
        </div>
        <h1>Blue corn</h1>
        <img src="image/heading.png" alt="" class="heading-image"></img>
    </>
  )
}
