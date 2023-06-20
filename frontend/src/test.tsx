import React from 'react'
import axios from 'axios'

export default function Test () {
  const createAccount = () => {
    const account = {
      email: 'email@gmail.com',
      username: 'name',
      password: 'password',
      bio: 'aaaaa'
    }
    axios
      .post('http://localhost:1998/register', account, {
        headers: {'Content-Type' : 'application/json'}
      })
      .then(res => {
        console.log(res)
      })
  }
  return (
    <div>
      <button onClick={createAccount}>submit</button>
    </div>
  )
}
