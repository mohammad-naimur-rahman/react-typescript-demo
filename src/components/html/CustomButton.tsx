import { ComponentProps } from 'react'

type ButtonProps = {
  variant: 'primary' | 'secondary'
  children: string
} & Omit<ComponentProps<'button'>, 'children'>

const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <div>
      <h3>Wrapping HTML Elements</h3>
      <button className={`btn btn-${variant}`} {...rest}>
        {children}
      </button>
    </div>
  )
}

export default CustomButton
