import React from 'react'
import {useLocation} from 'react-router-dom';


export const Data = () => {
  const location = useLocation();

//    console.log('Data' , location.form.state.email)
  
   return (
     <div className = 'data'>
        <h1>FullName: </h1>

        <h1>Email:  </h1>

        <h1>Password: </h1>

        <h1>Phone: </h1>

     </div>
  )
}
