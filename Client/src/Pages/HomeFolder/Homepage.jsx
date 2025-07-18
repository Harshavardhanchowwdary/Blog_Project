import React from 'react'
import { useState, useEffect } from 'react'
import './Homepage.css'
import blogs from '../../Utils/MockData'
import TrendingBlogs from '../../Components/TrendingBlogs'
import {Link} from 'react-router-dom'
function Homepage() {
  return (
    <div>

      <div className="Maindivcard">
        <h1 className='Mainheading'>Blogs From This Categories</h1>
        <div className="catergeriesSection">
          <Link to="/CategoryBlogs/Programming"><div className="card shadow-lg" style={{width: "18rem"}}>
            <img src="/media/programming.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-center">Programming</h5>
                
              </div>
          </div>
          </Link>

          <Link to="/CategoryBlogs/Travelling"><div className="card shadow-lg" style={{width: "18rem"}}>
            <img src="/media/Travelling.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-center">Travelling</h5>
                
              </div>
          </div>
          </Link>
          <Link to="/CategoryBlogs/Workouts"><div className="card shadow-lg" style={{width: "18rem"}}>
            <img src="/media/Fitness.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-center">Fitness</h5>
                
              </div>
          </div>
          </Link>
        </div>
        <br/>
        <h1 className="Trending">Trending Blogs</h1>
            <div className="TrendingBlogsSection">
        
        {
          blogs.map(blog =>
            <TrendingBlogs blogs={blog} key={blog.id}/>
          )
        }
        </div>
      </div>
  
    </div>
  )
}

export default Homepage