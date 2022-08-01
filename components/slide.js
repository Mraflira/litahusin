import React from 'react';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import {Navigation } from "swiper";
import HeaderPage from './head-page';
import Sidebar from './sidebar-menu';
import Bluecorn from './art/bluecorn';
import AnakPerempuan from './art/anak-perempuan';
import Abstrak from './art/abstrak';
import BatangPohon from './art/3-batang-pohon';
import BluecornPopup from './popup/bluecorn-popup';
import Image from 'next/image';
import AnakPerempuanPopup from './popup/anak-perempuan-popup';
import AbstrakPopup from './popup/abstrak-popup';
import BatangPohonPopup from './popup/batang-pohon-popup';

export default function Slide() {
  const [ArtBluecornShow, setArtBluecornShow] = React.useState();
  const [ArtAnakShow, setArtAnakShow] = React.useState();
  const [ArtAbstrakShow, setArtAbstrakShow] = React.useState();
  const [ArtBatangPohonShow, setArtBatangPohonShow] = React.useState();

  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
      >
        <SwiperSlide>
            <button onClick={()=> setArtBluecornShow(true)} class="info-button">Info</button>
            <Bluecorn/>
        </SwiperSlide>
        <SwiperSlide>
            <button onClick={()=> setArtAnakShow(true)} class="info-button">Info</button>
            <AnakPerempuan/>
        </SwiperSlide>
        <SwiperSlide>
            <button onClick={()=> setArtAbstrakShow(true)} class="info-button">Info</button>
            <Abstrak/>
        </SwiperSlide>
        <SwiperSlide>
            <button onClick={()=> setArtBatangPohonShow(true)} class="info-button">Info</button>
            <BatangPohon/>
        </SwiperSlide>
        <HeaderPage/>
        <Sidebar/>
        
        <div className={ArtBluecornShow ? "show-art" : "hide-art"}>
              <BluecornPopup/>
              <button className="button-popup button-popup-about" onClick={()=> setArtBluecornShow(false)}>
                <Image src="/image/close-black.png" width="37" height="37" className="close-image" /> 
              </button>
        </div>

        <div className={ArtAnakShow ? "show-art" : "hide-art"}>
              <AnakPerempuanPopup/>
              <button className="button-popup button-popup-about" onClick={()=> setArtAnakShow(false)}>
                <Image src="/image/close-black.png" width="37" height="37" className="close-image" /> 
              </button>
        </div>

        <div className={ArtAbstrakShow ? "show-art" : "hide-art"}>
              <AbstrakPopup />
              <button className="button-popup button-popup-about" onClick={()=> setArtAbstrakShow(false)}>
                <Image src="/image/close-black.png" width="37" height="37" className="close-image" /> 
              </button>
        </div>

        <div className={ArtBatangPohonShow ? "show-art" : "hide-art"}>
              <BatangPohonPopup />
              <button className="button-popup button-popup-about" onClick={()=> setArtBatangPohonShow(false)}>
                <Image src="/image/close-black.png" width="37" height="37" className="close-image" /> 
              </button>
        </div>
      </Swiper>

      
    </div>

    
  )
}
