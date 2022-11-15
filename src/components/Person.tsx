const Person = ({ name }: { name: { first: string; last: string } }) => {
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
