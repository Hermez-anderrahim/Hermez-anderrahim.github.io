import React , {useState} from 'react'
import Boxes from './boxe/boxes'
import "./List.css"

export const List = () => {

  
    const [List,setList] = useState([]) 
    const [input , setInput ] =  React.useState("")

    const addItemsTolist = () => {
        const newItem = { id: List.length + 1,  done:false , text :input ,show:true };    
        setList([...List,newItem])
        setInput("")
    }

     const toggleDone =(id)=>{
    setList((item) => {
      return item.map( (data)=>{
        if (data.id != id) {
          return data;
        } else {
          return ({ ...data, done: !data.done });
        }
      }
      )
      })
      
}
    
    
     const DeleteItemsFromList = (id) =>{
    setList(item=>{
      return item.map(data=>{
        if (data.id === id) {
          return ({...data,show:!data.show})
        }else{
          return data
        }
      })
    })
     
   }
  
   const ListArray = Object.values(List) //transforming Notes into ann array so we can read it with .map
    const show = ListArray.map((item)=>{
        if (item.show == true) {
       return( <Boxes key={item.id} data={item} click={toggleDone} erase={DeleteItemsFromList}/>)
        }
   } 
       )
 

  return (
    <div className='List'>
        
      <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Write a task"/>
      <button onClick={addItemsTolist} className=''>add Item</button>
      <div className='notes'>
      {show}
      </div>     
      
        
    </div>
  )
}
