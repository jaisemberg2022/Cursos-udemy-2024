import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HooksApp from './hooksApp'
import CounterApp from './01-useState/CounterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp/>
    {/* <HooksApp/> */}
  </React.StrictMode>,
)
