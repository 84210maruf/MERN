import React, { useEffect, useState, useContext } from 'react'
import { UserContext, SuperUserContext } from './UseContextHook';


function ChildComponant() {


  const SuperUser = useContext(SuperUserContext);
  const user = useContext(UserContext);


  return (
    <div>
      <h3>use the context Nestedly..</h3>

      The users is : {user.map((n)=><p>{n}</p>)}
      <hr />
      And Super User is: {SuperUser}

    </div>
  )
}

export default ChildComponant
