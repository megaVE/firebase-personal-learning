import { useRef } from "react";
import { createOperation } from "../hooks/useCrudFirebase";

import FormInput from "./FormInput";

export default function RegisterForm({ setShouldFetch }) {

  const nameRef = useRef(null)
  const ageRef = useRef(null)
  
  async function handleRegister(e) {
    e.preventDefault();

    const newUser = {
      name: nameRef.current.value,
      age: ageRef.current.value,
    }
    console.log(newUser)

    await createOperation("users", newUser)

    setShouldFetch(true)
  }

  return (
    <form onSubmit={handleRegister}>
      <FormInput
        id="name"
        label="Name: "
        type="text"
        fieldRef={nameRef}
      />
      <FormInput
        id="age"
        label="Age: "
        type="number"
        fieldRef={ageRef}
      />
      <input type="submit" value="Register" />
    </form>
  )
}
