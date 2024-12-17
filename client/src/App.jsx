import HomePage from './pages/Homepage'
import Navbar from './pages/Navbar'
import { useState } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('Korean')
  console.log(language);
  return (
    <div className='flex w-full flex-col'>
      <Navbar language={language} setLanguage={setLanguage}/>
      <HomePage />
    </div>
  )
}

export default App
