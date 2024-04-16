import { useState } from 'react'

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')
  const [user, setUser] = useState({ name: 'john' })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <h2>{text || 'default value'}</h2>
      {text && (
        <div>
          <h2>whatever</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponent name={user.name} />}
      <h2 style={{ marginTop: '4rem' }}>Ternary Operator</h2>
      <button
        className='btn'
        onClick={() => {
          setIsEditing(!isEditing)
        }}
      >
        {isEditing ? 'edit' : 'add'}
      </button>
      {user ? (
        <div>
          <h2>whatever</h2>
          <h2>{name}</h2>
        </div>
      ) : (
        <div>
          <h2>Log in bro</h2>
        </div>
      )}
    </div>
  )
}

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>whatever we return</h2>
      <h2>{name}</h2>
    </div>
  )
}

export default ShortCircuitExamples
