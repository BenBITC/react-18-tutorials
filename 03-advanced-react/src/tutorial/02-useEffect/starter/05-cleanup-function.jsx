import { useEffect } from 'react'
import { useState } from 'react'

const CleanupFunction = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <h2>cleanup function</h2>
      <button
        className='btn'
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? 'hide' : 'show'}
      </button>
      {show && <AlertComponent />}
    </div>
  )
}

const AlertComponent = () => {
  // Interval-based function
  useEffect(() => {
    console.log('interesting behavior')
    const intervalId = setInterval(() => {
      console.log('interval happened')
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  // Scroll event listener
  useEffect(() => {
    const someFunc = () => {}
    window.addEventListener('scroll', someFunc)
    return () => window.removeEventListener('scroll', someFunc)
  }, [])

  return <div className='alert alert-danger'>Your alert is showing!</div>
}

export default CleanupFunction
