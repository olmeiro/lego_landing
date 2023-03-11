import './App.css'

import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import SideContent from './components/SideContent'
import Footer from './components/Footer'
import Loader from './components/Loader'

import { useEffect, useState } from 'react'

function App() {useState
  const [timeLoader, settimeLoader] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      settimeLoader(false);
    },2000)
  }, [])
  
  return (
    <div className="page">
        <section className='container'>

          <NavBar />
          <MainContent/>
          <SideContent/>
          <Footer />
          <Loader />
        </section>
    </div>
  )
}

export default App
