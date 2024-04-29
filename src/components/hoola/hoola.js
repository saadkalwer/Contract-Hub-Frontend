import React from "react";
import { ImageSide } from "./style";
import image1 from "../../image/Mine.jpg";
import image2 from "../../image/TOUCHUP.jpg";
import image3 from "../../image/Skin Fresh.jpg";
import image4 from "../../image/HoolaBuu.jpg";

function ImageSection() {
  return (
    <ImageSide>
      <div className="Image-Menu-Section">
        <img className="Image-menu" src={image1} alt="" />
        <img className="Image-1" src={image2} alt="" />
        <img className="Image-1" src={image3} alt="" />
        <img className="Image-1" src={image4} alt="" />
      </div>
    </ImageSide>
  );
}

export default ImageSection;
