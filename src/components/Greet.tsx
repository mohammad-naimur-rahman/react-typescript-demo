import { GreetProps } from './Greet.types'

const Greet = ({ name, messageCount, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h3>Boolean type props: {isLoggedIn ? 'Logged in' : 'Not logged in'}</h3>
      <h2>
        String type props: Welcome {name}! You have {messageCount ? messageCount : '0 (optional props)'} unread
        messages.
      </h2>
      <hr />
    </div>
  )
}

export default Greet
