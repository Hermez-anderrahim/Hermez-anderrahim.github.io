import React from 'react'
import "./boxes.css"
const Boxes = (props) => {
    const {id,done,text} = props.data 
    const Boxstyles = {
        backgroundColor: done ? "#6F6" :"white"
    }
    const ButtonStyles={
       backgroundColor: done ? "#6F6" :"white"
    }
    
  return (
    <div className='box' style={Boxstyles}>  
        
        <button onClick={()=> props.click(id)} className='add-item' style={ButtonStyles} > <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M19.8958 31.5625L37.5521 13.9063C37.9687 13.4896 38.4639 13.2812 39.0375 13.2812C39.6111 13.2812 40.1056 13.4896 40.5208 13.9063C40.9375 14.3229 41.1458 14.8181 41.1458 15.3917C41.1458 15.9653 40.9375 16.4597 40.5208 16.875L21.3542 36.0417C20.9375 36.4583 20.4514 36.6667 19.8958 36.6667C19.3403 36.6667 18.8542 36.4583 18.4375 36.0417L9.47917 27.0833C9.0625 26.6667 8.8625 26.1715 8.87917 25.5979C8.89583 25.0243 9.11319 24.5299 9.53125 24.1146C9.94792 23.6979 10.4431 23.4896 11.0167 23.4896C11.5903 23.4896 12.0847 23.6979 12.5 24.1146L19.8958 31.5625Z" fill="black"/>
         </svg> 
         </button>
      
        <div className='box-p'><p>{text}</p></div> 
      
        <button onClick={()=> props.erase(id)} className='delete-item' style={ButtonStyles}>
         <svg xmlns="http://www.w3.org/2000/svg" width="81" height="60" viewBox="0 0 59 81" fill="none">
         <path d="M14.75 44.55C13.9676 44.55 13.2173 44.1233 12.664 43.3638C12.1108 42.6043 11.8 41.5741 11.8 40.5C11.8 39.4259 12.1108 38.3957 12.664 37.6362C13.2173 36.8767 13.9676 36.45 14.75 36.45H44.25C45.0324 36.45 45.7827 36.8767 46.336 37.6362C46.8892 38.3957 47.2 39.4259 47.2 40.5C47.2 41.5741 46.8892 42.6043 46.336 43.3638C45.7827 44.1233 45.0324 44.55 44.25 44.55H14.75Z" fill="black"/>
         </svg>
         </button>
      
    </div>
  )
}
export default Boxes


