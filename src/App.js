import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Profile from './components/pages/Profile'
import Contact from './components/pages/Contact'
import Errorpage from './components/pages/Errorpage'

import './components/stylesheets/layout.css'
import './components/stylesheets/auth.css'

const App = () => {
  return (
    <Router>
      <>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/contact" exact element={<Contact />} />

            <Route path="*" element={<Errorpage />} />
          </Routes>
        </main>

        <Footer />
      </>
    </Router>
  )
}

export default App