type GreetProps = {
  name: string
  messageCount: number
  isLoggedIn: boolean
}

const Greet = ({ name, messageCount, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h3>{isLoggedIn ? 'Logged in' : 'Not logged in'}</h3>
      <h2>
        Welcome {name}! You have {messageCount} unread messages.
      </h2>
    </div>
  )
}

export default Greet
