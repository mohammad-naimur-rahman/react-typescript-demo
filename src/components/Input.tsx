import { ChangeEvent } from 'react'

type InputProps = {
  value: string
  id: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  label: string
  placeholder?: string
}

const defaultProps = {
  label: 'Label',
}

const Input = ({ onChange, value, id, label, placeholder }: InputProps & typeof defaultProps) => {
  return (
    <div>
      <h2>Input props:</h2>
      <div className='form-group px-5'>
        <label htmlFor={id}>{label}: </label>
        <input
          id={id}
          type='text'
          value={value}
          onChange={onChange}
          className='form-control'
          placeholder={placeholder}
        />
      </div>
      <h4>{value}</h4>
      <hr />
    </div>
  )
}
export default Input

Input.defaultProps = defaultProps
