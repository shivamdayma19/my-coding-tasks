import { Link, Route, Routes } from "react-router-dom";
import Acordian from "./components/Acordian";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import Modal from "./components/Modal";
import Passwords from "./components/Passwords";






const App=() => {
  return(
       <>
   <nav>
    <div className=''>
      <Link className='border p-2 bg-blue-300 rounded ' to="/acordian">Acordian  </Link>
      <Link className='border p-2 bg-blue-300 rounded ' to="/counter">Counter  </Link>
      <Link className='border p-2 bg-blue-300 rounded ' to="/toggle">Toggle  </Link>
      <Link className='border p-2 bg-blue-300 rounded ' to="/modal">Modal  </Link>
      <Link className='border p-2 bg-blue-300 rounded ' to="/password">Passwords </Link>
   
    
    </div>

    <Routes>
    <Route path="/acordian" element={<Acordian/>}></Route>
    <Route path="/counter" element={<Counter/>}></Route>
    <Route path="/toggle" element={<Toggle/>}></Route>
    <Route path="/modal" element={<Modal/>}></Route>
    <Route path="/password" element={<Passwords/>}></Route>
    </Routes>

   </nav>
    </>
  )
}
export default App;