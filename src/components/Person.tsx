import { PersonTypes } from './Person.types'

const Person = ({ name }: PersonTypes) => {
  const { first, last } = name
  return (
    <div>
      <h2>
        Object type props: {first} {last}
      </h2>
      <hr />
    </div>
  )
}

export default Person
