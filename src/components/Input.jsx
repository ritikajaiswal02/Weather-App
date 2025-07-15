import React from 'react'

function Input() {
  return (
    <div className='mb-6 rounded-4xl text-sky-950 flex flex-col md:flex md:flex-row'>
        <input type="text" placeholder='Enter city.....' className='bg-slate-50 text-2xl p-4 w-[100%] rounded-4xl mb-3 flex md:w-120'/>
        <button className='bg-blue-800 text-[18px] text-white p-5 w-27 rounded-4xl hover:bg-purple-800 mx-25 md:mx-2 md:h-16 md:p-2'>Search</button>
    </div>
  )
}

export default Input