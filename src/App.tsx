import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Tree } from './notRedactorTree/ui/Tree'
import { Content } from './notRedactorTree/ui/Content'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Tree />
        <Content />
      </header>
    </div>
  )
}

export default App
