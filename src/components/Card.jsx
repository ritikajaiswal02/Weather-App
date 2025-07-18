import React, { useContext, useEffect, useState } from 'react'
import { Weathercontext } from '../contextApi/ContextApi'
import { getState } from '../api/Api'

function Card() {

  const { data, setData, loading, setLoading } = useContext(Weathercontext)
  const [state, setState] = useState()
  console.log(loading)

  return (
    <div className='bg-[#ebedef30] w-[80%] min-h-110 rounded-[20px] shadow-2xl shadow-blue-500 md:w-[45%]'>
      <div className='text-2xl font-Monaco p-4 text-blue-800'>

        {loading ? <>
        <div className="flex justify-center items-center h-40 flex-col">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-purple-950"></div>
            <p className='text-center text-xl font-semibold'>Loading...</p> 
          </div>
        </> :
          data ?
            <>
              <div className='md:flex justify-around'>
                <div className='flex flex-col justify-center items-center md:text-3xl md:mt-11'>
                  <h1 className='font-semibold'>&#128205;{data.name}, {data.sys.country}</h1>
                  <p className='text-[14px]'>{new Date(data.dt * 1000).toDateString()}</p>
                </div>
                <div className='flex flex-col justify-center items-center md:mt-[-20px]'>
                  <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" className='size-40 md:w-40 h-35' />
                  <p className='mt-[-25px] font-bold md:mt-[-35px]'>&#127777; {(data.main.temp).toPrecision(2)}&deg; C</p>
                  <p>{data.weather[0].description}</p>
                </div>
              </div>
              <div className='flex w-full justify-between mt-10 text-[13px] md:mt-15 md:justify-around md:text-[19px]'>
                <h5>&#128167; HUMIDITY</h5>
                <h5>&#128168; PRESSURE</h5>
                <h5>&#127754; SEA-LEVEL</h5>
              </div>
              <div className='flex w-full justify-between text-[17px] pl-6 pr-2 font-semibold md:justify-around md:text-xl'>
                <p>{data.main.humidity}%</p>
                <p>{data.main.pressure}hpa</p>
                <p>{data.main.sea_level}</p>
              </div>
              <div className='flex w-full justify-around text-[17px] mt-10 md:mt-15'>
                <p>&#9728; Sunrise</p>
                <p>&#9925; Sunset</p>
              </div>
              <div className='flex w-full justify-around text-xl font-medium'>
                <p>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                <p>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
              </div>
            </>
            : "No data found"
        }

      </div>
    </div>
  )
}

export default Card