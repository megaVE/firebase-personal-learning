import { useEffect, useState } from "react";
import { readOperation } from "./hooks/useCrudFirebase";

import RegisterForm from "./components/RegisterForm";
import UsersList from "./components/UsersList";

export default function App() {
  const [users, setUsers] = useState([])
  const [shouldFetch, setShouldFetch] = useState(true)

  useEffect(() => {
    if(!shouldFetch) return
    
    async function fetchUsers() {
      const data = await readOperation("users")
      
      setUsers(data)
    }

    setShouldFetch(false)
    fetchUsers()
  }, [shouldFetch])

  return (
    <>
      <h1>Firebase Learning</h1>
      <div className="section-container">
        <h2>Register Form:</h2>
        <RegisterForm setShouldFetch={setShouldFetch} />
      </div>
      <div className="section-container">
        <h2>Current Database:</h2>
        <UsersList users={users} setShouldFetch={setShouldFetch} />
      </div>
    </>
  )
}
