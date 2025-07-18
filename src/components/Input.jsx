import React, { useContext, useEffect, useState,useRef } from 'react'
import { Weathercontext } from '../contextApi/ContextApi'
import { getApiData, getState } from '../api/Api'

function Input() {

  const {data,setData,loading,setLoading} = useContext(Weathercontext)
  const [city,setCity] = useState("")
  const inputRef =useRef(null)
  

  const handleClick = (e)=>{
    setCity(e.target.value)
  }

  const getData=()=>{
    if(city){
      setLoading(true)
      getApiData(city)
    .then(resp => {
      setData(resp)
      setLoading(false)
    })
    .catch(err => console.log(err))
    setLoading(false)
    }
    else{
      inputRef.current.focus()
    }
  }

  useEffect(() => {
    if (navigator.geolocation) {
      setLoading(true)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getState(latitude,longitude)
          .then(res => {setData(res),setLoading(false)})
          .catch(err => setLoading(false))
        },
      );
    } else {
      setData("No geolocation supported")
    }
  }, []);


  return (
    <div className='mb-6 rounded-4xl text-sky-950 flex flex-col items-center w-full md:flex md:flex-row md:justify-center'>
        <input type="text" placeholder='Enter city.....' className='bg-slate-50 text-2xl p-4 w-[80%] rounded-4xl h-15 mb-3 md:w-120' onChange={handleClick} ref={inputRef}/>
        <button className='bg-blue-800 text-[18px] text-white p-4 w-27 rounded-4xl hover:bg-purple-800 mx-25 md:mx-2 md:h-16 md:p-2 md:mt-[-10px]' onClick={getData} 
        >Search</button>
    </div>
  )
}

export default Input