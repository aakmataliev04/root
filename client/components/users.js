import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Users = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users').then(({ data }) => setUsers(data))
  }, [])
  return (
    <div>
      {users.map((el) => {
        return (
          <div key={el.id}>
            <div> {el.name} </div>
            <div> {el.phone} </div>
          </div>
        )
      })}
    </div>
  )
}

export default Users
