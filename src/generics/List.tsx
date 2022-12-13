type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}

export default function List<T extends { first: string; last: string; id: number }>({ items, onClick }: ListProps<T>) {
  return (
    <div>
      <h3>TypeScript Generics</h3>
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => onClick(item)}>
            {item.first} {item.last}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  )
}
