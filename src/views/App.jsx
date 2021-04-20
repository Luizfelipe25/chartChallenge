import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import Navbar from '../components/Bar/Navbar'
import Content from '../components/Content'

const App = props => {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Content />
      </BrowserRouter>

    </div>
  )
}

export default App