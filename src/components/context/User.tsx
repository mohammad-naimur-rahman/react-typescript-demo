export const UserForContext = () => {
  const handleLogin = () => {}
  const handleLogout = () => {}

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User name is</p>
    </div>
  )
}
