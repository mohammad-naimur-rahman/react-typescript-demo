import './App.css'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import { Status } from './components/Status'

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

  return (
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
    </div>
  )
}

export default App
