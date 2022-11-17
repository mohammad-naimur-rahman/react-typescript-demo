import React, { useState } from 'react'
type AuthUser = {
  name: string
  email: string
}

const User = () => {
  const [user, setuser] = useState<AuthUser | null>(null)
  // const [user, setuser] = useState<AuthUser>({} as AuthUser) // Type assertion
  const handleLogin = () => {
    setuser({
      name: 'Naimur',
      email: 'naimur@naimur.com',
    })
  }
  const handleLogout = () => {
    setuser(null)
  }
  return (
    <div>
      <h2>useState() future value</h2>
      <div className='btn-group'>
        <button className='btn btn-success' onClick={handleLogin}>
          Login
        </button>
        <button className='btn btn-danger' onClick={handleLogout}>
          Logout
        </button>
      </div>
      {user?.name ? <h3>User name is {user?.name}</h3> : <h3>User is not logged in</h3>}
      {user?.email ? <h3>User email is {user?.email}</h3> : null}
      <hr />
    </div>
  )
}

export default User
