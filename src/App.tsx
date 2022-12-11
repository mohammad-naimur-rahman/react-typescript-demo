import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Container from './components/Container'
import { Box } from './components/context/Box'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { UserContextProvider } from './components/context/UserContext'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Input from './components/Input'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import { Counter } from './components/state/Counter'
import LoggedIn from './components/state/LoggedIn'
import User from './components/state/User'
import { Status } from './components/Status'
import { UserForContext } from './components/context/User'

function App() {
  const personName = {
    first: 'Naimur',
    last: 'Rahman',
  }

  const nameList = [
    {
      first: 'Katrina',
      last: 'Kaif',
    },
    {
      first: 'Sabila',
      last: 'Nur',
    },
    {
      first: 'Katherine',
      last: 'Langford',
    },
  ]

  const [name, setName] = useState<string>('')

  return (
    <ThemeContextProvider>
      <div className='App'>
        <h1 className='heading'>React TypeScript Demo</h1>
        <Greet name='Naimur' messageCount={10} isLoggedIn={false} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status='success' />
        <Oscar>
          <Heading>Naimur Rahman</Heading>
        </Oscar>
        <Greet name='Naimur' isLoggedIn={false} />
        <Button handleClick={(e, id) => console.log('I clicked it, yay!', e, id)}>
          Event type: Click me to log 1 in the console
        </Button>
        <Input id='input' value={name} label='Name' onChange={e => setName(e.target.value)} />
        <Container styles={{ color: 'tomato' }} />
        <LoggedIn />
        <User />
        <Counter />
        <Box />
        <UserForContext />
      </div>
    </ThemeContextProvider>
  )
}

export default App
