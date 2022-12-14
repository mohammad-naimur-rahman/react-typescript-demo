import React, { ComponentType } from 'react'
import Login from './Login'
import { ProfileProps } from './Profile'

const Private = ({ isLoggedIn, Component }: { isLoggedIn: boolean; Component: ComponentType<ProfileProps> }) => {
  if (isLoggedIn) {
    return (
      <>
        <Component name='Naimur' />
        <hr />
      </>
    )
  } else {
    return (
      <>
        <Login />
        <hr />
      </>
    )
  }
}

export default Private
