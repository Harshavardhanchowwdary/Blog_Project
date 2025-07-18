import React, { use } from 'react'
import './Dedicated.css'
import blogs from '../../Utils/MockData'
import { useParams } from 'react-router-dom'

function Dedicated() {
    const { id } = useParams();
    const blog = blogs.find(blog => String(blog.id) === String(id));
        if (!blog) {    
            console.error('Blog not found');
            return <div className='text-center Blogerror'>Blog Not Found!</div>
        }           
    

    return (
        <div>
            <h1>Dedicated Blogs Page</h1>
            <h2>User ID: {id}</h2>
            <div className='DedicatedBlog'>
                <p className='CategoryHeading'>Category:{blog.category}</p>
                <p className='CategoryHeading'>Title:{blog.title}</p>
                <p className='text-center Predbuit' >{blog.previewDescription}</p>
                <p>{blog.content}</p>
            </div>
        </div>
    );
} 
export default Dedicated;