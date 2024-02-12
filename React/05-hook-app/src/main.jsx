import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HooksApp from './hooksApp'
import CounterApp from './01-useState/CounterApp'
import CounterWithCustomeHooks from './01-useState/CounterWithCustomeHooks'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomeHooks/>
    {/* <CounterApp/> */}
    {/* <HooksApp/> */}
  </React.StrictMode>,
)
