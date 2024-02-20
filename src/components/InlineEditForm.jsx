import { useState } from "react";

import FormInput from "./FormInput";
import { validateUser } from "../utils/validation";

export default function InlineEditForm({ user }) {
  const [name, setName] = useState(user.name)
  const [age, setAge] = useState(user.age)

  function handleEdit(e) {
    e.preventDefault()

    const updatedUser = { name, age }

    try {
      validateUser(updatedUser)
    } catch (error) {
      console.log(error)
      return alert(error)
    }

    alert("Ok" + " " + name + " " + age)
  }

  return (
    <form onSubmit={handleEdit}>
      <h3>Edit User</h3>
      <p>
        id: <b>{user.id}</b>
      </p>
      <FormInput
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormInput
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input type="submit" value="Update" />
    </form>
  )
}