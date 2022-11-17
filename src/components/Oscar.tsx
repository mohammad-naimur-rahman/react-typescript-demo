import { ReactNode } from 'react'

const Oscar = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2>Children props:</h2>
      <h2>Oscar goes to {children}</h2>
      <hr />
    </div>
  )
}

export default Oscar
