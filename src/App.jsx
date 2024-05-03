import React from 'react'
import Background from "./components/Background";
import Foregrounud from './components/Foregrounud';

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-950'>
      <Background/>
      <Foregrounud />
    </div>
  )
}

export default App