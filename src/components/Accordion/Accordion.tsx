import  { useState } from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

interface AccordionINTF{
  head : any,
  list : any
}

function Accordion({ head, list }:AccordionINTF) {
  const [isOpened, setIsOpened] = useState(true);
  return (
    <div
      className={`w-full mt-5 mb-5 border-primary border-2 border-dashed overflow-hidden p-2 transition-all duration-300 ease-in-out ${
        isOpened ? "max-h-[500px]" : "max-h-[45px]"
      }`}
    >
      <div className="flex mb-2">
        <h2 className="flex-1 text-xl font-semibold">{head}</h2>{" "}
        <ExpandCircleDownIcon
        className={`${isOpened ? "rotate-180": "rotate-0"} transition-all duration-300 ease-in-out`}
          onClick={() => setIsOpened(!isOpened)}
          style={{ fontSize: "29px" }}
        />
      </div>
      {list.map((elm: any, index: any) => (
        <div
          key={index}
          className={`flex  items-center ${
            index % 2 === 0 && "bg-cyan-100 dark:text-black"
          } p-2`}
        >
          <p className="w-[250px]">
            <FiberManualRecordIcon style={{ fontSize: "10px" }} /> {elm.key}
          </p>
          <p className="flex-1 font-bold">{elm.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
