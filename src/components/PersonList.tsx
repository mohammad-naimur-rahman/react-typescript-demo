type nameList = {
  names: {
    first: string
    last: string
  }[]
}

const PersonList = ({ names }: nameList) => {
  return (
    <div>
      {names.map(({ first, last }, i) => (
        <h4 key={first}>
          {i + 1}. {first} {last}
        </h4>
      ))}
    </div>
  )
}

export default PersonList
