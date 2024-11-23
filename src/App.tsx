import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductComp from './components/ProductComp/ProductComp'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
 <ProductComp/>
  </>
  )
}

export default App
