import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './shared/Header'
import Home from './components/Home'
import Footer from './shared/Footer'

import About from './components/About'
import Admin from './components/Admin'
import Create from './components/Create'
import Login from './components/Login'
import Signup from './components/Signup'
import Update from './components/Update'

function App() {
  let loggedIn = true
  const [user, setUser] = useState("")

  const handleUser = () => {
    setUser(localStorage.setItem("user", user))
  }

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={loggedIn ? <Login /> : "Sign In"} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/update" element={<Update />} />
          </Routes>
      <Footer />

    </div>
  )
}

export default App