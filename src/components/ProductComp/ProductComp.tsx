import React, { useState } from "react";

function ProductComp() {
  const images: string[] = [
    "https://lilypad-product-images.s3.ap-south-1.amazonaws.com/TRI_2912.png",
    "https://lilypad-product-images.s3.ap-south-1.amazonaws.com/TRI_2912.png",
    "https://lilypad-product-images.s3.ap-south-1.amazonaws.com/TRI_2916.png",
    "https://lilypad-product-images.s3.ap-south-1.amazonaws.com/e-cycling%20in%20india.png",
  ];

  const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    <div className="w-full">
      <div className="flex">
        <div className="flex-1 flex">
          <div className="bg-red-500">
            <ul >
              {images.map((elm, key) => (
                <li className="w-[50px] bg-red-500" key={key}>
                  <img className="" src={elm} alt="lilyPad-list-img" />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <img src={selectedImg} alt="lilyPad-img" />
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
 
  );
}

export default ProductComp;
