import React from "react";
import ButtonContainer from "./ButtonContainer";
import { btnList } from "../utils/constants";

const ButtonList = () => {
  // const scroll = (amount) => {
  //   const container = document.querySelector(".overflow-x-hidden");
  //   container.scrollBy({ left: amount, behavior: "smooth" });
  // };

  return (
    <div className="flex justify-evenly items-center">
      {/* <button
        className="hover:rounded-full hover:bg-gray-300 hover:px-3 hover:py-1 text-3xl p-2 z-10"
        onClick={() => scroll(-200)}
      >
        &lt;
      </button> */}
      <div className="grid grid-flow-col mt-3 overflow-x-hidden w-[78vw]  items-center">
        {btnList.map((list, index) => (
          <ButtonContainer key={index} name={list} />
        ))}
      </div>
      {/* <button
        className="hover:rounded-full hover:bg-gray-300 text-3xl p-2 px-4 z-10"
        onClick={() => scroll(200)}
      >
        &gt;
      </button> */}
    </div>
  );
};

export default ButtonList;
