import React from 'react';
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";


import Style from "./footer.module.css";
import images from "../../images";
import { Explore, Blog } from "../NavBar/index";

const footer = () => {
  return (
    <div className={Style.footer}>
    <div className={Style.footer_box}>
      <div className={Style.footer_box_social}>
      <Image src={images.logo} alt="footer logo" height={30} width={150} />
     
        </div>

        <div className={Style.footer_box_explore}>
          <h3>Explore</h3>
          <Explore />
        </div>
        <div className={Style.subscribe}>
          <h3>Join Shardible Community</h3>
          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>

          
          </div>
          </div>
          </div>
  )
}

export default footer;