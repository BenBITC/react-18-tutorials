import aboutImg from '../images/about.jpeg'
import Title from './Title'

const About = () => {
  return (
    <section className='section' id='about'>
      <Title blackText='about' colorText='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            We're passionate about adventure travel and committed to providing
            exceptional experiences that go beyond the ordinary.
          </p>
          <p>
            Backroads is for travelers who crave unique experiences and
            authentic connections. We curate small-group tours that delve
            deeper, allowing you to truly immerse yourself in the local culture,
            history, and landscapes.
          </p>
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  )
}
export default About
