import React, { useEffect, useRef } from 'react'

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!)
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className='px-5'>
      <h3>useRef()</h3>
      <input type='text' className='form-control' ref={inputRef} />
      <hr />
    </div>
  )
}

export default DomRef
