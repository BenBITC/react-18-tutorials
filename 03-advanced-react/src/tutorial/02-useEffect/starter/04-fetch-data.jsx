import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])

  const dataFetchFunction = async () => {
    const response = await fetch(url)
    const usersResponse = await response.json()
    console.log(usersResponse)
    setUsers(usersResponse)
  }

  useEffect(() => {
    dataFetchFunction()
  }, [])

  return (
    <section>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <div>
                <h5>{user.login}</h5>
                <a href={user.url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default FetchData
