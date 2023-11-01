import React from 'react'
import "./To-Do-list.css"
export const ToDo = (props) => {
    const {id,text} = props.data

  return (
    <div className='Todo'>
      <button className='To-do-link' onClick={()=>props.switch(id)}>
        <h1 className='Text'>{text}</h1>
     </button>

    <button  onClick={()=>props.deleteLink(id)} className='deleteButton'>
           <svg xmlns="http://www.w3.org/2000/svg" width="47" height="25" viewBox="0 0 47 73" fill="none">
   <path d="M11.75 40.15C11.1267 40.15 10.529 39.7655 10.0883 39.0809C9.64758 38.3964 9.39999 37.468 9.39999 36.5C9.39999 35.532 9.64758 34.6036 10.0883 33.9191C10.529 33.2346 11.1267 32.85 11.75 32.85H35.25C35.8733 32.85 36.471 33.2346 36.9117 33.9191C37.3524 34.6036 37.6 35.532 37.6 36.5C37.6 37.468 37.3524 38.3964 36.9117 39.0809C36.471 39.7655 35.8733 40.15 35.25 40.15H11.75Z" fill="white"/>
   </svg>  
    </button>

    </div>
  )
}
