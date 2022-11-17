import { Name } from './Person.types'

type nameList = {
  names: Name[]
}

const PersonList = ({ names }: nameList) => {
  return (
    <div>
      <h3>Array type props:</h3>
      {names.map(({ first, last }, i) => (
        <h4 key={first}>
          {i + 1}. {first} {last}
        </h4>
      ))}
      <hr />
    </div>
  )
}

export default PersonList
