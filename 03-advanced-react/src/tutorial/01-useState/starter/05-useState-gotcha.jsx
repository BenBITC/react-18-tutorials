import { useState } from 'react'

const UseStateGotcha = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h2>{count}</h2>
      <button
        className='btn'
        onClick={() => {
          setCount((prevState) => {
            const newState = prevState + 1
            console.log(newState)
            return newState
          })
        }}
      >
        click
      </button>
    </>
  )
}

export default UseStateGotcha
