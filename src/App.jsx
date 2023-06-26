import { useEffect, useState } from 'react'
import Router from './router'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='bg-rose-200 relative'>
      <Sidebar />
      <div className="w-9/12 px-7 right-0 absolute mt-20">
        <Router/>
      </div>
    </div>
  )
}

export default App
