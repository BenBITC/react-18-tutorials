import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [toursData, setToursData] = useState([])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data)
      setToursData(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  const removeTour = (removedId) => {
    const newData = toursData.filter((tour) => tour.id !== removedId)
    setToursData(newData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='title-underline'></div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <Tours
          toursData={toursData}
          removeTour={removeTour}
          fetchData={fetchData}
        />
      )}
    </main>
  )
}
export default App
