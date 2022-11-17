import { FC, useState } from 'react'

const LoggedIn: FC = () => {
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false)

  const handleLogin = () => {
    setisLoggedIn(true)
  }
  const handleLogout = () => {
    setisLoggedIn(false)
  }
  return (
    <div>
      <h2>useState()</h2>
      <div className='btn-group'>
        <button className='btn btn-success' onClick={handleLogin}>
          Login
        </button>
        <button className='btn btn-danger' onClick={handleLogout}>
          Logout
        </button>
      </div>
      <h3>User is {isLoggedIn ? 'logged in' : 'logged out'}</h3>
      <hr />
    </div>
  )
}

export default LoggedIn
