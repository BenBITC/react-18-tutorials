import { useState } from 'react'

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='single-tour'>
      <div className='tour-price'>${price}</div>
      <img src={image} alt={name} className='img' />
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {expanded ? info : `${info.substring(0, 200)}...`}{' '}
          <button
            className='info-btn'
            onClick={() => {
              setExpanded(!expanded)
            }}
          >
            {expanded ? 'show less' : 'read more'}
          </button>
        </p>

        <button
          className='delete-btn btn btn-block'
          onClick={() => {
            removeTour(id)
          }}
        >
          not interested
        </button>
      </div>
    </article>
  )
}
export default Tour
