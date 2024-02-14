import React from 'react'
import { UserContext } from './userContext'
import { useState } from 'react'


const UserProvider = ({children}) => {

  const [user, setUser] = useState()


  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider