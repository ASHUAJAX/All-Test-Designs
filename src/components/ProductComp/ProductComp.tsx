import React, { useState } from "react";
import "./ProductComp.css";

function ProductComp() {
  const images: string[] = [
    "https://lilypad-product-images.s3.ap-south-1.amazonaws.com/TRI_2912.png",
    "https://lilypad-product-images.s3.ap-south-1.amazonaws.com/TRI_2909.png",
    "https://lilypad-product-images.s3.ap-south-1.amazonaws.com/TRI_2916.png",
    "https://lilypad-product-images.s3.ap-south-1.amazonaws.com/e-cycling%20in%20india.png",
  ];

  const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    <div className="w-[98%] mt-5 m-auto">
      <div className="flex">
        <div className="flex-1  ">
          <div className="flex">
            <div>
              <ul>
                {images.map((elm, key) => (
                  <li
                    className="w-[77px] rounded-xl flex items-center p-1 h-[77px] mb-4 border-1 shadow-custom"
                    key={key}
                  >
                    <img
                      className=""
                      onMouseEnter={() => setSelectedImg(elm)}
                      src={elm}
                      alt="lilyPad-list-img"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 ">
              <div className="h-[350px] ">
              <img
                className=" h-[100%]  m-auto"
                src={selectedImg}
                alt="lilyPad-img"
              />
              </div>
             
              <div className="mt-5 w-[75%] m-auto">
              <div className="flex gap-10">
                <button className="buttonClass flex-1">Buy Now</button>
                <button className="buttonClass flex-1">Book</button>
              </div>
              <p className="w-full text-center border-2 border-gray-600 text-2xl font-bold  mt-5 border-dashed p-2 ">
                EMI @ 5000
        
              </p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}

export default ProductComp;
