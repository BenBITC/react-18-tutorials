import { useState } from 'react'

const UseStateBasics = () => {
  const [count, setCount] = useState(0)
  const [clack, setClack] = useState(0)

  return (
    <>
      <h3>You clicked {count} times</h3>
      <button
        className='btn'
        onClick={() => {
          setCount(count + 1)
          console.log(count)
        }}
      >
        Count Higher!!
      </button>
      <h3>You clacked {clack} times</h3>
      <button
        className='btn'
        onClick={() => {
          setClack(clack + 1)
          console.log(clack)
        }}
      >
        Clack Higher!!
      </button>
    </>
  )
}

export default UseStateBasics
