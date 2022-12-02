import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import jokesData from './jokesData'
import Joke from './Joke'

function App() {
  const jokesElements = jokesData.map((j)=> (<Joke key={j.setup} setup={j.setup} punchline={j.punchline}/>))
  console.log(jokesElements)
  return (
    <div>
      {jokesElements}
    </div>
  )
}

export default App

