import { useState } from "react";



const Toggle = () => {
    const [dark, setDark] = useState(false);
    return (
        <>
            <div className={` m-5 border w-80 text-center mx-auto border-red-500 p-5 ${dark ? "bg-[#1e1e1e] text-white" : "bg-white text-black"}`}>
                <div className="font-bold mb-5">This is a toggle of dark and light mode </div>
                  <button className="border rounded p-1 bg-blue-600 text-white" onClick={() => setDark(!dark)}>
                    {dark ? "light mode " : "dark mode"}
                  </button>
            </div>
        </>
      )
    }
export default Toggle;
