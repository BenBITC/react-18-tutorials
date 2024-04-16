import React from 'react'
import avatar from '../../../assets/default-avatar.svg'
export function Person({ name, nickName = 'none', images }) {
  const image = images?.[0]?.small?.url ?? avatar

  return (
    <div>
      <img src={image} alt={name} style={{ width: '50px' }} />
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  )
}
