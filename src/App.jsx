import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componentes/Header'
import Aside from './Componentes/Aside'
import Content from './Componentes/content'

function App() {

  return (
    <>
      <div className=' w-screen h-screen'>
        <Header/>
        <div className='w-full h-[86.7vh] flex '>
          <Aside/>
          <Content/>
        </div>
      </div>
    </>
  )
}

export default App
