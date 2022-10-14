import React,{useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedUp, TiArrowSortedDown} from "react-icons/ti";
 
//Internal import
import Style from "./SideBar.module.css"
import images from "../../../images";
import Button from "../../Button/Button";
const SideBar = ({setOpenSideMenu}) => {

    const[openExplore, setOpenExplore] = useState(false);

   // Explore Navigation menu 
  const explore =[
    {
      name:"NFT",
      link:"NFT"
    },
    {
      name:"Collections",
      link:"Collections"
    },
    {
      name:"Creator",
      link:"Creator"
    }
  ];

  const openExploreMenu = () => {
    if (!openExplore) {
      setOpenExplore(true);
    } else {
      setOpenExplore(false);
    }
  };

  const closeSideBar = ()=>{
    setOpenSideMenu(false);
  }
  return (
    <div className={Style.sideBar}>
        <GrClose
        className ={Style.sideBar_closeBtn}
        onClick ={()=>closeSideBar()}
        />

        <div className={Style.sideBar_box}>
            <Image src = {images.logo} alt ="logo" width={75} height={75}/>
            <p>
                Discover the most outstainding Nfts collections.
            </p>
            <div className={Style.sideBar_social}>
                <a href="#">
                    <TiSocialFacebook/>
                </a>
                <a href="#">
                    <TiSocialTwitter/>
                </a>
                <a href="#">
                    <TiSocialYoutube/>
                </a>
                <a href="#">
                    <TiSocialLinkedin/>
                </a>
            </div>
        </div>

        <div className={Style.sideBar_menu}>
            <div>
            <div className={Style.sideBar_menu_box}
            onClick={()=> openExploreMenu()}
            >
                <p>Explore</p>
            <TiArrowSortedDown />
            </div>

            {openExplore && (
            <div className={Style.sideBar_explore}>
              {explore.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
          </div>
        </div>
        <div className={Style.sideBar_button}>
            <Button btnName ="Wallet" handleClick={() => {}}/>
            {/* <Button btnName ="Connect Wallet" handleClick={() => {}}/> */}
          </div>
    </div>
  );
};

export default SideBar;