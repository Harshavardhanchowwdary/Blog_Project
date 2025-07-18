import React, { use } from 'react'
import { useState, useEffect } from 'react'
import './CategoryBlogs.css'
import blogs from '../../Utils/MockData'
import TrendingBlogs from '../../Components/TrendingBlogs'
import { useParams } from 'react-router-dom'
function CategoryBlogs() {
  const [categoryBlogs, setCategoryBlogs] = useState('Programming'); // Default category 
  const { category } = useParams(); // Get category from URL parameters 
  useEffect(()=>{
    if(category) {
      setCategoryBlogs(category); // Update categoryBlogs state with the category from URL
    }
  },[]);  
  return (
    <div>
      <h1>{categoryBlogs}</h1>
        <div className="TrendingBlogsSection">
        {
          blogs.map(blog => blog.category === categoryBlogs &&
            <TrendingBlogs blogs={blog} key={blog.id}/>
          )
        }
        </div>
    </div>
  )
}
export default CategoryBlogs