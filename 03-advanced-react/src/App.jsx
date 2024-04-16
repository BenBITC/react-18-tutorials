import { useState } from 'react'
import ControlledInputs from './tutorial/06-forms/starter/01-controlled-inputs'
import UserChallenge from './tutorial/06-forms/starter/02-user-challenge'
import MultipleInputs from './tutorial/06-forms/starter/03-multiple-inputs'
import OtherInputs from './tutorial/06-forms/starter/04-other-inputs'
import UncontrolledInputs from './tutorial/06-forms/starter/05-form-data'

function App() {
  const options = [
    { id: 1, module: <ControlledInputs /> },
    { id: 2, module: <UserChallenge /> },
    { id: 3, module: <MultipleInputs /> },
    { id: 4, module: <OtherInputs /> },
    { id: 5, module: <UncontrolledInputs /> },
  ]
  const [module, setModule] = useState(<h2>Choose a Module</h2>)

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: '2rem',
        }}
      >
        {options.map((option) => {
          return (
            <button
              key={option.id}
              className='btn'
              onClick={() => setModule(option.module)}
            >
              Module {option.id}
            </button>
          )
        })}
      </div>
      <div className='container'>{module}</div>
    </>
  )
}

export default App
