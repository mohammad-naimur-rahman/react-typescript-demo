import { MouseEvent } from 'react'

type ButtonProps = {
  handleClick: (e: MouseEvent<HTMLButtonElement>, id: number) => void
  children: string
}

const Button = ({ handleClick, children }: ButtonProps) => {
  return (
    <div>
      <button className='btn btn-primary' onClick={e => handleClick(e, 1)}>
        {children}
      </button>
      <hr />
    </div>
  )
}

export default Button
