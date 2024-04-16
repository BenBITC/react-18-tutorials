import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    let newUsers = [...users, { id: users.length + 1, name }]
    setUsers(newUsers)
  }

  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id)
    setUsers(newUsers)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      <h4>users</h4>
      <div className='user-container container'>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h5>{user.name}</h5>
              <button className='btn' onClick={() => removeUser(user.id)}>
                remove
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default UserChallenge
