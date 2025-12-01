import { useState } from "react";

const Counter = ()=>{
    const [count,setCount]=useState (0)
    return (
      <>
   
         <div className="border-5  rounded  border-gray-500 mx-auto text-center w-80 m-5">
        <h1 className="font-bold text-3xl mt-5 inline-block  mb-5">{count}</h1>
       <div className=" flex justify-center gap-4 mb-5">
         <button className="border bg-blue-600 p-1 text-white rounded " onClick={()=>setCount(count+1)}>Add</button>
        <button  className="border bg-red-600 p-1 text-white rounded " onClick={()=>setCount(count-1)}>Sub</button>
        <button  className="border bg-green-600 p-1 text-white rounded " onClick={()=>setCount (0)}>Reset</button>
       </div>
      </div> 
     
      </>  
    )
}
export default Counter;