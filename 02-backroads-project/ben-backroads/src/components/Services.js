import { serviceItems } from '../data'
import Title from './Title'

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title blackText='our' colorText='services' />

      <div className='section-center services-center'>
        {serviceItems.map(({ id, icon, title, body }) => {
          return (
            <article className='service' key={id}>
              <span className='service-icon'>
                <i className={icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{title}</h4>
                <p className='service-text'>{body}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services
