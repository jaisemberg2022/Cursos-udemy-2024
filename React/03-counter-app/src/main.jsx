import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstApp } from './FirstApp';

function App(){
    return (<h1>Hola mundo</h1>);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>
)