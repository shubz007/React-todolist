'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState('')
  const [desc, setDesc] = useState('')
  const [mainTask, setMainTask] = useState([])
  const submitHandler = e => {
    console.log(title)
    console.log(desc)
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])
    setDesc('')
    settitle('')
  }

  const deleteHandler =(i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask);
  }

  let renderTask = <h2>"Tasks Here"</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li kay={i} className='flex items-center justify-between'>
          <div className='flex items-center justify-between  w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h5 className='text-xl font-semibold'>{t.desc}</h5>
            <button className='bg-red-500  text-white  p-2 rounded font-bold text-2x mb-8'
            onClick={()=>{
              deleteHandler()
            }}>
              Tasks Completed
            </button>
          </div>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text 8xl text-center text-white p-5'>
        Shubham's TodoList
      </h1>
      <form onSubmit={submitHandler}>
        <input
          placeholder='Enter Title'
          className=' text-2xl border-zinc-800 border-4 m-5 px-6 py-1 '
          value={title}
          onChange={e => {
            settitle(e.target.value)
          }}
        />

        <input
          placeholder='Enter Task Description'
          className=' text-2xl border-zinc-800 border-4 m-5 px-6 py-1'
          value={desc}
          onChange={e => {
            setDesc(e.target.value)
          }}
        />

        <button className='bg-black text-white m-5 p-2 rounded font-bold text-2xl'>
          Add Task
        </button>
      </form>

      <hr />
      <div className='p-8 bg-slate-200 font-bold text-2xl text-center'>
        <ul>{renderTask} </ul>
      </div>
    </>
  )
}
export default page
