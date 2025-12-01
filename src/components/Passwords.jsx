import { useState } from "react";


const Passwords =() =>{
  const [password, setPassword]=useState("")
  const [showPassword,setShowPassword] = useState(false)
  return (
    <>
    <div className="flex flex-col items-center justify-center mt-10">
      <input 
        type={showPassword ? "text" : "password"}
        className="border border-gray-300 rounded px-3 py-2 w-64 mb-3"
        placeholder="enter your password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button 
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>

    </>
  )
}
export default Passwords ;