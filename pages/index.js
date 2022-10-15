import React from 'react';

import Style from "../styles/index.module.css";
import { HeroSection } from '../components/componentsindex';
import { Subscribe } from '../components/componentsindex';  
import { Category } from '../components/componentsindex';
import { TrendCollection } from '../components/componentsindex';
import { Slider } from '../components/componentsindex';

const Home = () => {
  return  (
    <div className={Style.homePage}>
      <HeroSection/>
      <TrendCollection/>
      <Slider/>
      <Category/>
      <Subscribe/>
    </div>
  );
};

export default Home;