import { useState } from "react"

export function userRegisterViewModel() {
  const [userData, setUserData] = useState({ name: 'John Doe'})

 return {
  userData,
  setUserData
 }
}