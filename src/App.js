import React from 'react'

import { useContext } from 'react'
import {ThemeContext} from './Context/Theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <AboutMe/>
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App