import React, { useState } from 'react'
import Task from './Task'

function Home() {
    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    console.log(title)
    console.log(description)
    let onSubmitHandler = (e)=>{
        console.log('click')
        e.preventDefault()
        setTasks([...tasks,{title,description}])
    }
    let deletetask =(index)=>{
        const filteredArr = tasks.filter((val ,i)=>{
            return i!== index
        })
        console.log(filteredArr)
        setTasks(filteredArr)
    }
    
  return (
    <>
     <div className="container">
     <form className='py-5' onSubmit={onSubmitHandler} >
      <h1 className='text-center'>Daily Goals</h1>
  <div className="mb-3">
    <label className="form-label">Title</label>
    <input type='text' className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}/>
 
  </div>
  <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <div className="d-grid gap-2">
  <button className="btn btn-primary" type="submit">Add Task</button>

</div>
</form>
   {
    tasks.map((item,index)=>(
     
 
        <Task key={index} index={index} title={item.title} description={item.description} deletetask={deletetask} />
  
    ))
   }
     </div>
    </>
  )
}

export default Home
