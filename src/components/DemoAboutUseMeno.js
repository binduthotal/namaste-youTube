import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/findPrime";

const DemoAboutUseMeno = () => {
    const [text, setText] = useState(0);

    console.log("Rendering...");

    const prime = useMemo(()=>findPrime(text),[text]) 
    return (
        <div className="mt-10">
            <div className="border border-solid border-black w-fit">
                <input
                    type="number"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div>
                <h1 className="mt-4 font-bold text-xl">nth prime: {prime}</h1>
            </div>
        </div>
    );
};

export default DemoAboutUseMeno;
