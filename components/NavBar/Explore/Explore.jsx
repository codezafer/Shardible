import React from 'react';
import Link from 'next/link';
import Style from './Explore.module.css';

const Explore = () => {

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
  return (
     <div>
      {explore.map((el, i) => ( 
        <div key= {i+1} className={Style.explore}>
          <Link href={{pathname: '${el.link}'}}>{el.name}</Link>
        </div>
      ))}
      </div>
  )
}

export default Explore