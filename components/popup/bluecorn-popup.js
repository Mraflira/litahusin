import React from 'react'
import Image from 'next/image'

export default function BluecornPopup() { 
  return (
    <div>
      <div class="popup-card-art">
        <div className='popup-art'>
          <div class="image-box">
            <div className='image-box-art'>
              <Image src="/image/bluecorn.png" layout='fill' objectFit='fit' /> 
            </div>
          </div>
          <div class="box-content">
            <h1>Blue corn</h1>
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
