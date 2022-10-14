import React from "react";
import Image from "next/image";
import { BsCircle, BsCircleFill } from "react-icons/bs";


//INTERNAL IMPORT
import Style from "./NFTCards.module.css";
import images from "../../images";
import 'swiper/css';

const NFTCards = () => {
  const NFTCardsArray = [1, 2, 3, 4, 5, 6];
  return (
    < div className={Style.box_NFTCards}>
      <div className={Style.NFTCardsHead}>
          <h1>Launching Soon</h1>
          <button>See all</button>
        </div>
      <div className={Style.NFTCards}>
        {NFTCardsArray.map((el, i) => (
          <div className={Style.NFTCards_box} key={1 + 1}>
            <Image
              src={images.nft1}
              className={Style.NFTCards_box_img}
              alt="Background image"
              width={350}
              height={350}
              objectFit="cover"
            />

            <div className={Style.NFTCards_box_title}>
              <div className={Style.NFTCards_box_title_info}>
                <h4>Artwork</h4>
                <div className={Style.NFTCard_box_update_right}>
              <div className={Style.NFTCard_box_update_right_info}>
                <p>3h : 15m : 20s</p>
              </div>
            </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default NFTCards;