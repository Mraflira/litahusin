import React from 'react';
import Image from 'next/image';

export default function AnakPerempuan() {
  return (
    <>
        <div className="anak-perempuan">
            <Image src="/image/anak-perempuan1.png" layout="fill" objectFit='fit' />
        </div>
        <h1>Anak Perempuan</h1>
        <img src="image/heading.png" alt="" class="heading-image"></img>
    </>
  )
}
