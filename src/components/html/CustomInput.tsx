import { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'>

const CustomInput = ({ ...props }: InputProps) => {
  return <input {...props} />
}

export default CustomInput
