import { useState } from 'react'

const ToggleChallenge = () => {
  const [user, setUser] = useState({
    name: 'kenough',
    age: 42,
    job: 'beach',
  })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <h2>toggle challenge</h2>
      {isEditing ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '30rem',
            margin: '2rem auto',
          }}
        >
          <button
            className='btn'
            onClick={() => {
              if (user.name === 'kenough') {
                setUser({ ...user, name: 'just ken' })
              } else {
                setUser({ ...user, name: 'kenough' })
              }
            }}
          >
            Set name to {user.name === 'kenough' ? 'just ken' : 'kenough'}
          </button>
          <button
            className='btn'
            onClick={() => {
              if (user.age === '42') {
                setUser({ ...user, age: '69' })
              } else {
                setUser({ ...user, age: '42' })
              }
            }}
          >
            Set age to {user.age === '42' ? '69' : '42'}
          </button>
          <button
            className='btn'
            onClick={() => {
              if (user.job === 'beach') {
                setUser({ ...user, job: 'meaningless' })
              } else {
                setUser({ ...user, job: 'beach' })
              }
            }}
          >
            Set job to {user.job === 'beach' ? 'meaningless' : 'beach'}
          </button>
          <button
            className='btn'
            onClick={() => {
              setIsEditing(false)
            }}
            style={{
              width: '15rem',
              margin: '2rem auto',
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <h3>Name: {user.name}</h3>
          <h3>Age: {user.age}</h3>
          <h3>Job: {user.job}</h3>
          <button
            className='btn'
            onClick={() => {
              setIsEditing(true)
            }}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  )
}

export default ToggleChallenge
