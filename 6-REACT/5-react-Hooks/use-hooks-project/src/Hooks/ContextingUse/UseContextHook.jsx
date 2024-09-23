import React, { createContext, useState } from 'react'
import ChildComponant from './ChildComponant';

// export const SuperUserContext = createContext();
export const UserContext = createContext();


function UseContextHook() {

  const [superUser, setSuperUser] = useState("Tarik");
  const [user, setUser] = useState(["Mahedi", "maruf"]);



  return (
    <UserContext.Provider value={{user, superUser}}>

      <div className='useContext'>
        <h3>useContext...</h3>
        <p>createContext hare..</p>

        <button onClick={() => setUser(["Myself"])}>{user}</button>

        <ChildComponant />

      </div>

    </UserContext.Provider>
  )
}

export default UseContextHook
