import React, { CSSProperties } from 'react'
type ContainerProps = {
  styles: CSSProperties
}

const Container = ({ styles }: ContainerProps) => {
  return (
    <div style={styles}>
      <h2>Styles prop</h2>
      <hr />
    </div>
  )
}

export default Container
