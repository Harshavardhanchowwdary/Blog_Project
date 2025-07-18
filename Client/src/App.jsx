import { useState } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Createuser from './Pages/CreateUser/Createuser'
import Userdetails from './Pages/LoginFolder/Login'
import Homepage from './Pages/HomeFolder/Homepage'
import NewBlog from './Pages/NewBlog/NewBlog'
import CategoryBlogs from './Pages/CategoryFolder/CategoryBlogs'
import Dedicated from './Pages/Dedicated Blogs/Dedicated'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Banner from './Components/Banner'
function App() {

  return (
    <>
      <Routes>
        <Route path='/Register' element = {<Createuser/>}/>
        <Route path='/Login' element = {<Userdetails/>}/>
        <Route
        path="/*"
        element={
          <>
            <Navbar />
            <Banner />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/NewBlog" element={<NewBlog />} />
              <Route path="/CategoryBlogs/:category" element={<CategoryBlogs />} /> 
              <Route path="/Dedicated/:id" element={<Dedicated />} />
            </Routes>
            <Footer />
          </>
        }
      />
      </Routes>
      
    </>
  )
}

export default App
