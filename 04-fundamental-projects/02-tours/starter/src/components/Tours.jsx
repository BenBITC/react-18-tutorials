import Tour from './Tour'

const Tours = ({ toursData, removeTour, fetchData }) => {
  if (toursData.length === 0) {
    return (
      <div className='title'>
        <button
          className='btn'
          style={{ marginTop: '3rem' }}
          onClick={fetchData}
        >
          Refresh
        </button>
      </div>
    )
  }

  return (
    <section className='tours'>
      {toursData?.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />
      })}
    </section>
  )
}
export default Tours
