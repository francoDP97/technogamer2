import { useState } from 'react'
import Navbar from './pages/Navbar/Navbar.jsx'
import Homer from './pages/Homer/Homer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Homer />
    </>
  )
}

export default App
