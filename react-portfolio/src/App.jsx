import { useState } from 'react'
import './App.css'

import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Header />
      <Project />
      <Footer />
    </>
  )
}

export default App
