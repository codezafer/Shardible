import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Subscribe.module.css";
import images from "../../images";

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Never miss a drop</h2>
          <p>
          Join our mailing list and never miss feature updates, NFT drops, and new ways of discovering the best NFTs.
          </p>
        </div>

        <div className={Style.subscribe_box_right}>
          <div className={Style.subscribe_box_right_input}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Subscribe;