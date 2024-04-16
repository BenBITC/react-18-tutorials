import { useState } from 'react'
import Person from './components/Person'
import data from './data'

const App = () => {
  const [people, setPeople] = useState(data)
  console.log(people)
  return (
    <main>
      <div className='container'>
        <h3>{people.length} birthdays today</h3>
        <div className='list'>
          {people.map((person) => {
            return <Person key={person.id} {...person} />
          })}
        </div>
        <button
          className='btn btn-block'
          onClick={() => {
            setPeople([])
          }}
        >
          Clear All
        </button>
      </div>
    </main>
  )
}
export default App
