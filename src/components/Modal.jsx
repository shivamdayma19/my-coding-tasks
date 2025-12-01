import { useState } from 'react'


import {  X } from 'phosphor-react'

const Modal=()=> {

  const[open , setOpen]=useState(false)


  return (
    <>
      <button className='cursor-pointer bg-red-500 text-white p-1 rounded' onClick={()=> setOpen(true)} >Open</button>

     {open && (
       <div className='mx-auto'>
        <div className='border  w-80 text-center  mx-auto relative'>
          <X size={16}  onClick={()=>setOpen(false)} className='absolute right-5 top-3 cursor-pointer' />
          <h1 className='font-bold mt-10 mb-4'>Thanks !  </h1>
          <p className='text-sm  mb-4'>We have receved the detail about new role .
            <br />
            Our ream will contct you shortly.
          </p>
          <button onClick={()=>setOpen(false)} className='bg-blue-400 text-white p-2 mb-4 rounded cursor-pointer'>Done </button>

        </div>
      </div>
     )}
    </>
  )
}

export default Modal;
