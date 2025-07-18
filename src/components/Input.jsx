import React, { useContext, useEffect, useState,useRef } from 'react'
import { Weathercontext } from '../contextApi/ContextApi'
import { getApiData, getState } from '../api/Api'

function Input() {

  const {data,setData} = useContext(Weathercontext)
  const [city,setCity] = useState("")
  const inputRef =useRef(null)
  

  const handleClick = (e)=>{
    setCity(e.target.value)
  }

  const getData=()=>{
    city?
    getApiData(city)
    .then(resp => setData(resp))
    .catch(err => console.log(err))
    : inputRef.current.focus()
    
    console.log("no data")
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getState(latitude,longitude).then(res => setData(res))
        },
      );
    } else {
      setData("No geolocation supported")
    }
  }, []);


  return (
    <div className='mb-6 rounded-4xl text-sky-950 flex flex-col md:flex md:flex-row'>
        <input type="text" placeholder='Enter city.....' className='bg-slate-50 text-2xl p-4 w-[100%] rounded-4xl mb-3 flex md:w-120' onChange={handleClick} ref={inputRef}/>
        <button className='bg-blue-800 text-[18px] text-white p-5 w-27 rounded-4xl hover:bg-purple-800 mx-25 md:mx-2 md:h-16 md:p-2' onClick={getData} 
        >Search</button>
    </div>
  )
}

export default Input