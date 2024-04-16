import React from 'react'
export function Selector({ options, setModule }) {
  return (
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
  )
}
