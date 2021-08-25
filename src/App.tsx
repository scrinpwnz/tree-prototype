import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Tree } from './notRedactorTree/ui/Tree'
import { mock } from './notRedactorTree/mock'
import { initializeEntities } from './notRedactorTree/utils/initializeEntities'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Tree data={initializeEntities(mock)} />
      </header>
    </div>
  )
}

export default App
