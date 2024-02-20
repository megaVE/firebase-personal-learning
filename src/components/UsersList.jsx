import { useState } from "react"

import { deleteOperation } from "../hooks/useCrudFirebase"

import InlineEditForm from "./InlineEditForm"

export default function UsersList({ users, setShouldFetch }) {
  const [currentEdit, setCurrentEdit] = useState(null)

  async function handleDeleteUser(id) {
    await deleteOperation("users", id)
    setShouldFetch(true)
  }

  function handleEditUser(id) {
    setCurrentEdit(state => state === id ? null : id)
  }
  
  if(!users) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <ul className="users-container">
      {users.map(user => (
        <li key={user.id}>
          <span>[{user.id}] <b>Name</b>: "{user.name}" | <b>Age</b>: "{user.age}" </span>
          <button style={{marginRight: "5px"}} onClick={() => handleEditUser(user.id)}>Edit</button>
          <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          {currentEdit === user.id && (
            <InlineEditForm user={user} />
          )}
        </li>
      ))}
    </ul>
  )
}