
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import Vehicles from './pages/Vehicles'
import Performance from './pages/Performance'
import Contact from './pages/Contact'
import "bootstrap/dist/css/bootstrap.min.css";




function App() {

  return (
    <>
    <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/vehicles' element={<Vehicles/>}/>
        <Route path='/performance' element={<Performance/>}/>
        <Route path='contact' element={<Contact/>}/>


      </Routes>
    <Footer/>

  
    </>
  )
}

export default App
