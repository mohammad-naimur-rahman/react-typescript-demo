type HorizontalPositon = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
  position: Exclude<`${VerticalPosition}-${HorizontalPositon}`, 'center-center'> | 'center'
}

const Toast = ({ position }: ToastProps) => {
  return (
    <div>
      <h3>Template Literals</h3>
      <p>Toast Notificaion Postion - {position}</p>
      <hr />
    </div>
  )
}

export default Toast
