import React , {createContext}from 'react'

 export const mycontext = createContext(null) 

 export const MyContextProvider = (props) => {
     
    const [links ,setlinks] = React.useState([{id:1, text: `To-Do 1`,show:true, showList:true}])
   
     const values =  {links,setlinks}
     
    return(
        <mycontext.Provider value={values}>{props.children}</mycontext.Provider>

    )
}
