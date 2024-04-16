import { useState } from 'react'

const UserChallenge = () => {
  const userData = { name: 'general kenobi' }

  const [user, setUser] = useState(null)

  const login = () => {
    setUser(userData)
  }
  const logout = () => {
    setUser(null)
  }

  return (
    <div>
      {user ? <h4>hello there, {user.name}</h4> : <h4>you are a bold one</h4>}
      {user ? (
        <button
          className='btn'
          onClick={() => {
            logout()
          }}
        >
          time to abandon ship!
        </button>
      ) : (
        <button
          className='btn'
          onClick={() => {
            login()
          }}
        >
          my powers have doubled since the last time we met, count
        </button>
      )}
    </div>
  )
}

export default UserChallenge
