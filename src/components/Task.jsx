import React from 'react'

export default function Task({title,description,deletetask,index}) {
  return (
    <>
  

    <div class="card my-5">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
    <button  className="btn btn-primary" onClick={()=>{deletetask(index)}}>Delete</button>
      </div>
    </div>
 
   
    </>
  )
}
