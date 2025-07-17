import React, { useContext } from 'react'
import { Weathercontext } from '../contextApi/ContextApi'

function Card() {

  const {data,setData} = useContext(Weathercontext)

  return (
    <div className='bg-[#ebedef30] w-[80%] min-h-110 rounded-[20px] shadow-2xl shadow-blue-500 md:w-[50%]'>
        <p className='text-2xl flex justify-center font-Monaco p-4 text-blue-800'>
          {
            data?"Data present":"No data found"
          }

        </p>
    </div>
  )
}

export default Card