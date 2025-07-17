import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Input from './components/Input'
import { Weathercontext } from './contextApi/ContextApi'

function App() {

  const [data,setData] = useState()

  return (
    <>
    <Weathercontext.Provider value={{data,setData}}>
    <div className='w-screen h-screen mx-auto bg-gradient-to-b from-purple-700 via-blue-500 to-white-200 flex flex-col justify-center items-center'>
      <Input/>
      <Card/>
    </div>
    </Weathercontext.Provider>
    </>
  )
}

export default App
