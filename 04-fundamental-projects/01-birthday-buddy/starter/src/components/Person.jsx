const Person = ({ name, age, image }) => {
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div className='text-content'>
        <h4 className='name'>{name}</h4>
        <p className='age'>{age} years</p>
      </div>
    </article>
  )
}
export default Person
