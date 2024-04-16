import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  return (
    <>
      <ul>
        {people.map((person) => {
          return (
            <li key={person.id}>
              <h2>{person.name}</h2>
              <button
                className='btn'
                onClick={() => {
                  setPeople(people.filter((entry) => entry.id != person.id))
                }}
              >
                remove
              </button>
            </li>
          )
        })}
      </ul>
      <br />
      <br />
      <br />
      <br />
      <button
        className='btn'
        onClick={() => {
          setPeople([])
        }}
      >
        clear items
      </button>
    </>
  )
}

export default UseStateArray
