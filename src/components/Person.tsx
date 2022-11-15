const Person = ({ name }: { name: { first: string; last: string } }) => {
  const { first, last } = name
  return (
    <div>
      <h2>
        Fullname: {first} {last}
      </h2>
    </div>
  )
}

export default Person
