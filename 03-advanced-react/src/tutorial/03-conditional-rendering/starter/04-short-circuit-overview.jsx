import { useState } from 'react'

const ShortCircuitOverview = () => {
  const [truthy, setTruthy] = useState('spaghetti')
  const [falsy, setFalsy] = useState(0)

  return (
    <div>
      <h2>Truthy and {truthy && falsy}</h2>
      <h2>Truthy or {truthy || falsy}</h2>
      <h2>Falsy and {falsy && truthy}</h2>
      <h2>Falsy or {falsy || truthy}</h2>
    </div>
  )
}
export default ShortCircuitOverview
