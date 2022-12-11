import React, { useEffect, useRef, useState } from 'react'

const MutableRef = () => {
  const [timer, settimer] = useState<number>(0)
  const intervalRef = useRef<number | null>(null)

  const stopTimer = () => {
    intervalRef.current && window.clearInterval(intervalRef.current)
  }

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      settimer(prevTimer => prevTimer + 1)
    }, 1000)

    return () => {
      stopTimer()
    }
  }, [])

  return (
    <div className='gap-1'>
      <p>HookTimer - {timer}</p>
      <button className='btn btn-primary' onClick={stopTimer}>
        Stop Timer
      </button>
      <hr />
    </div>
  )
}

export default MutableRef
