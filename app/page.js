"use client"
import React, { useState, useEffect } from 'react'

const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
 
  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {task, desc}])
    settask("")
    setdesc("")
    console.log(mainTask)
  }
  
  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>
  if(mainTask.length > 0){
    renderTask = mainTask.map((t,i)=>{
      return(
        <>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='font-bold text-2xl'>{t.task}</h1>
            <h4 className='text-slate-600'>{t.desc}</h4>
          </div>
          <button 
          className='bg-green-500 px-2 py-1 rounded-md text-white' 
          onClick={()=>{
            {deleteHandler(i)}
          }}
          >Done</button>
        </div>
        <hr/>
        </>
      )
    })
  }
  return (
    <>
    <div className='bg-blue-400 text-white py-5 mb-2'>
      <h1 className='font-bold text-2xl text-center '>Soumita's To Do List</h1> 
      
    </div>
    

    <form 
      className=' m-5 flex flex-col gap-2 justify-center items-center'
      onSubmit={submitHandler}
    >
      <input 
        type="text" placeholder="Add a todo" 
        className='w-1/2 border-2 p-3 rounded-md' 
        value={task}
        onChange={(e)=>{
          settask(e.target.value)
        }}
      />
      <input 
        type="text" placeholder="Add description" className='w-1/2 border-2 p-2 rounded-md'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }} 
      />
      <button className='bg-green-500 px-5 py-2 rounded-2xl text-white my-2'>Add Task</button>
    </form>
    <hr/>
    <div className='p-6 bg-zinc-100 m-4 shadow-md rounded-md'>
        <ul>{renderTask}</ul>
    </div>
    </>
  )
}

export default page
