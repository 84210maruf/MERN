import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from './UseContextHook';


function ChildComponant() {


  
  const {user, superUser} = useContext(UserContext);


  return (
    <div>
      <h3>use the context Nestedly..</h3>

      The users is : {user.map((n)=><p>{n}</p>)}
      <hr />
      And Super User is: {superUser}

    </div>
  )
}

export default ChildComponant
