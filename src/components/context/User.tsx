export const UserForContext = () => {
  const handleLogin = () => {}
  const handleLogout = () => {}

  return (
    <div>
      <div className='btn-group mt-2'>
        <button className='btn btn-primary' onClick={handleLogin}>
          Login
        </button>
        <button className='btn btn-warning' onClick={handleLogout}>
          Logout
        </button>
      </div>
      <p>User name is</p>
    </div>
  )
}
