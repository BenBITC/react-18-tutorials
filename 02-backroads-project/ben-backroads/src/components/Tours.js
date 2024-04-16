import Title from './Title'
import { featuredTours } from '../data'

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title blackText='featured' colorText='tours' />

      <div className='section-center featured-center'>
        {featuredTours.map(
          ({ id, image, title, date, body, country, duration, price }) => {
            return (
              <article className='tour-card' key={id}>
                <div className='tour-img-container'>
                  <img src={image} className='tour-img' alt='' />
                  <p className='tour-date'>{date}</p>
                </div>
                <div className='tour-info'>
                  <div className='tour-title'>
                    <h4>{title}</h4>
                  </div>
                  <p>{body}</p>
                  <div className='tour-footer'>
                    <p>
                      <span>
                        <i className='fas fa-map'></i>
                      </span>
                      {country}
                    </p>
                    <p>{`${duration} days`}</p>
                    <p>{`from $${price}`}</p>
                  </div>
                </div>
              </article>
            )
          }
        )}
      </div>
    </section>
  )
}
export default Tours
