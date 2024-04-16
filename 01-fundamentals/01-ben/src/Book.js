const Book = ({ id, image, title, author, index, children }) => {
  return (
    <article className='book'>
      <Image imageURL={image} altText={title} />
      <Title titleText={title} index={index} />
      <Author authorName={author} />
    </article>
  )
}

const Image = ({ imageURL, altText }) => {
  return <img src={imageURL} alt={altText} />
}
const Title = ({ titleText, index }) => {
  return (
    <>
      <h2>{titleText}</h2>
      <span className='number'>#{index + 1}</span>
    </>
  )
}
const Author = ({ authorName }) => {
  return <h4>{authorName}</h4>
}

export default Book
