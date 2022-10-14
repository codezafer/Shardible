import React from "react";
import Image from "next/image";
import { BsCircle, BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../images";

const Category = () => {
  const CategoryArray = [1, 2, 3, 4, 5, 6];
  return (
    < div className={Style.box_category}>
      <div className={Style.CategoryHead}>
          <h1>Genesis pieces</h1>
          <button>See all</button>
        </div>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={1 + 1}>
            <Image
              src={images.creatorbackground1}
              className={Style.category_box_img}
              alt="Background image"
              width={350}
              height={350}
              objectFit="cover"
            />

            <div className={Style.category_box_title}>
              <div className={Style.category_box_title_info}>
                <h4>Artwork</h4>
                <div className={Style.category_box_title_info_right}>
                <Image
                  src={images.creatorbackground1}
                  alt="artist image"
                  width={30}
                  height={20}
                  />
                <p>Artist</p>
                </div>
                <div className={Style.category_box_price}>
                <div className={Style.category_box_price_left}>
                <p>price</p>
                <h3>80SHR</h3>
                </div>
                <div className={Style.category_box_price_right}>
                  <p>Highest Bid</p>
                  <h3>7.59SHR</h3>
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

export default Category;