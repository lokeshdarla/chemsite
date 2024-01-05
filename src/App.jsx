import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarComponent,Footer } from './components/Common'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <NavbarComponent/>
  <Outlet/>
  <Footer/>
    </>
  )
}

export default App
