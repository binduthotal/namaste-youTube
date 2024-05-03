import React from "react";

const ButtonContainer = (props) => {
    return (
        <div className="">
            <button className="py-1 px-3 mx-3 rounded-lg bg-gray-100  font-semibold w-max">
                {props.name}
            </button>
        </div>
    );
};

export default ButtonContainer;
