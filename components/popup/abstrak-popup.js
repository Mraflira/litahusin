import React from 'react'
import Image from 'next/image'

export default function AbstrakPopup() { 
  return (
    <div>
      <div class="popup-card-art">
        <div className='popup-art'>
          <div class="image-box">
            <div className='image-box-art-abstrak'>
              <Image src="/image/abstrak.png" layout='fill' objectFit='fit' />
            </div>
          </div>
            <div class="box-content">
                <h1>Abstrak 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus lacus, tincidunt sed orci vel, maximus ornare felis. </p>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus lacus, tincidunt sed orci vel, maximus ornare felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus lacus, tincidunt sed orci vel, maximus ornare felis. Vivamus ac malesuada leo. Maecenas feugiat turpis in ligula lacinia efficitur.</span>
            </div>
            <div class="logo-box">
                <img src="image/heading.png" alt=""></img>
                <p>2019</p>
            </div>
        </div>
      </div>
    </div>
  )
}
