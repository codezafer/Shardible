import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

//--IMPORT ICONS
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight, CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from 'react-icons/ri';

//Internal import
import Style from "./NavBar.module.css";
import { Explore, SideBar } from './index';
import { Button } from "../componentsindex";
import images from '../../images';
import { TiArrowSortedDown,
} from "react-icons/ti";


const NavBar = () => {
  const [explore, setExplore] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Explore") {
      setExplore(true);
    } else {
      setExplore(false);
    }
  };


  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo} alt="SHARDIBLE MARKET PLACE" width={150} height={30} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" name="search-bar"
                id="search-bar" placeholder='Search NFTs,Collections..' />
              <BsSearch onClick={() => { }} className={Style.search_icon} />
            </div>
          </div>
        </div>
        {/* End of Left section  */}

        {/* Explore Menu  */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_drop}>
          <div className={Style.navbar_container_right_Explore}
            onClick={(e) => openMenu(e)}
          >
            <p>Explore </p>
            <TiArrowSortedDown/>
            </div>
            
            {explore && (
              <div className={Style.navbar_container_right_Explore_box}>
                <Explore />
              </div>

            )}
          </div>
          {/* button section  */}

          <div className={Style.navbar_container_right_button}>
            <Button icon={<CgProfile />} btnName="Connect Wallet" handleClick={() => { }} />
          </div>

          {/* MENU BUTTON */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* SIDBAR CPMPONENT */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar
            setOpenSideMenu={setOpenSideMenu}
          // currentAccount={currentAccount}
          // connectWallet={connectWallet}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;