import React, { createContext, useState } from 'react'

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [data, setData] = useState({
        title: "NoteFromContext",
        priority: "low",
        dueDate: "2025-12-18",
        description: "This is Description of the NoteFromContext"
    });
  return (
    <div>
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default UserProvider