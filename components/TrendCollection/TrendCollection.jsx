import React from "react";
import Image from "next/image";
import { RiArrowDropDownLine } from 'react-icons/ri';


// Internal component 
import Style from "./TrendCollection.module.css";
import images from "../../images";

const TrendCollection = () => {
    const CollectionCardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className={Style.Collection_box}>
            <div className={Style.CollectionHead}>
                    <h1>Trending Collection</h1>
                    <button>Last 24 Hours <RiArrowDropDownLine /> </button>
                    <button>See All</button>
            </div>

            <div className={Style.Collection_Cards}>
                {CollectionCardArray.map((ei, i) => (
                    <div className={Style.Collection_box} key={1 + 1}>
                        <div className={Style.Collection_box_info}>
                            <Image
                                src={images.ava01}
                                className={Style.Collection_box_img}
                                alt="Creators images"
                                width={50}
                                height={50}
                                objectFit="cover"
                            />

                            <div className={Style.Collection_box_title}>
                                <div className={Style.Collection_box_name}>
                                    <h4>Creators Club</h4>
                                    <p>Floor Price: 300 SHM</p>
                                </div>
                                <div className={Style.Collection_box_price}>
                                    <h4>300K SHM</h4>
                                    <p>$3.7M +24.5%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendCollection;