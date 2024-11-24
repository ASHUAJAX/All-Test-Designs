import React, { useState } from "react";
import "./ProductComp.css";
import { Star } from "@mui/icons-material";
import Accordion from "../Accordion/Accordion";
import ThemeToggler from "../ThemeToggler";

const accordionDataOverview = {
  head: "Overview",
  list: [
    { key: "Range", value: "150 km" },
    { key: "Top Speed", value: "85 km/h" },
    { key: "Charging Time", value: "4 hours" },
    { key: "Safety", value: "Ip67 rated motor and battery" },
    { key: "Transmission", value: "Electric" },
  ],
};



const accordionDataPerformance = {
  head: "Performance",
  list: [
    { key: "Top Speed", value: "85 km/h" },
    { key: "Range", value: "150 km" },
    { key: "Driving Modes", value: "Eco, City, Turbo" },
    { key: "Motor Type", value: "Hub Motor" },
    { key: "Transmission", value: "Electric" },
    { key: "Battery Type", value: "Lithium Ion" },
    { key: "Battery Capacity", value: "	3.2 kwh" },
    { key: "Charger Type and Capacity", value: "	84V 10A" },
    { key: "Peak Motor Power", value: "	6.5 kW" },
    { key: "Motor Power", value: "	3 kW" },

  ],
};

const accordionDataDimension = {
  head: "Dimension",
  list: [
  
    { key: "Total Weight", value: "110 kg" },
    { key: "Boot Space", value: "10 L" },
    { key: "Length", value: "	1828.8 mm" },
    { key: "Width", value: "914.4 mm" },
    { key: "Height", value: "1219.2 mm" },
    { key: "Seat Length", value: "1066 mm" },
    { key: "Ground Clearance", value: "210 mm" },
    { key: "Wheel Base", value: "1371 mm" },
  ],
};
const accordionDataBrakesWheelsandSuspensions = {
  head: "Brakes, Wheels and Suspensions",
  list: [
  
    { key: "Frame Type", value: "IRON" },
    { key: "Front Suspensions", value: "USD" },
    { key: "Rear Suspensions", value: "MONO" },
    { key: "Front Brake type", value: "DISC" },
    { key: "Rear Brake type", value: "DISC" },
    { key: "ABS / CBS", value: "CBS" },
    { key: "Wheel Type", value: "ALLOY" },
    { key: "Front Tyre", value: "17 INCH" },
    { key: "Rear Tyre", value: "17 INCH" },
  ],
};

function ProductComp() {
  const images: string[] = [
    "https://lilypad-product-images.s3.ap-south-1.amazonaws.com/TRI_2912.png",
    "https://lilypad-product-images.s3.ap-south-1.amazonaws.com/TRI_2909.png",
    "https://lilypad-product-images.s3.ap-south-1.amazonaws.com/TRI_2916.png",
    "https://lilypad-product-images.s3.ap-south-1.amazonaws.com/e-cycling%20in%20india.png",
  ];

  const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    <div className="w-[100%] p-2 m-auto bg-white dark:bg-gray-800 text-black dark:text-white">
      <ThemeToggler/>
      <div className="flex">
        <div className="flex-1 sticky top-0 pt-4  h-[100vh]">
          <div className="flex">
            <div>
              <ul>
                {images.map((elm, key) => (
                  <li
                    className={`w-[77px] rounded-xl flex items-center p-1 h-[77px] mb-4 border-2 shadow-custom ${
                      selectedImg === elm && "border-primary"
                    }`}
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
                <p className="w-full text-center rounded-lg border-2 border-primary  text-2xl font-bold  mt-5 border-dashed p-2 ">
                  EMI @ ₹5,000
                </p>
                <div className="flex gap-10">
                  <button className="buttonClass flex-1 text-2xl font-bold  mt-5 h-[60px]">
                    Contact us to learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-semibold ">P-Sport</h1>
          <p className=" text-lg">
            By{" "}
            <span className={"text-primary font-semibold text-xl"}>
              Power Electric Vehicles
            </span>
          </p>
          <div className="flex font-bold items-center gap-1 mt-1">
            {" "}
            <Star className="text-primary" /> <p className="text-xl">4.2</p>
          </div>

          <div className="mt-10 w-[400px] ">
            <h2 className="text-xl font-semibold">Description</h2>
            <div className="border-dashed mt-2 border-primary border">
              <div className="flex">
                <p className="flex-1 p-2 border-primary border">
                  Varient : <span className="font-bold">EV</span>
                </p>
                <p className="flex-1 p-2 border-primary border">
                  City : <span className="font-bold">Delhi</span>
                </p>
              </div>
              <p className="flex-1 flex gap-4 justify-center items-center p-2 border-primary border font-bold  text-center">
                <p className="text-2xl">Price : </p>
                <p className="text-4xl text-primary">₹ 179,999</p>
                <del className="text-gray-600 text-xl">₹ 199,999</del>
              </p>
            </div>
          </div>

          <div className="mt-5 ">
            <h2 className="text-xl font-semibold">Highlights</h2>
            <div className="flex mt-2 gap-4 dark:text-black">
              <div className="bg-primary pl-2 p-1 flex-1 font-semibold  ">
                <p>Range </p>
                <p className="text-2xl font-bold">150 km</p>
              </div>
              <div className="bg-primary pl-2 p-1 flex-1 font-semibold  ">
                <p>Top Speed </p>
                <p className="text-2xl font-bold">85 km/h</p>
              </div>
              <div className="bg-primary pl-2 p-1 flex-1 font-semibold  ">
                <p>Charging time </p>
                <p className="text-2xl font-bold">4 hours</p>
              </div>
              <div className="bg-primary pl-2 p-1 flex-1 font-semibold  ">
                <p>Power</p>
                <p className="text-2xl font-bold">3 kW</p>
              </div>
            </div>
          </div>

          <Accordion
            head={accordionDataOverview.head}
            list={accordionDataOverview.list}
          />
          <Accordion
            head={accordionDataPerformance.head}
            list={accordionDataPerformance.list}
          />
          <Accordion
            head={accordionDataDimension.head}
            list={accordionDataDimension.list}
          />
          <Accordion
            head={accordionDataBrakesWheelsandSuspensions.head}
            list={accordionDataBrakesWheelsandSuspensions.list}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductComp;
