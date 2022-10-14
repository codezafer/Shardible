import React from 'react';

import Style from "../styles/index.module.css";
import { HeroSection } from '../components/componentsindex';
import { Subscribe } from '../components/componentsindex';  
import { Category } from '../components/componentsindex';
import { NFTCards } from '../components/componentsindex';

const Home = () => {
  return  (
    <div className={Style.homePage}>
      <HeroSection/>
      <NFTCards/>
      <Category/>
      <Subscribe/>
    </div>
  );
};

export default Home;