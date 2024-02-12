import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HooksApp from './hooksApp'
import CounterApp from './01-useState/CounterApp'
import CounterWithCustomeHooks from './01-useState/CounterWithCustomeHooks'
import SimpleForm from './02-useEffect/SimpleForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp/> */}
    {/* <CounterWithCustomeHooks/> */}
    <SimpleForm/>
    {/* <HooksApp/> */}
  </React.StrictMode>,
)
