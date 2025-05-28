import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Admin from './components/Admin'
import Create from './components/Create'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Update from './components/Update'
import Header from './shared/Header'
import Footer from './shared/Footer'
import './App.css'

function App({user, setUser}) {
  // const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user") || {}))

  const handleUser = () => {
    setUser(localStorage.setItem("user", user))
  }

  return (
    <div className="App">
      <Header handleUser={[user, setUser]} />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/admin" element={<Admin />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login handleUser={[user, setUser]} />} />
          <Route path="/signup" element={<Signup />} handleUser={[user, setUser]} />
          <Route path="/update" element={<Update />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
