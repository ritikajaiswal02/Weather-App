import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Input from './components/Input'

function App() {
  return (
    <>
    <div className='w-screen h-screen mx-auto bg-gradient-to-b from-purple-700 via-blue-500 to-white-200 flex flex-col justify-center items-center'>
      <Input/>
      <Card/>
    </div>
    </>
  )
}

export default App
