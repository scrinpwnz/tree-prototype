import React from 'react'
import logo from './logo.svg'
import mobxLogo from './mobxLogo.png'
import './App.css'
import { Tree } from './notRedactorTree/ui/Tree'
import { Content } from './notRedactorTree/ui/Content'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <img src={logo} className='App-logo' alt='logo' />
          <img src={mobxLogo} className='MobX-logo' alt='logo' />
        </div>

        <Tree />
        <Content />
      </header>
    </div>
  )
}

export default App
