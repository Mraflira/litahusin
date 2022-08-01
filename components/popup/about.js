import Image from "next/image";

export default function About() {
  return (
    <>
    <div>
        <h1 className="heading-popup">About</h1>
        <div class="popup-card"> 
              <div class="pop-upBox-about">
                  <div className="image-about">
                    <div className="image-about-box">
                      <Image src="/image/about.png" layout="fill" objectFit="cover" />
                    </div>
                    <div className="social-about">
                      <Image src="/image/fb.png" width="17.7px" height="30px" className="social-about-image"/>
                      <Image src="/image/ig.png" width="30px" height="30px" className="social-about-image"/>
                    </div>
                  </div>
                  <div class="box-content-5 box-content-about">
                    <img src="image/heading.png" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus lacus, tincidunt sed orci vel, maximus ornare felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus lacus, tincidunt sed orci vel, maximus ornare felis. Vivamus ac malesuada leo. Maecenas feugiat turpis in ligula lacinia efficitur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus lacus, tincidunt sed orci vel, maximus ornare felis. Lorem ipsum dolor sit amet, consectetur. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus lacus, tincidunt sed orci vel, maximus ornare felis. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus lacus, tincidunt sed orci vel, maximus ornare felis. Lorem ipsum dolor sit amet, consectetur .</p>
                  </div>
                  <div class="logo-box-about">
                    <h1>Indonesia Artist</h1>
                    <p>2 Februari 1970
                      Jakarta, ID</p>
                    <p>2000-2022 (Artist)</p>
                  </div>
              </div>
        </div>
      </div>
    </>
  );
}