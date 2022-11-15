import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'

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
      <Greet name='Naimur' messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  )
}

export default App
