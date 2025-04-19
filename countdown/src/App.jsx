import { Outlet } from 'react-router-dom'

import NewYear from "./assets/NewYear.jpg"

import './App.css'


function App() {
  return (
      <div className='App' style={{backgroundImage: `url(${NewYear})` }}>
        <div className='container'>        
          <Outlet />
        </div>
      </div>
  )
}

export default App
