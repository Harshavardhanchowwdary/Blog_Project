import React from 'react'

function TrendingBlogs({blogs}) {
    let image = '';
    let title = '';
    let previewDescription = '';    
    switch(blogs.category) {
        case 'Programming':
            image = 'programming.jpg';
            title = blogs.title;
            previewDescription = blogs.previewDescription;
            break;
        case 'Travelling':
            image = 'Travelling.jpg';
            title = blogs.title;
            previewDescription = blogs.previewDescription;
            break;
        case 'Fitness':
            image = 'Fitness.jpg';
            title = blogs.title;
            previewDescription = blogs.previewDescription;
            break;
        case 'Cooking':
            image = 'cooking.jpg'; 
            title = blogs.title;
            previewDescription = blogs.previewDescription;
            break;
        case 'Health':
            image = 'Health.jpg';
            title = blogs.title;
            previewDescription = blogs.previewDescription;
            break;
        case 'Workouts':
            image = 'workout.jpg';
            title = blogs.title;
            previewDescription = blogs.previewDescription;
            break;  
        default:
            image = '';
            title = '';
            previewDescription = '';
            break;
    }
    
  return (
    <div>
        <div className="mainterblogs">
            <div className="card shadow-lg" style={{width: "18rem"}}>
            <img src={`/media/${image}`} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-center">{blogs.category}</h5>
                <p className="card-text">{blogs.title}</p>
                <p className="card-text">{blogs.previewDescription}</p>

              </div>
          </div>
        </div>
    </div>
  )
}

export default TrendingBlogs