import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 36,
    hobby: 'Board Games',
  })

  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(36)
  const [hobby, setHobby] = useState('Board Games')

  const showJohn = () => {
    setPerson({
      name: 'John',
      age: 11,
      hobby: 'Owning you at Halo 2',
    })
  }

  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className='btn' onClick={showJohn}>
        Show john
      </button>
    </>
  )
}

export default UseStateObject
