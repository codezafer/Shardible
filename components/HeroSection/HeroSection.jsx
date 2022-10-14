import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import  SwiperCore,{ Autoplay } from 'swiper';

import Style from './HeroSection.module.css';
import { Button } from '../componentsindex';
import images from "../../images";
import 'swiper/css';

SwiperCore.use([Autoplay])

const HeroSection = () => {
    return (
        <div className={Style.heroSection}>
            <div className={Style.heroSection_box}>
                <div className={Style.heroSection_box_left}>
                    <h1>Discover, collect  and sell NFT’s </h1>
                    <p>
                        Digital market place for crypto collectibles and non fungible tokens  NFTs
                    </p>
                    <Button
                        btnName="Start Collecting"
                        handleClick={() => router.push("/searchPage")}
                    />
                </div>
                <div className={Style.heroSection_box_right}>
                    <Swiper
                        modules={[Navigation, EffectFade]}
                        navigation
                        effect={'fade'}
                        speed={1}
                        slidesPerView={1}
                        autoplay ={{
                         delay:2000
                        }}
                        loop
                        className={Style.myswiper}
                    >
                        <SwiperSlide className={Style.swiperslide}>
                            <Image src={images.Hero1} alt="NFT" />
                        </SwiperSlide>
                        <SwiperSlide className={Style.swiperslide}>
                            <Image src={images.Hero2} alt="NFT" />
                        </SwiperSlide>
                        <SwiperSlide className={Style.swiperslide}>
                            <Image src={images.Hero3} alt="NFT" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default HeroSection