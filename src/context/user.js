import React, { createContext, useState } from 'react'

export const UserContext = createContext({})
UserContext.displayName = 'Usuario'

export function UserProvider ({ children }) {
  const [userName, setUserName] = useState('')
  const [userImage, setUserImage] = useState('')

  return (
    <UserContext.Provider value={{ userName, setUserName, userImage, setUserImage }}>
      {children}
    </UserContext.Provider>
  )
}
